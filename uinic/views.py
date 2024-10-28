from django.shortcuts import render, redirect, get_object_or_404
from atmin.models import Event,RundownItem,Home,FAQ,Sponsorship

def index(requests):
    home = Home.objects.get(id=1)
    event = Event.objects.all().order_by('-date')
    context = {
        'event' : event,
        'home' : home,
    }
    return render(requests,'homepage.html',context)

def event_detail(request, event_id):
    home = Home.objects.get(id=1)
    event = Event.objects.get(id=event_id)
    rundowns = list(RundownItem.objects.filter(event=event).order_by('time'))
    questions = FAQ.objects.filter(event_id=event_id)
    sponsors = Sponsorship.objects.filter(event_id=event_id)

    # Add next_time to each rundown
    for i in range(len(rundowns) - 1):
        rundowns[i].next_time = rundowns[i + 1].time
    if rundowns:
        rundowns[-1].next_time = None 
    context = {
        'home' : home,
        'event': event,
        'rundown' : rundowns,
        'questions' : questions,
        'sponsors' : sponsors,
    }
    return render(request, 'detail_event.html', context)