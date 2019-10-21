# from django.db import models

from djongo import models

# Create your models here.

class Thing(models.Model):
    _id = models.ObjectIdField()

    name_of = models.CharField(max_length=45, blank=False, null=False)
    public_id = models.IntegerField(blank=False, null=False)
    
    public_name = models.CharField(max_length=45, blank=True, null=True)
    internal_name = models.CharField(max_length=45, blank=True, null=True)

    tags_of = models.ListField(null=True, blank=True)
    metatags_of = models.ListField(null=True, blank=True)

    description = models.TextField(max_length=120, blank=False, null=False)
    detail_description = models.TextField(max_length=500, blank=True, null=True)

    alias_of = models.CharField(max_length=45, blank=True, null=True)

    registration_date = models.DateTimeField(blank=False, null=False)
    #registration_blame = models.ForeignKey()

    class Meta:
        abstract = True

class Item(Thing):
    pass

    

class Inventory(models.Model):
    item = models.ArrayReferenceField(
        to=Item,
        on_delete=models.DO_NOTHING,
    )

    inventory_entry = models.CharField(max_length=120 )

