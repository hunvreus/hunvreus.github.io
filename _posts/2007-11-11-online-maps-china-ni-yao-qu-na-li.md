---
layout: post
title: "Online maps in China: ni yao qu na li?"
---

![Compass](http://teddy.fr/files/you_are_here.jpg)

Since I started working for my current company, I have been dreaming of being able to deploy a Google-like map that would allow me to present our listings of venues in a more comprehensive way. Well, as for many other things in China, things are not simple.

When I am saying that things are not simple, I think I have to admit that my situation is not simple from the very beginning; dealing with expatriate web communities in Asian countries means proposing English speaking products in Asian speaking environments. I am not fluent neither in Mandarin, nor in Cantonese or Thai, thus finding an answer to some of my questions is most of the time the result of long hours spent over the Internet translating, searching, tweaking and, well, banging my head all around the place. Here is what I found so far:

<dl>
<dt><a href="http://ditu.google.cn" title="Google Ditu homepage">Google Ditu</a></dt>
<dd>Well you all know Google Maps; same service here, but maps are delivered by <a href="http://www.mapabc.com" title="Mapabc homepage">Mapabc</a> (see the copyright at the bottom of the maps ?), plus <a href="http://google.cn/apis/maps/" title="Google Ditu API">the API</a> is much more limited that in Western countries (why no getLatLng( ) method Google, whyyyyyyy ?). Google first tried to launch its map service by itself, it was then called Google Bendi, but they finally decided to go for Mapabc.</dd>
<dt><a href="http://mapabc.com" title="Mapabc homepage">Mapabc</a></dt>
<dd>One of the mammoths of the Chinese map industry. They have clean and accurate maps. No wonder Google chose them, no API though.</dd>
<dt><a href="http://mapbar.com" title="Mapbar homepage">Mapbar</a></dt>
<dd>Another big chinese company; they have accurate maps as well but a bit messier than Mapabc. No real API either, but they do have some customized products (you will need to <a href="http://ditu.mapbar.com:8200/sharemap/sharemap/user.do?method=trunRegister&amp;curl=http://ditu.mapbar.com/" title="Register to Mapbar">register</a> first) and some <a href="http://partner.mapbar.com/bar/code.htm" title="Mapbar search widgets">search widgets to be included in a Web page</a> (through iframes, ouch!). Their real advantage, from my point of view, is that they started publishing <a href="http://english.mapbar.com/enmodule/" title="Mapbar in English for Beijing">English versions of their maps</a> (you will need IE to view this page).</dd>
<dt><a href="http://www.51ditu.com/" title="51ditu homepage">51ditu</a></dt>
<dd>Clean and fast, moreover they provide a <a href="http://mapplet.51ditu.com/index.html" title="51ditu Mapplets guides">clear</a> <a href="http://api.51ditu.com/docs/mapsapi/reference.html" title="51ditu API">API</a>. They sure haven't all of Google Maps' functionalities but they develop really fast; a few months ago they launched <a href="http://www.51ditu3d.com/" title="LTEarth, the Google Earth-like">LTEarth</a> a Google Earth-like.</dd>
<dt><a href="http://gsuo.com/" title="Gsuo aka DDmap homepage">Gsuo/DDmap</a></dt>
<dd>A bit cleaner than Mapbar, what I prefer with Gsuo is that they really list everything; I may be wrong since I haven't used its challengers as much, but they really have addresses for all the places I have been looking for so far, both Western and Chinese. I have found Mapbar listings for example to be inconsistent to say the least.</dd>
<dt><a href="http://www.edushi.com" title="edushi homepage">edushi</a></dt>
<dd>The funkiest one; one of my interns showed me this website about a year ago. It basically is a quite extensive collection of Sim City-like maps for large Chinese cities. Just <a href="http://sh.edushi.com" title="edushi's map of Shanghai">give it a try</a>: they must have an army of designers to put so many details on their maps.</dd>
<dt><a href="http://www.city8.com/" title="city8 homepage">city8</a></dt>
<dd>A mashup with Mapabc that provides immersive panoramic pictures of many places in large Chinese cities: funny and technically impressive but this kind of service tends to give me a headache after 5 minutes of use, mainly because of the discontinuous navigation (it kind of reminds me of RPGs on my old Amstrad CPC).</dd>
</dl>

Some of these information may be wrong (as I said I am far from being fluent in Mandarin), so don't hesitate to share your comments.