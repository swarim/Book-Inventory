"""
Serializers for the BookInventory app.
"""
from rest_framework import serializers
from BookInventory.models import Inventory

class InventorySerializer(serializers.ModelSerializer):
    """
    Serializer for Inventory model.

    Attributes
    ----------
    Meta : class
        Metadata for the serializer

    Methods
    -------
    validate_isbn(value)
        Check if ISBN is a 13-digit number.
    """
    class Meta:
        model = Inventory
        fields = '__all__'

    def validate_isbn(self, value):
        """
        Check if ISBN is a 13-digit number.

        Parameters
        ----------
        value : str
            ISBN number
        
        Returns
        -------
        str
            ISBN number

        Raises
        ------
        serializers.ValidationError
            If ISBN is not a 13-digit number
        """
        if not value.isdigit() or len(value) != 13:
            raise serializers.ValidationError("ISBN must be a 13-digit number.")
        return value
