---
layout: post
title: "Leaving notes on pictures a la Flickr with Drupal"
---

![Flickr-like annotations](http://teddy.fr/files/image_annotate.png)

I just released the first official version of my [Image Annotate module](http://drupal.org/project/image_annotate); in a nutshell it allows users to select an area on a picture and associate a note to it. Flickr has been doing it for a while and Facebook uses the same kind of system for allowing its users to tag friends in pictures. This module uses the [jQuery UI library](http://jqueryui.com) and works with [Imagefield](http://drupal.org/project/imagefield) for the moment. If you want to see it in action, [go have a look on the test website](http://d6.wiredcraft.com/image-annotate). If you sign in using OpenID, you will be able to add new pictures, but even anonymous users can add notes to existing pictures.

This version is basically enhancing node comments with coordinates on the ImageField picture (size and position). This allows for notes to be indexed and searchable and is, in my opinion, the most accessible solution. At the moment, you only have simple notes but I am working on adding a hook that will allow people to extend it and should lead to things such as user references, which should work the same way as on Facebook. There are some minor improvements to be done in other areas as well, including the user permissions, but this can wait the next version.

When installing this module there are a few things to keep in mind:

- You may end up having to enable a fair amount of modules since the two main dependencies ([jQuery UI](http://drupal.org/project/jquery_ui) and [Imagefield](http://drupal.org/project/imagefield)) have themselves other dependencies.
- Setting up a field as an image with annotations can seem tricky, so make sure to properly read the README.txt file before posting an issue. In particular, you need to activate the right widget in the "Display fields" section of the field settings.

Hope people will have fun with it: I need to get back to DrupalCon's conferences now!

