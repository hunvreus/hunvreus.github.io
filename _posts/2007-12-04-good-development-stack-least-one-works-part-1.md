---
layout: post
title: "A good development stack, at least one that works - Part 1"
comments: true
---

Back in the day, when I was a young and furless geek to be, I was relying on Notepad, my FTP client and EasyPHP. How foolish I was then... Well, if was still using just those tools, I would deserve spending the rest of my days patching Windows ME, but for the last few years I have been constantly improving my development process, at least I hope so. It is pretty common to find discussions about what kind of tools developers use, but I rarely, if ever, found anybody describing its whole development stack, from one end to another. Well, here I go...

Note: even if I also do some Java and Ruby (real beginner for this last one), what follows is focusing on the LAMP environment.

### Develop

![Screenshot of Eclipse](/files/eclipse.png)

I must admit that I now almost exclusively code with [Eclipse](http://www.eclipse.org/); it is Open-Source, works on any platform and supports pretty much any kind of language. I especially appreciate the abundance of extensions.

For PHP support, look for [PHPEclipse](http://www.phpeclipse.net); Eclipse has a pretty neat system for installing extensions. You should easily find tutorials.

Even if a lot of developers will recommend the use of the [Web Tools Platform (WTP)](http://www.eclipse.org/webtools/) for Web languages support (HTML, CSS, Javascript), I would rather go for [Aptana](http://www.aptana.com/). Although WTP is consistent and reliable, its install tends to be tricky. Just make your own choice, but keep in mind that you will spend a lot of time tracking dependencies if you choose WTP.

Last but not least, I strongly advise anybody doing anything serious in terms of development to use a version control system: [CVS](http://www.nongnu.org/cvs/) has served well the community for several years, but [Subversion](http://subversion.tigris.org/) imposed itself as its successor. CVS support is built-in Eclipse, but if you want to go for Subversion you will need the [Subclipse](http://subclipse.tigris.org/) plugin for Eclipse.

This being said, I still occasionally use [Notepad++](http://notepad-plus.sourceforge.net) (Windows), [Smultron](http://smultron.sourceforge.net/) (Mac OS) or [vi](http://en.wikipedia.org/wiki/Vi) (Mac OS & Linux) for casual coding.

### Test and publish

![AMP](/files/lamp.png)

Once you've written some code, you're gonna have to test it. If you are running Mac OS, Apache and PHP are already installed. If you are using Linux, well you should know how to install the damn thing. For Windows users, you can use [XAMPP](http://www.apachefriends.org/en/xampp.html). However, if this is something bigger than a simple module or Web application, let's say a Web community, I think being able to recreate the exact conditions in which your code will be deployed is essential. Here enter [VMware](http://www.vmware.com/) and [Xen](http://www.xen.org). These will allow you to run virtual machines on your computer, which means you can emulate your server and test your developments locally. This also may be interesting for teams; each developer can have a virtual server running on his own computer for unit testing, a test server can then be reserved for integration testing (that is something that I've always wanted to implement in my previous companies, but which never got approved by my managers... yet).

This was for the environment part, but how do you get your work published on the test or production server? If you have complete control over your servers, I'd say that [rsync](http://samba.anu.edu.au/rsync/) is a good choice, if not the best. But you may not be able to use such kind of feature (shared web hosts don't usually propose rsync), or maybe you don't feel like installing such a system. No problem: you can synchronize local and remote files though FTP with [FullSync](http://fullsync.sourceforge.net/). I mainly use it on my laptop; my developments are periodically replicated in my testing LAMP environment. Doing this, I keep on one side my development files that eventually will be committed to the Subversion server, while on the other side I have a replica that I can test, tweak or even nuke (if things get dirty) in the test environment.

This synchronization can be done with any regular FTP client, but after the 67th update you may start to feel a bit bored. Speaking of which, I here give you my list of recommended FTP clients:

- [FireFTP](https://addons.mozilla.org/en-US/firefox/addon/1843) is a Firefox extension, thus cross-platform, but can be slow (especially considering Firefox's memory consumption with large number of tabs),
- [FileZilla](http://filezilla-project.org/) which just became cross-platform,
- [Cyberduck](http://cyberduck.ch/), the reference for Mac users,

Finally, I want to mention two tools I am really addicted to:

- [Firebug](https://addons.mozilla.org/en-US/firefox/addon/1843) is a "must have", seriously. With it you'll be able to inspect, edit, debug CSS, HTML and Javascript in live, directly within the web page,
- [Selenium](https://addons.mozilla.org/en-US/firefox/addon/2079) which you can use for implementing programmatic testing,

*To be continued...*