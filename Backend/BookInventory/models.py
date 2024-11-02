"""
This file contains the model for the Book Inventory.
"""
from django.db import models

class Inventory(models.Model):
    """
    Model for the Book Inventory.

    Attributes
    ----------
    entry_id : AutoField
        Primary key for the table
    title : CharField
        Title of the book
    author : CharField
        Author of the book
    genre : CharField
        Genre of the book
    publication_date : DateField
        Publication date of the book
    isbn : CharField
        13-character ISBN number
    """
    # Primary key for the table
    entry_id = models.AutoField(primary_key=True)
    
    # Book details
    title = models.CharField(max_length=255, help_text="Title of the book")
    author = models.CharField(max_length=255, help_text="Author of the book")
    genre = models.CharField(max_length=100, help_text="Genre of the book")
    
    # Date and ISBN
    publication_date = models.DateField(help_text="Publication date of the book")
    isbn = models.CharField(max_length=13, unique=True, help_text="13-character ISBN number")

    class Meta:
        """
        Metadata for the model.
        """
        # Custom table name
        db_table = 'inventory'
        # Ordering by publication date (latest first)
        ordering = ['-publication_date']
        # Verbose name for admin interface
        verbose_name = "Book"
        verbose_name_plural = "Books"

    def __str__(self):
        """
        String representation of the model.

        Returns
        -------
        str
            Title and author of the book
        """
        return f"{self.title} by {self.author}"