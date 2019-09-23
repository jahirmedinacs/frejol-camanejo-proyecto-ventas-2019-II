from django.http import HttpResponse
from django.template import loader

from . import graphics

def index(request):

    status = graphics.random_noise_img()
    temp__ = "Mr Potato"
    template = loader.get_template('profiler/index.html')
    context = {
    'name': temp__,
    'status': status
    }
    return HttpResponse(template.render(context, request))