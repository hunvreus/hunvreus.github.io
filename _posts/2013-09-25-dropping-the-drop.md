---
title: Dropping The Drop
layout: post
published: true
comments: true
---

I started playing with Drupal to build this very site around 2005. Starting 2006, I was using it at work. Over the course of the following few years, I took on gradually larger projects, working with CNN, the World Bank and the United Nations. I even (briefly) took part in the Drupal Association, the non-profit supporting the Drupal project.

Two years ago, my company, [Wiredcraft](http://wiredcraft.com), decided to stop using Drupal. It's now been a while since we last built or maintained anything Drupal. This move wasn't without challenges; a significant portion of our business was tied up to Drupal in one way or another. While our projects usually included a significant portion of work on infrastructure, data visualization and data warehousing, Drupal often was a leading part of the discussion with our clients.

For many of these clients and some of my friends, it seemed like an abrupt change of direction both technically and strategically. It was. We dicarded a large part of our technical expertise and a significant portion of our sales channels.

And I'd do it again.

People asked why, I thought I'd gather what I can remember of our thought process back then.

## Drupal 7

The very first platform we had to launch on Drupal 7 was the final argument against it. Getting it up and running outlined a trend that seems to only have kept on in later releases;

- **More and more abstraction layers**: I remember passing out at the office over trying to debug queries 
- **Drop in performance**: while Drupal 6 wasn't necessarily known to be snappy, it was manageable and would scale quite well with a couple .
- **A questionable UI trend**; the overall user experience was, in my humble opinion, degrading. While previous version were debatably austere by default, the introduction of complex overlays and awkward AJAX interactions in Drupal 7 simply made it near unusable for most of us.
- **APIs changes**. To be fair, Drupal always has had a clear position with regards to backward compatiblity (as in "none"). But 

Overall, and despite several years using and building on Drupal, we felt the increase of the learning curve, both for developers and end users, made it hard for us 

## A tougher market

The Drupal community had been pretty kind to us in the initial years of Wiredcraft. It isn't 

  - Acquia asphixiating top end market
  - Low end owned by offshore shops (we don't want them but they cerate noise and drag prices down)
  - Middle market has always been hard to spot
  - Previous point made it harder for us to justify investment + rewrite (no backward compatiblity)

## A few other factors

  - Technology fatigue (lack of openneess to other techs, aka "The Drupal Way" tm),
  - Changes of our scope 
  - Saw the trend (Development Seed leaving the space)
  
  - Lack of what really matters: packaging, unit testing, decorellation..
- Even UI excrutiatingly hard to deal with

## Drupal 8

  - Even more changes
  - Would mean total rewrite (again)
  - Doesn't seem to solve main 2 issues we had;
    - Performance
    - UX/DX
  - The technical winners (Panels, complex ODBC, entity fields...) are exactly what we did not want. More conf for the same of customizability, trying to cater to an odd animal; somebody smart enough to figure out complex admin building tools, but not able to code. Don't think that beast really exist outside of Drupal.


