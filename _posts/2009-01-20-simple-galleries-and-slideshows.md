---
layout: post
title: "Simple galleries and slideshows"
---

There are now so many Drupal modules that it is virtually possible to anybody with some technical knowledge to cover most of the basic needs for a website. However there are still these gray areas the community has not yet completely covered. Try for example to create a picture gallery: you may think you have [alternatives](http://drupal.org/search/node/gallery+type%3Aproject_project); I've seen a lot of people using the [Gallery](http://drupal.org/project/gallery) or [Acidfree](http://drupal.org/project/acidfree) modules. Having used it myself I can tell you, however useful these modules may be, it has proven to be a painful experience, especially if you need to customize things, and the code is, well, not very Drupal-ish to say the least. There are a [couple](http://drupal.org/project/yagm) [others](http://drupal.org/project/prog_gallery) being developed to provide Drupal with a fully featured, flexible, Drupal-native gallery, I myself am actually working on one. But until these are ready for production use, you have to find a solution. Moreover, you may have simple needs: I'll expose a couple of very simple methods that I am using myself to build galleries and slideshows.

### Galleries with attachments

This solution won't fit all needs, but what is the most common need when building a gallery: a collection of albums gathering pictures and potentially a title and a description. Well, display aside, isn't it what attachments are doing? I know that a couple modules are actually more or less using the same kind of method, but I don't think this requires its own module, especially since you will end up customizing most of the look to integrate properly into your website.

The modules you are going to need:

- Upload (core)
- [Imagecache](http://drupal.org/project/imagecache)
- [Thickbox](http://drupal.org/project/thickbox) (optional)
- [Views](http://drupal.org/project/views) (optional)

Let's start:

1. We first need to create a content-type named "Gallery". We don't need anything special but the file attachments (*upload* module). You may want to modify the attachments settings to ensure user can only upload pictures.
1. Now you need to build a couple Imagecache presets: one for for the thumbnails (something like scale and crop to 50px by 50px) and another one for the full size view (maybe scale to 500px by 500px). I'll name these presets respectively gallery_thumbnail and gallery_full.

You're done for the settings. Now we just need to make sure our gallery displays nice; we'll add the following to our *template.php* file:

    // Overrides the theme function for displaying file attachments
    function phptemplate_upload_attachments($files) {
      $output = '';
      foreach ($files as $file) {
        if ($file->list && empty($file->remove)) {
          // Create a thumbnail picture with imagecache
          $thumbnail = theme('imagecache', 'gallery_thumbnail', $file->filepath);
          // Retrieve the imagecache path to the full size picture
          $path = imagecache_create_url('gallery_full', $file->filepath);
          // Display a link to that path with the thumnail as the content
          $output .= l($thumbnail, $path, array('html' => TRUE));
        }    
      }
      return $output;
    }
