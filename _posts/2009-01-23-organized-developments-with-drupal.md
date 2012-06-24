---
layout: post
title: "Organized developments with Drupal"
comments: true
---

![Whiteboard](http://teddy.fr/files/whiteboard.png)

As any other geek, I have spent a fair amount of time since I started coding looking for an efficient process when developing websites. After working for about a year leading Raincity Studios' team in Shanghai, the thing that I most enjoy is the technical side of the development process. The following is a rough idea of how we organize our work for our clients; I have already seen people discussing their own SVN structure or workflow when dealing with Drupal projects, but never did I see a complete overview of their process.

### Tools and structure</h3>

#### Client

Nothing new here for anybody with a minimum of experience in Web development, but I'll still list it:

- A version control client; SVN, CVS, GIT...
- An SSH client (Windows users should consider [PuTTy](http://www.chiark.greenend.org.uk/~sgtatham/putty/))
- Any kind of code editor; [Eclipse](http://www.eclipse.org/), [Smultron](http://www.tuppis.com/smultron/), [Textmate](http://macromates.com/), [Open Komodo](http://www.openkomodo.com/), Notepad, even Dreamwaver if you want (and are ready to handle bashing from other developers). As an aside note, I have used Eclipse for a long time (since I started coding in Java), because it's open source, extremely flexible, good looking and feature-rich (having the Javadoc excerpt displayed when hovering a function for example is damn useful). However, since version 3.1 (if I remember correctly) this editor proved to be slower and slower; frequent workspace rebuilds lasting more than 5 mn (great when you are really in a rush to push that last minute change before delivering a milestone to a client), slowness of response when browsing the projects... I just could not use it anymore. I switched to Textmate (I used to be an emacs user but the transition from Eclipse would have been brutal). I handle all the SVN commands via the shell and it proved to be as efficient as my previous development stack.

#### Server

- A **version control server** (we'll use Subversion in this example).
- A web server on which we'll host the dev and beta versions of our website:
    - The **development site** (dev.my-dev-domain.com); this version of the trunk is updated automatically though a cron every X minutes. It allows us to do all the integration testing without having to login on the server and update the trunk: just wait for about a minute and you can test the latest version of the project.
    - The **beta site** (beta.my-dev-domain.com); that is what the client actually sees. This version is based on the latest SVN tag. Every time we feel we are ready to publish a new stable version of our site, we create a tag in the SVN repository and then *svn switch* to that tag on the beta server.

#### Repository

This is somehow the part I prefer. We sure use the same **tags**, **trunk** and **branches** directories as everybody else, however we organize the sub-folders in a specific way. If you go into our trunk on a freshly started project you should find the following folders:

![Repository's structure](http://teddy.fr/files/repository.png)

- **html/**: this folder will contain the core code of Drupal, and we will leave it untouched except for the **sites/** folder:
    - **sites/**: this is where we are going to link to the modules and themes we want to add to the basic Drupal distribution, as well as the configuration and files folder of our local install:
        - **all/**: we here just add a couple symbolic links to the modules and themes folders: *ln -s ../../../themes themes* and *ln -s ../../../modules modules*.
        - **dev.local/**: just as an example, but we <u>do not version that part</u> (svn:ignore), we just use it to run a local version.
- **modules/**: this is where we are going to save all the modules we add to the project, but we keep two separate folders depending on the nature of the module:
    - **contrib/**: this is where all the contributed modules (available on Drupal.org) go.
    - **custom/**: every custom module developed for that project goes here.
- **themes/**: supposedly this folder contains all the themes we may need to add, however in practice it usually is the one custom theme developed for that project.
- **misc/**: in the same idea of leaving Drupal's core untouched in the **html/** folder, we will put in the **misc/** folder every piece of code that may be required for that project. When you install the [jQuery UI module](http://drupal.org/project/jquery_ui) for example, you need to add the actual [jQuery UI library](http://ui.jquery.com/) to the Drupal module and rename it to jquery.ui. Modifying contributed code is evil (I even heard people saying "Kicking babies evil!"); just dump the original library in the **misc/** folder and link to it from the jquery_ui module folder and you're done (and no baby has been harmed).

### The workflow

So now we have a neat repository, that allows us to keep things organized and maintainable, and the structure to potentially run everything from code revisions, to integration testing and beta release. Let's sum up the workflow:

![Overview of the development process](http://teddy.fr/files/process.png)

1. **Development & unit testing**: developers run local copies of the project on which they work. They do code changes locally and commit it to the SVN repository when unit tests are passed.
1. **Push to the dev server**: once code has been committed, the next cron will push the changes to the dev server. The coders may need to replicate some of the database changes manually (like activating a new module), after what he can ensure his work is working well with the latest version of the project (integration testing).
1. **Push to the beta server**: after we released a tag of the project we "push" it on the beta server and double check that everything is running smoothly before giving access to the client. If there is a problem, we still can revert to the previous version.

### What else?

There are a couple more things that I find useful:

- **Clean versions of your repository structure**; we maintain two versions of our repository structure (one for Drupal 5 and another for Drupal 6) that includes the average set of modules we use over almost all our projects: pathauto, imagecache, CCK, Views... and our base theme (BluePrint). When creating a new project, we just need to retrieve that version and replicate it in our project's repository.
- **Fresh installs of Drupal**; which I call "the lab". These are freshly installed versions of Drupal 5 and 6 which databases are re-imported every day. Most of us also have local copy of these on our personal machines, but we sometimes are more than one working on a proof of concept (or simply don't want to mess our local version).

This covers a small part of the development process, the most technical part of it actually. There are obviously many other things that are needed along a project (ticketing system, documentation platform...): if some you are interested, I may write about it in the future.