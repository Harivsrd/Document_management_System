from django.urls import path
from .views import UploadDocumentAPI, AllDocumentsAPI

urlpatterns = [
    path('upload/', UploadDocumentAPI.as_view()),
    path('all/', AllDocumentsAPI.as_view()),
]
