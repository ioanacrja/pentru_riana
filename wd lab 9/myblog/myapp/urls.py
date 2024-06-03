from django.urls import path # type: ignore
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('blogs/', views.blogs, name='blogs'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('contact/', views.contact, name='contact'),  # Assuming you have a contact view
    path('blogs/greece/', views.greece, name='greece'),
    path('blogs/bucharest/', views.bucharest, name='bucharest'),
    path('blogs/denmark2/', views.denmark2, name='denmark2'),
    path('blogs/england/', views.england, name='england'),
    path('blogs/netherlands/', views.netherlands, name='netherlands'),
     path('post/<int:post_id>/', views.post_detail, name='post_detail'),
]
