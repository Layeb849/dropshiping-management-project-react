from django.contrib import admin
from .models import Warehouse, Carrier, Customer, Shipment, Package, TrackingEvent


@admin.register(Warehouse)
class WarehouseAdmin(admin.ModelAdmin):
    list_display = ("code", "name", "city", "country", "created_at")
    search_fields = ("code", "name", "city", "country")
    list_filter = ("country",)


@admin.register(Carrier)
class CarrierAdmin(admin.ModelAdmin):
    list_display = ("code", "name")
    search_fields = ("code", "name")


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email", "city", "country")
    search_fields = ("first_name", "last_name", "email")
    list_filter = ("country",)


class PackageInline(admin.TabularInline):
    model = Package
    extra = 0


@admin.register(Shipment)
class ShipmentAdmin(admin.ModelAdmin):
    list_display = ("reference", "status", "origin", "carrier", "customer", "ship_date", "delivery_date")
    list_filter = ("status", "carrier")
    search_fields = ("reference", "customer__first_name", "customer__last_name")
    inlines = [PackageInline]


@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ("tracking_number", "shipment", "weight_kg")
    search_fields = ("tracking_number", "shipment__reference")


@admin.register(TrackingEvent)
class TrackingEventAdmin(admin.ModelAdmin):
    list_display = ("package", "event_code", "location", "event_time")
    list_filter = ("event_code",)
    search_fields = ("package__tracking_number", "location", "description")
