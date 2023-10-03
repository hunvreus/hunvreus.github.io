---
layout: post
title: "Easy and maintainable slideshows in Drupal"
comments: true
---

![Slideshow](/files/slideshowsample.png)

I received that request for most of my projects in the past year: the client wants a slideshow promoting either some of the content or the main features of the website. I have seen this implemented in many ways; from static Flash animations, to very dynamic, but very heavy, custom modules. I usually like to strip down the concept of a feature to its simplest form, then implement it the easiest way (usually a contributed module). In the end I just hack my way through a couple theme overrides and I'm done.

I am going to explain how to build a promotional slideshow (I will leave the featured content slideshow for a future blog post). The idea is that the client wants to be able to add a slideshow of pictures associated with some text that advertises the main features of his website: "Connect with 10,000 thousands professionals", "Manage your accounting online", "Share your videos easily with your friends"... The only thing is that the client is usually willing to update that information over time and, as far as I like receiving new work, this is not the kind of thing I would enjoy doing.

So the concept is simple: I want to have a customizable collection of elements gathering a picture and a tagline, being able to edit these elements and reorganize them in a sequence that will be displayed as a slideshow. One thing should pop in your head like a *&lt;blink&gt;* tag: [Nodequeue](http://drupal.org/project/nodequeue). With it you'll be able to create sortable lists of nodes. Let's get started!

### Create the Slide content type and the Slideshow nodequeue

First thing you want to do is to add a content type (**admin/content/types/add**): we'll use the name "Slide" and the type "slide". This content type should have an image field (you'll need the [ImageField](http://drupal.org/project/imagefield) module for [CCK](http://drupal.org/project/cck)). I named that field "field_slide_image". We will use the body as the tagline. If you use the Content Copy module (bundled with CCK), you can also directly use the following import files: download [the import file for Drupal 5](/files/slideshowtut/slide.cck.5.txt) or  [the import file for Drupal 6](/files/slideshowtut/slide.cck.6.txt).

Now, let's add a simple nodequeue (**admin/content/nodequeue/add/nodequeue**) named "Slideshow" that is limited to the *Slide* content type. We'll then make sure to create a few *Slide* nodes that we'll add to that nodequeue.

![Queue](/files/slideshowtut/queue.png)

That's it, we are now ready to deal with the appearance and behavior:

### Theming and jQuery

First thing to do is to use [ImageCache](http://drupal.org/project/imagecache): we are going to make sure our pictures have the right size in the slideshow, whatever image has been uploaded. For this we create a new ImageCache preset: I personally will use a preset named "slideshow" that scale then crop to 350px (width) by 220px (height).

![Preset](/files/slideshowtut/preset.png)

Time to theme our Slide nodes. Just create a *node-slide.tpl.php* file in your theme folder with the content:

    <div id="node-<?php print $node->nid; ?>" class="slide">
      <?php print theme('imagecache', 'slideshow', $node->field_slide_image[0]['filepath']); ?>
      <? if (!empty($node->content['body']['#value'])): ?><div class="tagline"><?php print $node->content['body']['#value']; ?></div><?php endif; ?>
    </div>

It will basically display the picture followed by the tagline (if tagline there is). Now, a bit of CSS for styling it:

    .slide {
      position: relative;
      height: 220px;
    }
    
    .slide img {
      border: 0;
      margin: 0;
      padding: 0;
    }
    
    .slide .tagline {
      background: #000;
      color: #fff;
      filter: alpha(opacity = 75);
      font-size: 14px;
      opacity: 0.75;
      position: absolute;
      bottom: 0;
      width: 350px;
    }
    
    .slide .tagline p {	
      margin: 0;
      padding: 7px 10px;
    }

This should give you something like this:

![Slide](/files/slideshowtut/slide.png)

Now, we are going to add the following code where we want to display the slideshow:

    <?php
      drupal_add_js(path_to_theme() .'/slideshow.js');
      print '<div class="slideshow">'. nodequeue_view_nodes(1) .'</div>';
    ?>

**Updates:**

1. from the comments I got, it seems some people actually thought this code could be put into **page.tpl.php**, however this does not work. I actually tested it by putting the content above into a page node, but for people willing to put this directly into their source code, you could easily add the *drupal_add_js()* call into your **template.php** file.
1. the Node Queue module has been updated and <u>*nodequeue_nodes()* has been deprecated in favor of *nodequeue_view_nodes()*</u> (see [http://drupal.org/node/367571](http://drupal.org/node/367571))

The *nodequeue_view_nodes()* function is part of the nodequeue API: this will simply display a list of node teasers for the nodequeue number 1 (this may be different for you if you have already created other nodequeues before the slideshow one). The **slideshow.js** is not yet there, so let's write it. I originally used [Jon Raasch's slideshow script](http://jonraasch.com/blog/a-simple-jquery-slideshow), but as simple as it already is, I consider it still too complex (to tell you the truth I spent 3 hours trying to debug it for one of my clients in Shanghai, and I hate wasting time). Here is my version of the slideshow script:

    $(document).ready( function() {
      // Every six seconds execute the switchSlide() function
      setInterval( "switchSlide()", 6000);
    });
    
    // This function takes the first .slide element and put at the end
    function switchSlide() {
      var slide = $('.slideshow .slide:first');
      slide.hide();
      $('.slideshow').append(slide);
      slide.fadeIn('slow');
    }

[Download the jQuery script](/files/slideshowtut/slideshow.js)

Which goes along with a couple additional CSS rules:

    .slideshow {
      height: 220px;
      width: 350px;
      margin: 0;
      position: relative;
    }
    
    .slideshow .slide {
      position: absolute;
    }

[Download the complete CSS file](/files/slideshowtut/slideshow.css)

Just make sure to have this jQuery script in your theme folder. This code will simply keep on taking the first slide of the queue and move it to the end; since each slide is *position:absolute*, only the latest one is displayed (the others are piled underneath). I added a little *fadeIn()* effect just for the fun of it, but you could put pretty much whatever you want: *slideDown()*, *show()*...

*Pictures in Creative Commons from [junipers](http://junipers.yupoo.com/profile/)*

Now anybody should be able to create, add and sort slides in your slideshow.