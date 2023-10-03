---
layout: post
title: "How to serve big files through PHP"
comments: true
---

![Heavy](/files/heavy.png)

There are many reasons why you could be led to serve files though an application server: let's say for example you want to restrict the access of certain files to the registered users of your website (like the latest private pictures of Tabatha Big Bolts), every time somebody wants to display or download those files you must check that this somebody is logged in your site. The quick and simple way of doing that would be:

    <?php
      // Here goes your code for checking that the user is logged in
      // ...
      // ...
    
      if ($logged_in) {
        $filename = "path/to/your/file";
        $mimetype = "mime/type";
        header("Content-Type: ".$mimetype );
        echo readfile($filename);
      }
      else {
        echo "Tabatha says you haven\"t paid.";
      }
    ?>

This should work... until you have to deal with a big file, like a video or a really large picture. The readfile() function is loading the whole file into memory, which means that serving heavy files or several files at the same time could kill the performances of your server or simply generate errors by exceeding the memory_limit setting. You sure could edit these settings, given that you can perform such kind of change, but there is another way: split your file and serve it chunk by chunk. That is what the readfile_chunked() function [found in the PHP documentation](http://cn2.php.net/manual/en/function.readfile.php#48683) does:

    <?php
      define("CHUNK_SIZE", 1024*1024); // Size (in bytes) of tiles chunk
    
      // Read a file and display its content chunk by chunk
      function readfile_chunked($filename, $retbytes = TRUE) {
        $buffer = "";
        $cnt =0;
        // $handle = fopen($filename, "rb");
        $handle = fopen($filename, "rb");
        if ($handle === false) {
          return false;
        }
        while (!feof($handle)) {
          $buffer = fread($handle, CHUNK_SIZE);
          echo $buffer;
          ob_flush();
          flush();
          if ($retbytes) {
            $cnt += strlen($buffer);
          }
        }
        $status = fclose($handle);
        if ($retbytes &amp;&amp; $status) {
          return $cnt; // return num. bytes delivered like readfile() does.
        }
        return $status;
      }
    
      // Here goes your code for checking that the user is logged in
      // ...
      // ...
      
      if ($logged_in) {
        $filename = "path/to/your/file";
        $mimetype = "mime/type";
        header("Content-Type: ".$mimetype );
        readfile_chunked($filename);
      }
      else {
        echo "Tabatha says you haven\"t paid.";
      }
    ?>

This method is pretty easy to implement and should work with most of the configurations, but there is a better solution if you use [Lighttpd](http://www.lighttpd.net/), an alternative webserver that I advise you to test if not adopt. Just so you know, Lighttpd is used by websites such as [Youtube](http://youtube.com) or [ImageShack](http://imageshack.us), the file host). It has a small memory footprint and great performances. I especially like the configuration files.

Still, after learning the chunk technique I was wondering if there was a way to use Apache to seamlessly redirect users to the requested file once checks have been performed, which I found more logical since PHP is not built to serve files in the first place. Well Lighttpd does that really well and with its usual easiness; you just need to set the [X-Sendfile](http://trac.lighttpd.net/trac/wiki/Docs%3AModFastCGI#options) header to your file's path, Lighty will take care of everything. Now, our example would look like this:

    <?php
      // Here goes your code for checking that the user is logged in
      // ...
      // ...
    
      if ($logged_in) {
        $filename = "path/to/your/file";
        header("X-Sendfile: ".$filename);
      }
      else {
        echo "Tabatha says you haven\"t paid.";
      }
    ?>

And that's it. I definitely need to find a good online host with Lighttpd. Any recommendation?