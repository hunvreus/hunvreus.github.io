---
layout: post
title: "Improving the file attachments form in Drupal"
comments: true
---

As I already explained in a [previous post](/2009/04/16/theming-almost-hidden/), I am very fond of spending time improving things that don't usually get a lot attention from Drupal developers and themers. Even if many of the interfaces shipped by default in Drupal provide a very systematic and procedural environment for administrating the content, you sometimes need to add a bit of gloss to make things prettier and easier to use for your clients. When I start a project, I invariably add a bunch of theme overrides, CSS files and small scripts that help me reach that goal. This time I am going to expose the technique I use to beautify the upload form for file attachments. Here is what it looks like when I am done:

![My beautified File Attachments form](http://teddy.fr/files/file_attachments.gif)

### The problem(s)

![File attachments form issues](http://teddy.fr/files/file_attachments_issues.gif)

In my (very) own opinion, the default file attachments form, even if very functional, suffers from a few main problems :

- **The fieldset wrapping it is collapsed by default** and there is no setting to change this. That's logic from a Drupal point of view, but many people miss it and just have no idea you can upload files to be attached to the content they are editing. I'd add to this that **some people don't get the meaning of the "File Attachments" label** to start with.
- **The form actually looks too much like... a form**! The name of the uploaded files are displayed in a form (even if 99% of users won't edit it) and if users wish to remove a file they need to check the "Delete" checkbox and then submit the node's form.
- As a bonus, I would say that some people are disturbed by the fact that they **need to select a file and then have to hit the "Attach" button**.

### My solution

All this lead to users either totally unaware of this feature or struggling with basic operations. Here is what I usually do:

- **Make the "File Attachments" fieldset expanded**, and customize its label.
- By default just **display the file name and add a "Rename" link** that turns that title into an editable input.
- **Add a "Remove" link** that instantly remove the file from display.
- Avoid having the user to click on the Attach button by **directly attaching the file after it's been selected**.
- Do some minor cosmetic changes, like adding icons depending on the file extension, regrouping all secondary information (file size, file URL...) on a single line displayed below the file name, reformatting the help messages...

The result can be seen in the picture posted at the top of this post.

### How to?

By hacking the core upload module of course! More seriously, this is mainly done by overriding theming functions (I am a big fan of overriding pretty much anything I can). Attached to that post, you will find the [archive of a folder named "upload"](http://teddy.fr/files/upload.zip) that you can dump in you theme's folder. This folder contains almost everything that you need: CSS and JS files, images... On top of that, you will need to do two things:

- **Add the upload.css file to your theme** by adding the following line into your theme's *.info* file: 

        stylesheets[all][] = upload/upload.css
- **Add the following overrides** to your theme's *template.php* file (replace "mytheme" by the name of your theme):

        /**
         * Declare theme's theming functions.
         */
        function mytheme_theme() {
           return array(
             // The form ID.
             'node_form' => array(
               'arguments' => array('form' => NULL),
             ),
           );
        }
        
        /**
         * Hack a bit the attachment fieldset.
         */
        function mytheme_node_form($form) {
          drupal_add_js(path_to_theme() .'/upload/upload.js');
          $form['attachments']['#collapsible'] = 0;
          $form['attachments']['#collapsed'] = 0;
          $form['attachments']['#title'] = t('Attach files to this @type', array('@type' => strtolower(node_get_types('name', $form['#node']->type))));
          global $user;
          $limits = _upload_file_limits($user);
          $form['attachments']['#description'] = ($limits['resolution'] ? t('Images are larger than %resolution will be resized. ', array('%resolution' => $limits['resolution'])) : '') . t('Files must be smaller than %filesize and have one of the following extensions: %extensions.', array('%filesize' => format_size($limits['file_size']), '%extensions' => $limits['extensions']));
          $form['buttons']['#weight'] = 100;
          return drupal_render($form);
        }
        
        /**
         * Hack a bit the attachment fieldset.
         */
        function phptemplate_upload_form_new($form) {
          unset($form['new']['upload']['#title']);
          unset($form['new']['upload']['#description']);
          drupal_add_tabledrag('upload-attachments', 'order', 'sibling', 'upload-weight');
          return drupal_render($form);
        }
        
        /**
         * Massive hack of the upload form.
         */
        function phptemplate_upload_form_current(&$form) {
          drupal_add_tabledrag('upload-attachments', 'order', 'sibling', 'upload-weight');
        
          foreach (element_children($form) as $key) {
            // Add class to group weight fields for drag and drop.
            $form[$key]['weight']['#attributes']['class'] = 'upload-weight';
            $row = array('');
            $output = '';
            // Description: we save the URL, remove it as a description and change the size of the input
            $url = $form[$key]['description']['#description'];
            unset($form[$key]['description']['#description']);
            $form[$key]['description']['#size'] = 20;
            $form[$key]['description']['#attributes'] = array('class' => 'rename');
            $output .= drupal_render($form[$key]['description']);
            // Size & URL
            $output .= '<span class="details">'. drupal_render($form[$key]['size']) .' - '. $url .'</span>';
            $row[] = array(
              'data' => $output,
              'class' => 'file container-inline'
            );
            // Remove
            $form[$key]['remove']['#attributes'] = array('class' => 'remove');
            $form[$key]['remove']['#suffix'] = ' '. t('Remove');
        	$row[] = array(
              'data' => drupal_render($form[$key]['remove']),
              'class' => 'remove container-inline'
            );
            // List
            $form[$key]['list']['#suffix'] = ' '. t('List');
        	$row[] = array(
              'data' => drupal_render($form[$key]['list']),
              'class' => 'list container-inline'
            );
            // Weight
            $row[] = drupal_render($form[$key]['weight']);
            // Add the extension as a class for styling
            $extension = strtolower(substr(strrchr($form[$key]['filename']['#value'], '.'), 1));
            $rows[] = array('data' => $row, 'class' => 'draggable mime-'. $extension);
          }
          $output = theme('table', array(), $rows, array('id' => 'upload-attachments'));
          $output .= drupal_render($form);
          return $output;
        }
        
        /**
         * Theme the attachments output.
         */
        function phptemplate_upload_attachments($files) {
          $items = array();
          foreach ($files as $file) {
            $file = (object)$file;
            if ($file->list && empty($file->remove)) {
              $extension = strtolower(substr(strrchr($file->filename, '.'), 1));
              $href = file_create_url($file->filepath);
              $text = $file->description ? $file->description : $file->filename;
              $items[] = array(
                'data' => l($text, $href) .' - '. format_size($file->filesize),
                'class' => 'mime-'. $extension,
              );
            }
          }
          if (count($items)) {
            return theme('item_list', $items, $title = NULL, $type = 'ul', array('class' => 'attachment-list', 'id' => 'attachments'));
          }
        }

That's quite a lot of code: you can find it in the *[template.php.txt](http://teddy.fr/files/template.php.txt)* file attached to this post.

Enjoy!