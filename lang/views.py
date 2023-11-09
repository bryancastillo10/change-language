from django.shortcuts import render
from django.utils.translation import gettext as _


def home(request):
    trans = _("Hello")
    return render(request, "home.html", {"trans": trans})
