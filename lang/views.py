from django.shortcuts import render
from django.utils.translation import gettext as _


def home(request):
    trans = _("hello", {"trans": trans})
