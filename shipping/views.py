from rest_framework import viewsets, filters
from .models import Warehouse, Carrier, Customer, Shipment, Package, TrackingEvent, ShipmentItem
from .serializers import (
    WarehouseSerializer,
    CarrierSerializer,
    CustomerSerializer,
    ShipmentSerializer,
    PackageSerializer,
    TrackingEventSerializer,
    ShipmentItemSerializer,
)


class WarehouseViewSet(viewsets.ModelViewSet):
    queryset = Warehouse.objects.all().order_by("name")
    serializer_class = WarehouseSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["name", "code", "city", "country"]
    ordering_fields = ["name", "code", "city", "country", "created_at"]


class CarrierViewSet(viewsets.ModelViewSet):
    queryset = Carrier.objects.all().order_by("name")
    serializer_class = CarrierSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["name", "code"]
    ordering_fields = ["name", "code", "created_at"]


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all().order_by("last_name", "first_name")
    serializer_class = CustomerSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["first_name", "last_name", "email", "city", "country"]
    ordering_fields = ["last_name", "first_name", "created_at"]


class ShipmentViewSet(viewsets.ModelViewSet):
    queryset = Shipment.objects.select_related("origin", "destination", "customer", "carrier").prefetch_related("packages", "items").all().order_by("-created_at")
    serializer_class = ShipmentSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["reference", "customer__first_name", "customer__last_name", "carrier__name"]
    ordering_fields = ["created_at", "ship_date", "delivery_date", "status"]


class PackageViewSet(viewsets.ModelViewSet):
    queryset = Package.objects.select_related("shipment").all().order_by("-created_at")
    serializer_class = PackageSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["tracking_number", "shipment__reference"]
    ordering_fields = ["created_at", "weight_kg"]


class TrackingEventViewSet(viewsets.ModelViewSet):
    queryset = TrackingEvent.objects.select_related("package", "package__shipment").all()
    serializer_class = TrackingEventSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["package__tracking_number", "event_code", "location", "description"]
    ordering_fields = ["event_time", "created_at"]


class ShipmentItemViewSet(viewsets.ModelViewSet):
    queryset = ShipmentItem.objects.select_related("shipment").all()
    serializer_class = ShipmentItemSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["name", "sku", "shipment__reference"]
    ordering_fields = ["created_at", "quantity"]
