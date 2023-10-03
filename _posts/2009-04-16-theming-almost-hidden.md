---
layout: post
title: "Theming the (almost) hidden..."
comments: true
---

![Logs UI](/files/logs.png)

Most of developers I have seen working on Drupal projects mainly focus their design effort on the front end, what most of end users will see; there is often very few energy put into making the parts that the administrators will be using sexier, may this be node entry forms or the numerous admin pages. Among all those "details" that fail to catch the designer's attention, I have a few ones that I usually try to deal with right away when I start a project, one of them being the whole set of "notifications" you can see displayed through Drupal; system messages, status report, update report and logs.

So the idea is to get nice reports and messages out of Drupal, something that looks like this:

![Messages UI](/files/messages.png)

![System status UI](/files/system_status.png)

Guess what, you've got nothing to do, just follow these few steps:

- [Download the notifications.css file](/files/notifications.css) and add it to your theme (in my case I'll consider it is stored in a <b>css/</b> folder inside your theme folder),
- Declare the stylesheet into your .info file: <code>stylesheets[screen,projection][] = css/notifications.css</code>
- Add the required pictures; *icon-ok.png*, *icon-error.png* & *icon-warning.png* (the CSS file assumes that these pictures are stored into an **images/** folder in your theme folder). I personally favored [some icons from the Gnome Icon Theme](/files/notifications_icons.zip), but there are [alternate open-source options](http://people.freedesktop.org/%7Ejimmac/icons/), like the [Tango project](http://tango.freedesktop.org/Tango_Desktop_Project)....
- Add the following lines to your *template.php* file (this will ensure messages are always represented as lists, even if there is only 1 message of the same type):

        /**
         * Ensure messages are always lists (even when there is only one single message).
         */
        function phptemplate_status_messages($display = NULL) {
          $output = '';
          foreach (drupal_get_messages($display) as $type => $messages) {
            $output .= "<div class=\"messages $type\">\n";
            $output .= " <ul>\n";
            foreach ($messages as $message) {
              $output .= '  <li>'. $message ."</li>\n";
            }
            $output .= " </ul>\n";
            $output .= "</div>\n";
          }
          return $output;
        }

Et voilà!