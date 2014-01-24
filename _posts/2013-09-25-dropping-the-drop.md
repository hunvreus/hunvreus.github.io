---
title: Dropping The Drop
layout: post
published: true
comments: true
---

I started playing with Drupal to build this very website around 2005. Starting 2006, I was using it at work. Over the course of the following few years, I took on gradually larger projects involving Drupal, working with CNN, the World Bank and the United Nations. I even briefly took part in the Drupal Association, the non-profit supporting the Open Source project.

A little over 2 years ago, my company, [Wiredcraft](http://wiredcraft.com), decided to stop using it altogether. It's now been a while since we last built or maintained anything Drupal. This move wasn't without challenges; a significant portion of our business was tied up to Drupal in one way or another. While our projects always involved a lot of work on infrastructure, data visualization or data warehousing, Drupal often was a key part of the discussion with our clients.

For many of these clients and some of my friends, it seemed like an abrupt change of direction both technically and strategically. It was. We dicarded a large part of our technical expertise and a significant portion of our sales channels. And we'd probably do it again.

Some of these people asked why; I thought I'd share what I can remember of our thought process back then.

### Drupal 7

Our last major project with it was the launch of our first Drupal 7 site. A frustrated trend clearly emerged:

- **More and more abstraction layers**: I remember passing out at the office while reading through the cryptic errors the combination of Views, entity fields and the database abstraction layer was throwing at me. The core team had sided for more abstraction rather than investing in developer tools like Features.
- **Drop in performance**: while Drupal 6 wasn't necessarily known to be snappy, it was manageable and scaled quite well with simple, repeatable strategies. Drupal 7 was a beast out-of-the-box and took quite some tweaking to run reasonably fast.
- **A questionable UI trend**; the overall user experience was, in my humble opinion, degrading. While previous versions were debatably austere by default, the introduction of complex overlays and awkward AJAX interactions with no consistent UX and UI directions was particularly taxing to me.

Overall, the learning curve for both developers and end-users crossed a threshold that questioned our investment into Drupal.

### A tougher market

The Drupal community had been pretty kind to us in the initial years of Wiredcraft. It was an expanding niche market with high demand for qualified expertise. But things in 2009 were already quickly moving to a less desirable setup:

- **Acquia's success**, which I applaude, was effectively starting to asphixiate the top-end of the market. I am no
- **A growing cheap labor** in the form of offshore shops with low rates, which despite they lack of expertise were effectively dragging the perception of value down, making it harder to extract margins.
- **A thin middle market**. Budget-wise, we often found clients on each end of the spectrum, which made it hard for us to generate steady sales cycles. Drupal has a certain overhead to "just get started", and effectively cut a lot of the low-end of the budgets.

### A few other factors

- **Technology fatigue**: the "Drupal Way" started to become frustrating. Working within the community was effectively keeping a lot of cool technologies at bay. Integrating mature Javascript MVC frameworks like Backbone.js was just not an option. We were also desperate for better tooling for unit testing, dependency management and packaging.
- **My focus had changed**; while early on I had essentially been building online publications, which Drupal handle very well, Wiredcrat had been a data company from the get-go. We were using Drupal as a CRUD interface for increasingly large data-sets and visualization heavy applications.
- **We saw a trend** of smart people getting off of "the island". Some of the people we admired most within the community moved on to finding new tools to solve their problems.

### Drupal 8

I won't comment much on Drupal 8 since I've only very briefly played with it. What I saw though confirmed some of the trends we saw a few years ago:

- My main problems still seem to be an afterthought: developer and user experience (DX/UX) and performance are usually degrading in between version.
- An even greater technical shift with the introduction of Symfony as the underlying framework. It's a dividing argument and I can understand the thought process behind this decision, I also have to consider how this impact the way I can leverage budget on strategy; more Drupal-ism, less content and UX strategy, less marketing.
- The technical winners (Panels, complex ODBC, entity fields...) were the opposite of what we were rooting for.More options to manage, with complex and AJAX heavy workflows to cater to an audience we've never been sure truly exist; the developer smart enough to figure out opaque administration tools rather than simple, reproduceable code.

### A few more thoughts

- As in most OSS communities, there are plenty of great people. 
- We're looking at the problem differently. Heard of the fork, not sure if that's the way to go.
- Encourage you to look around, all people who've exited have found it so refreshing.
- We wish farewell to  the Drupal community as they embark on the D8 journey. We're just definitely not heading in the same direction. We may be wrong and that doesn't matter after all. But if I were to consider things like that (ref to Stackoverflow and Google) I'd say that we may not be the only ones.
- It's not a hate post, I just felt I owed it to people around me to explain our choice. this may be usefyl to others as they evaluate what's best for their project, especially given the strong attitude of "You can build anything with Drupal" that runs in the community.

I have additional thoughts on the why things are this way, I won't share them on this blog. I don't have a deep enough experience working with the core development and leadership to claim being accurate. I'm happy discussing this in private though.

Thanks for all the fish.
