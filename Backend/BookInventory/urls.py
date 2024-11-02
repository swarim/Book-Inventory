"""This file contains the URL patterns for the BookInventory app."""

from django.urls import path
from BookInventory import views

urlpatterns = [
    path('', views.InventoryList.as_view()), # GET all inventory items or POST a new item
    path('<int:pk>/', views.InventoryDetail.as_view()), # GET, PUT, or DELETE an inventory item by ID
]
