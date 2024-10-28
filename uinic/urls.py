from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from . import views

#menangani gambar
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('maou/', admin.site.urls),
    path('', views.index, name='home'),
    path('event/<int:event_id>/', views.event_detail,name="event_detail"),
    path('admin/', include('atmin.urls', namespace='atmin')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #load gambar
