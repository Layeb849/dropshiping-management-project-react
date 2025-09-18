from django.db import models


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Warehouse(TimestampedModel):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=50, unique=True)
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100, blank=True)
    postal_code = models.CharField(max_length=30)
    country = models.CharField(max_length=2, help_text="ISO 3166-1 alpha-2 code")

    def __str__(self) -> str:  # type: ignore[override]
        return f"{self.code} - {self.name}"


class Carrier(TimestampedModel):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=50, unique=True)
    tracking_url_template = models.URLField(blank=True, help_text="Use {tracking_number} placeholder")

    def __str__(self) -> str:  # type: ignore[override]
        return self.name


class Customer(TimestampedModel):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=50, blank=True)
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100, blank=True)
    postal_code = models.CharField(max_length=30)
    country = models.CharField(max_length=2)

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

    reference = models.CharField(max_length=100, unique=True)
    origin = models.ForeignKey(Warehouse, on_delete=models.PROTECT, related_name="shipments_origin")
    destination = models.ForeignKey(Warehouse, on_delete=models.PROTECT, related_name="shipments_destination", null=True, blank=True)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT, related_name="shipments")
    carrier = models.ForeignKey(Carrier, on_delete=models.PROTECT, related_name="shipments")
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.CREATED)
    ship_date = models.DateField(null=True, blank=True)
    delivery_date = models.DateField(null=True, blank=True)

    def __str__(self) -> str:  # type: ignore[override]
        return self.reference


class Package(TimestampedModel):
    shipment = models.ForeignKey(Shipment, on_delete=models.CASCADE, related_name="packages")
    weight_kg = models.DecimalField(max_digits=10, decimal_places=3)
    length_cm = models.DecimalField(max_digits=10, decimal_places=2)
    width_cm = models.DecimalField(max_digits=10, decimal_places=2)
    height_cm = models.DecimalField(max_digits=10, decimal_places=2)
    tracking_number = models.CharField(max_length=100, unique=True)

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
    event_code = models.CharField(max_length=50, choices=EventCode.choices)
    description = models.CharField(max_length=255, blank=True)
    location = models.CharField(max_length=255, blank=True)
    event_time = models.DateTimeField()

    class Meta:
        ordering = ["-event_time", "-created_at"]

    def __str__(self) -> str:  # type: ignore[override]
        return f"{self.package.tracking_number} - {self.event_code}"
