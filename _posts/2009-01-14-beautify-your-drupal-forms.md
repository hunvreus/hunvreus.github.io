---
layout: post
title: "Beautify your Drupal forms"
comments: true
---

![A beautified form](http://teddy.fr/files/formstut/beautified_form.png)

There are a lot of small details that reveals if a website has been built with Drupal; I often detect them pretty quickly when landing on a page. The URL structure, the search form, the user login page... all of these tend to be pretty Drupal-ish, except when some time has been spent in theming and styling.

Most of my clients are expecting to have their website looking the least Drupal-ish possible: they want the nice CMS engine but appreciate having something as customized as possible when it comes to the appearance. I recently had to spend a bit of time tweaking forms to give them a "sexier" look. Among the many modifications and enhancements we did, two hacks may be of some interest for some of the folks out there.

### "Nicer" buttons

I am not a huge fan of adding markup for the sake of design; I am actually pretty picky when it come to semantic, standard and the need for keeping styling as unobtrusive as possible (I actually spend half of my time annoying my staff with these concepts, the other half being dedicated to define how many 饺子 (jiaozi) fit in a Chinese developer's stomach).

Anyway, there come times when the design needs to have those "rounded buttons" ("Must... control... fist of death"). Here is how you can have all of your form buttons to be styled at once; we first need to add a few lines to the *template.php* file of our theme to override the [theme_button](http://api.drupal.org/api/function/theme_button/5) function:

    // Override theme_button
    function phptemplate_button($element) {
      // Make sure not to overwrite classes.
      if (isset($element['#attributes']['class'])) {
        $element['#attributes']['class'] = 'form-'. $element['#button_type'] .' '. $element['#attributes']['class'];
      }
      else {
        $element['#attributes']['class'] = 'form-'. $element['#button_type'];
      }
    
      // We here wrap the output with a couple span tags
      return '<span class="button"><span><input type="submit" '. (empty($element['#name']) ? '' : 'name="'. $element['#name'] .'" ')  .'id="'. $element['#id'].'" value="'. check_plain($element['#value']) .'" '. drupal_attributes($element['#attributes']) ." /></span></span>\n";
    }

The last line is the only part we actually modify; we wrap our buttons with a pair of *&lt;span&gt;* tags that we are going to style.

Now we need to style it, that means as well preparing the pictures. These are the left and right part of the button, though we double the pictures to use a [sprite effect](http://www.alistapart.com/articles/sprites) when the user click on the button (pseudo class *:active*):

<dl>
<dt>bg-button-left.png</dt>
<dd><img src="/files/formstut/bg-button-left.png" alt="Left picture for the button" class="no-style"/></dd>
<dt>bg-button-right.png</dt>
<dd><img src="/files/formstut/bg-button-right.png" alt="Right picture for the button" class="no-style"/></dd>
</dl>

We combine this with the following CSS code that we add to one of our stylesheets (*style.css* from your theme for example):

    /**
     * Form buttons
     */
    span.button {
      background: transparent url('bg-button-right.png') no-repeat right top;
      padding: 4px 10px 5px 0;
    }
    span.button:active {
      background-position: right -36px;
    }
    
    span.button span {
      background: transparent url('bg-button-left.png') no-repeat left top;
      padding: 4px 0 5px 10px;
    }
    span.button span:active {
      background-position: left -36px;
    }
    
    span.button span input {
      background: transparent;
      border: 0;
      color: #494949;
      font-size: 12px;
      padding: 0;
    }

<?php print l('Download the CSS file', 'sites/teddy.fr/files/formstut/button.css'); ?>

Here is an example of the display you should have:

<?php
  drupal_add_css('sites/teddy.fr/files/formstut/button.css');
  $form = array();
  $form['button'] = array(
    '#type' => 'submit',
    '#value' => t('Button'),
    '#prefix' => '<span class="button"><span>',
    '#suffix' => '</span></span>',
  );
  print drupal_render($form);
?>

Now, you can easily use the same kind of method on many other elements, including menus, like the local tasks. Let me illustrate this with a screenshot from a recent project:

![Example of menu styling](http://teddy.fr/files/formstut/menu.png)

### Field descriptions as popups

This is another one I thought of while working on a previous project; the user found the content submission forms way too cluttered. It was mainly due to the fact that all the contributors had been attributed the administrator role, thus displaying a lot of unnecessary fields and options (*Authoring information*, *URL path settings*, *Menu settings*, ...). We changed them to the *contributor* role that was designed for their use of the website and everything was fine. However, I wondered how we could make the forms even cleaner; a lot of the content forms the contributors were going to use displayed a lot of descriptions below the field. I think it's important to add this information when creating custom types with CCK, though it can add a lot of unnecessary information when either the field label already gives enough information (the *Username* field is indeed pretty straight forward) or the user is very familiar with the interface, which is the case when for example a contributor is creating new entries everyday.

What about then, simply hiding these bits of information and displaying them as a helper popup when the field is hovered or gain the focus? Well that's exactly what were going to do.

Once again, we need to override something. Since we want this to happen when we have a form (thus fields) we are going to use the [theme_form](http://api.drupal.org/api/function/theme_form/5) function. We just need to load a jQuery script, we do so by adding the following to our *template.php* file in our theme:

    function phptemplate_form($element) {
      <span style="color:deeppink">// Add a jQuery script for the popups
      drupal_add_js(path_to_theme() .'/popup.js');</span>
    
      // Anonymous div to satisfy XHTML compliance.
      $action = $element['#action'] ? 'action="' . check_url($element['#action']) . '" ' : '';
      return '<form '. $action .' accept-charset="UTF-8" method="'. $element['#method'] .'" '. 'id="'. $element['#id'] .'"'. drupal_attributes($element['#attributes']) .">\n<div>". $element['#children'] ."\n>/div></form>\n";
    }

Now let's have a look at this *popup.js* script:

    $(document).ready(function() {
      $('form .form-item input + .description').hide().prev('input')
      .hover(
        function() {
          $(this).next('.description').show();
        },
        function() {
          $(this).next('.description').hide();
        }
      );
    });

<?php print l('Download the JS file', 'sites/teddy.fr/files/formstut/popup.js'); ?>

This will hide input descriptions and show them when hovering the input. In terms of usability, it would be better to ensure the descriptions are displayed when the input gain focus as well, but I will keep things simple here.

Now, we style a bit the description layers:

    /**
     * Form descriptions popups
     */
    form .form-item .description {
      background: #FFE8B1;
      border: 1px solid #FFD571;
      border-width: 1px 2px 2px 1px;
      color: #A16400;
      font-size: 11px;
      padding: 7px;
      position: absolute;
      width: 250px;
    }

<?php print l('Download the CSS file', 'sites/teddy.fr/files/formstut/popup.css'); ?>

And here is the expected result (just hover the field):

<?php
  drupal_add_css('sites/teddy.fr/files/formstut/popup.css');
  drupal_add_js('sites/teddy.fr/files/formstut/popup.js');
  
  function popup_test_form($action = '', $keys = '', $type = NULL, $prompt = NULL) {
    $form = array();
    $form['text'] = array(
      '#type' => 'textfield',
      '#description' => 'This is a description blurb supposed to help you understand what is this field.',
      '#default_value' => '',
      '#size' => 40,
      '#maxlength' => 255,
      '#attributes' => array('class' => 'popup-field')
    );
    return $form;
  }
  //print drupal_get_form('popup_test_form');
?>

### What then?

Well, as I said before these are simple examples:

- when you style buttons as explained earlier you have quite some special cases to deal with: buttons displayed on a layer that has a background will need specific pictures that takes it into account, inline forms need a bit of styling as well...
- the popup script works fine but need a bit of customization to take textareas, radios and checkboxes into account, the behavior could be improved to take the field focus into account, the style of the popup could be improved as well...