from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from faculty.models import FacultyProfile
from .models import Document
from .serializers import DocumentSerializer

class UploadDocumentAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        faculty = FacultyProfile.objects.get(user=request.user)

        data = request.data.copy()
        data['faculty'] = faculty.id

        serializer = DocumentSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({
            "message": "Document uploaded successfully",
            "document": serializer.data
        })

class AllDocumentsAPI(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        documents = Document.objects.all().order_by('-uploaded_at')
        serializer = DocumentSerializer(documents, many=True)
        return Response(serializer.data)


