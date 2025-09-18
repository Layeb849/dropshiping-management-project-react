from django.db import models


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class AddressFieldsMixin(models.Model):
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100, blank=True)
    postal_code = models.CharField(max_length=30)
    country = models.CharField(max_length=2, help_text="ISO 3166-1 alpha-2 code")

    class Meta:
        abstract = True


class Warehouse(AddressFieldsMixin, TimestampedModel):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=50, unique=True, db_index=True)
    latitude = models.DecimalField(max_digits=8, decimal_places=5, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=5, null=True, blank=True)

    class Meta:
        indexes = [
            models.Index(fields=["city", "country"]),
        ]

    def __str__(self) -> str:  # type: ignore[override]
        return f"{self.code} - {self.name}"


class Carrier(TimestampedModel):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=50, unique=True, db_index=True)
    tracking_url_template = models.URLField(blank=True, help_text="Use {tracking_number} placeholder")

    def __str__(self) -> str:  # type: ignore[override]
        return self.name


class Customer(AddressFieldsMixin, TimestampedModel):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=50, blank=True)

    class Meta:
        indexes = [
            models.Index(fields=["last_name", "first_name"]),
            models.Index(fields=["email"]),
        ]

    def __str__(self) -> str:  # type: ignore[override]
        return f"{self.first_name} {self.last_name}"


class Shipment(TimestampedModel):
    class Status(models.TextChoices):
        CREATED = "created", "Created"
        PICKED = "picked", "Picked"
        IN_TRANSIT = "in_transit", "In Transit"
        OUT_FOR_DELIVERY = "out_for_delivery", "Out for Delivery"
        DELIVERED = "delivered", "Delivered"
        CANCELLED = "cancelled", "Cancelled"

    reference = models.CharField(max_length=100, unique=True, db_index=True)
    origin = models.ForeignKey("Warehouse", on_delete=models.PROTECT, related_name="shipments_origin")
    destination = models.ForeignKey("Warehouse", on_delete=models.PROTECT, related_name="shipments_destination", null=True, blank=True)
    customer = models.ForeignKey("Customer", on_delete=models.PROTECT, related_name="shipments")
    carrier = models.ForeignKey("Carrier", on_delete=models.PROTECT, related_name="shipments")
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.CREATED, db_index=True)
    ship_date = models.DateField(null=True, blank=True, db_index=True)
    delivery_date = models.DateField(null=True, blank=True, db_index=True)

    class Meta:
        indexes = [
            models.Index(fields=["status", "ship_date"]),
            models.Index(fields=["customer", "carrier"]),
        ]
        ordering = ["-created_at"]

    def __str__(self) -> str:  # type: ignore[override]
        return self.reference

    @property
    def total_packages(self) -> int:
        return self.packages.count()


class ShipmentItem(TimestampedModel):
    shipment = models.ForeignKey(Shipment, on_delete=models.CASCADE, related_name="items")
    sku = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=255)
    quantity = models.PositiveIntegerField(default=1)
    unit_weight_kg = models.DecimalField(max_digits=10, decimal_places=3, null=True, blank=True)
    unit_price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)

    class Meta:
        indexes = [
            models.Index(fields=["shipment", "sku"]),
        ]

    def __str__(self) -> str:  # type: ignore[override]
        return f"{self.name} x{self.quantity}"

    @property
    def total_weight_kg(self):
        if self.unit_weight_kg is None:
            return None
        return self.unit_weight_kg * self.quantity

    @property
    def total_price(self):
        if self.unit_price is None:
            return None
        return self.unit_price * self.quantity


class Package(TimestampedModel):
    shipment = models.ForeignKey(Shipment, on_delete=models.CASCADE, related_name="packages")
    weight_kg = models.DecimalField(max_digits=10, decimal_places=3)
    length_cm = models.DecimalField(max_digits=10, decimal_places=2)
    width_cm = models.DecimalField(max_digits=10, decimal_places=2)
    height_cm = models.DecimalField(max_digits=10, decimal_places=2)
    tracking_number = models.CharField(max_length=100, unique=True, db_index=True)

    class Meta:
        indexes = [
            models.Index(fields=["shipment"]),
        ]

    def __str__(self) -> str:  # type: ignore[override]
        return self.tracking_number


class TrackingEvent(TimestampedModel):
    class EventCode(models.TextChoices):
        INFO_RECEIVED = "info_received", "Info Received"
        PICKED_UP = "picked_up", "Picked Up"
        IN_TRANSIT = "in_transit", "In Transit"
        ARRIVED_FACILITY = "arrived_facility", "Arrived at Facility"
        DEPARTED_FACILITY = "departed_facility", "Departed Facility"
        OUT_FOR_DELIVERY = "out_for_delivery", "Out for Delivery"
        DELIVERY_ATTEMPTED = "delivery_attempted", "Delivery Attempted"
        DELIVERED = "delivered", "Delivered"
        EXCEPTION = "exception", "Exception"

    package = models.ForeignKey(Package, on_delete=models.CASCADE, related_name="events")
    event_code = models.CharField(max_length=50, choices=EventCode.choices, db_index=True)
    description = models.CharField(max_length=255, blank=True)
    location = models.CharField(max_length=255, blank=True)
    event_time = models.DateTimeField(db_index=True)

    class Meta:
        ordering = ["-event_time", "-created_at"]
        indexes = [
            models.Index(fields=["package", "event_time"]),
        ]

    def __str__(self) -> str:  # type: ignore[override]
        return f"{self.package.tracking_number} - {self.event_code}"
