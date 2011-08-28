---
layout: post
title: "Drupal and project management"
---

I just made it back from DC and I must say it feels good to be back home in Shanghai. I won't go through the usual review of sessions and congratulations; enough people already gave that kind of feedback for everybody to know it was a blast. This was my first event of that kind and I had the opportunity to chat with a lot of smart people of the industry; a lot of good things came out of it, including the common need for resources related to project management. I hope to find more people interested in helping on that very issue and in the meantime I will do my best to help initiatives such as [The CivicActions Estimating Worksheet](http://civicactions.com/estimating-worksheet) (thanks a lot Gregory Heller to enlighten me on this) and my very own Project Management tool *aka* "**Ren**" (人) that I plan to release soon. I'll try to sum up what I think would be a good direction to head to.

### Project Management tool

I attended an interesting BoF with Viktor Kane and a few others in DC and realized the very strong need for project management tool**s**. I insist on "tools" and not "tool" because there are different group of people out here with different needs. There are already several approach to the problem:

- The [project module](http://drupal.org/project/project), that is used to provide the download pages on Drupal.org and integrates with other modules to work with version control system (SVN, CVS), add issue tracking and so on.
- [Project Flow and Tracker](http://drupal.org/node/178076), [presented by Viktor Kane at DrupalCon DC](http://dc2009.drupalcon.org/session/project-flow-and-tracker-business-objects-and-user-stories-test-driven-drupal-based-website-), that provides a thorough management process relying on roles and user stories, acceptances tests and tasks, which are directly embedded in the website you develop.
- The many intranets/project management tools that most of Drupal shops have been building to fit their own needs. I think of things like [Development Seed's *8 Trees*](http://www.developmentseed.org/portfolio/intranet).

The thing is that there is no common approach to the problem; from what I've seen, some users need something closer to Basecamp, some other needs something like the project module, combining version control and issues. What I think is important here is to start committing back what we have, and from there we'll find what are the basic technical bricks we share and we'll be able to put our efforts in common.

![Ren's dashboard](/files/dashboard.png)

I am no different from others, and have myself built a tool that allows me to manage my projects online. I call it "Ren" and it allows me to create a group (Organic Group) for each one of my projects. Each group then gather several types of entries accessible to the project members:

- **Tasks**; call it "ticket" or "issue", they all represent the same concept. The main thing here is that I have developed a time tracking module that allows my staff to log the time spent on tasks, this coupled with another of my modules allows me to match actual work loads against estimates. Ultimately, I plan to develop a fairly intelligent system that can predict some well known patterns.
- **Messages**; allows me to discuss the project and its details with either other members of the team or the client.
- **Wiki pages**; is mainly used to build the documentation that we deliver to the client, but may potentially be used for any type of content that is supposed to be kept for further review.
- **Milestones**; simple entries gathering a date and some description blurb. Tasks may relate to a milestone.

![Ren's messages](/files/messages.png)

One thing to notice here is that the client is using the same platform as the development team; the only differences is that clients can only post messages and comment wiki pages.

I am testing several additional features, including integrating with XMPP; by using the [XMPP framework module](http://drupal.org/project/xmppframework) we can let users discussing projects (OG groups) through their IM (MSN, Google Talk...) or the client embedded in the website. I have two main reasons to do so:

- I don't like giving away my private IM information to a client, for several reasons (including my will to get a break on weekends),
- All relevant information that may be exchanged on IM regarding the project is kept on users' machines. Using this architecture, I have the potential for keeping these logs on the website and letting people accessing it through search. If one of your admin decide to change the staging server credentials at 1:00 AM on Friday for example, you won't freak out when trying to access it on Monday morning (when the damn admin is still sleeping after a weekend full of beer).

I have been spending some time putting together an install profile for sharing this with the community, but after discussing with several people at DC last week, I decided to adopt another strategy. The main idea is to keep the main install as general as possible, people will then be able to add features specific to their activity (like integrating SVN/CVS for example). What is sure though is that "Ren" will be shipped with an actual theme; I can't imagine delivering such kind of product without a theme (not Garland again, nooooo!). <u>Stay tuned, I promised to deliver this under a month</u>.

### Sharing company documents

As I said before, [CivicActions](http://civicactions.com) is already sharing resources (I strongly advise you to check on the document linked above, this is a very valuable tool) and after talking with [Gregory Heller](http://civicactions.com/team/gregoryheller) I am more convinced than ever that building a complete suite of project management related documents, including scoping document, information architecture, wireframes and even contract templates, would make sense. I myself would naturally tend to consider that kind of asset as too private and valuable to be shared outside of the company. However, on a technical level, the Drupal community is already working that way; the bricks that the whole community of professionals use to build their products is for the most part contributed back. This is, in my own opinion, one of the very reasons why our community enjoys such a healthy competition. We often see Drupal shops or individuals from different companies associating to maintain a module. There is no reason that would be different for documents.

![Estimate overview](/files/estimate.png)

My next step on this will be to finalize the latest version of my scoping and information architecture documents and find a place to share these on Drupal.org. I am unsure of the best way to do so; if some of you have advices, please let me know. I also encourage anybody to give a spin to CivicActions' spreadsheet and to give them feedback. You can also join the [Project Management](http://groups.drupal.org/projectManagement) group on groups.drupal.org if you wish to discuss such kind of initiative.