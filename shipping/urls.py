from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    WarehouseViewSet,
    CarrierViewSet,
    CustomerViewSet,
    ShipmentViewSet,
    PackageViewSet,
    TrackingEventViewSet,
    ShipmentItemViewSet,
)


router = DefaultRouter()
router.register(r'warehouses', WarehouseViewSet)
router.register(r'carriers', CarrierViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'shipments', ShipmentViewSet)
router.register(r'packages', PackageViewSet)
router.register(r'tracking-events', TrackingEventViewSet)
router.register(r'shipment-items', ShipmentItemViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
