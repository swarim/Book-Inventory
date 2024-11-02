"""
This file contains the views for the BookInventory app.
This is the controller for the Book Inventory API.
"""
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from BookInventory.serializers import InventorySerializer
from BookInventory.models import Inventory


class InventoryList(APIView):
    """
    List all inventory items or create a new item.
    """
    def get(self, request):
        """
        Get all inventory items.
        """
        inventory = Inventory.objects.all()
        serializer = InventorySerializer(inventory, many=True)
        return Response(serializer.data)

    def post(self, request):
        """
        Create a new inventory item.
        """
        serializer = InventorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class InventoryDetail(APIView):
    """
    Retrieve, update, or delete an inventory item.
    """
    def get_object(self, pk):
        """
        Get an inventory item by ID.

        Parameters  
        ----------
        pk : int
            Primary key of the inventory item

        Returns
        -------
        Inventory
            Inventory item with the given ID

        Raises
        ------
        Http404
            If the inventory item does not exist
        """
        try:
            return Inventory.objects.get(pk=pk)
        except Inventory.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        """
        Get an inventory item by ID.
        """
        inventory = self.get_object(pk)
        serializer = InventorySerializer(inventory)
        return Response(serializer.data)

    def put(self, request, pk):
        """
        Update an inventory item by ID.
        """
        inventory = self.get_object(pk)
        serializer = InventorySerializer(inventory, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        """
        Delete an inventory item by ID.
        """
        inventory = self.get_object(pk)
        inventory.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)