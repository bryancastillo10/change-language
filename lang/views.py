from django.shortcuts import render
from django.utils.translation import gettext as _
from django.utils.translation import get_language, activate, gettext


def home(request):
    trans = translate(language="zh")
    return render(request, "home.html", {"trans": trans})


def translate(language):
    cur_language = get_language()
    try:
        activate(language)
        text = gettext("hello")
    finally:
        activate(cur_language)
    return text
