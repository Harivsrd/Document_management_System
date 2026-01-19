from django.db import models
from faculty.models import FacultyProfile

class Document(models.Model):
    STATUS_CHOICES = (
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    )

    faculty = models.ForeignKey(FacultyProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    category = models.CharField(max_length=50)
    file = models.FileField(upload_to='documents/')
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='Approved'
    )
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
