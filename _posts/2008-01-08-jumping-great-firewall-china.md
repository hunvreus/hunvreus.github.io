---
layout: post
title: "Jumping the Great Firewall of China"
---

![Slam dunk](http://teddy.fr/files/yaoming.png)

I've recently spent a few weeks in France, and even if I usually end up realizing why I left Europe (I won't develop further more here), there is one thing I really enjoy while out of China; you can actually access what you want on the Internet, furthermore with a decent speed. I spend 99% of my time at work (and a huge portion of my free time as well) on the Web, developing, testing, uploading, and China sure is not the sweetest place for my kind. Well, enough whining, what are the actual solutions if you want to bypass Chinese censorship? Follow me...

### Technique #1: Ask a friend

The simplest way to access censored information (let's say Wikipedia for example) would be to use proxy services; you basically rely on a reachable third party to provide you the content you can not access. I won't say much about this method, I [already did in a previous post](/blog/internet-%E6%B2%A1%E6%9C%89#proxies) and you can easily find loads of information about it on the Internet anyway.

I often use this technique as it is as simple as going to a website like [anonymouse.org](http://anonymouse.org) and then specify which URL you want to access. No need for installing any piece of software, no fee, just a couple ads popups. The problem is that, since your URL and the content you access are both sent unencrypted on the Internet, you may sometimes be censored anyway. Moreover, some content like videos, pictures or Javascript based Web apps (undesrtand Web 2.0-ish) won't work.

### Technique #2: Guess where I'm going...

I use two more evolved ways of bypassing restrictions, which both imply encryption at some point.

[Tor](http://www.torproject.org/) is basically a network of virtual tunnels made of thousands of computer acting as relays. Your information is sent encrypted in this network in a way that makes it close to impossible to determine what is transmitted, where it's headed and where it's coming from. Tor's website provides all the information you need to understand [how it works](https://www.torproject.org/overview.html.en) as well as [how to install it](https://www.torproject.org/documentation.html.en#RunningTor).

The second method is SSH Tunneling: you basically redirect all the traffic on a port to another machine through an SSH connection. this is efficient, but require you to understand the basics of SSH. I personally use that method mainly for technical purposes, using web servers in the US and France. For Mac users I recommend [SSH Tunnel Manager](http://projects.tynsoe.org/en/stm/), Windows users can download [PuTTy](http://www.chiark.greenend.org.uk/~sgtatham/putty/) (a must have). Linux users should already know how to do it, if not there are [plenty of resources online](http://tinyurl.com/7hocue).

### Technique #3: Kiss my Shiny VPN

Ok, not everybody can afford having its own VPN. Either you use your company's or you are a determined geek. But what if you're not? Well, there is a solution (other than bribing a determined geek with beers); [AnchorFree](http://anchorfree.com/) delivers [Hotspot Shield](http://anchorfree.com/downloads/hotspot-shield/), a software that gives you access to a free VPN. It's currently available for Mac OS (Tiger, Panther) and Windows (2000, XP, Vista) and just displays you an ad banner at the top of the Web pages you browse; minor annoyance for using this service.

Once you have it running, you can do pretty much what you would do if connecting from the US; access Wikipedia and other censored websites, but even websites restricted to the US like [Hulu](http://hulu.com).