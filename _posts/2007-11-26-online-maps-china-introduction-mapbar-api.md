---
layout: post
title: "Online maps in China: an introduction to Mapbar API"
comments: true
---

![Mapbar map](http://teddy.fr/files/mapbar.jpg)

For the last month, I have been playing with several of the existing [online maps providers in China](/2007/11/11/online-maps-china-ni-yao-qu-na-li/) and I hardly found any English documentation available, neither on the official websites nor from individuals. Given that Mapbar has English maps of several Chinese cities, I thought some of you may be interested in learning how to display their maps on your website. For the impatients, below is a link to the demo.

[View the Mapbar API example](/sandbox/mapbar/mapbar-simple.html)

Now for those who want to know how it works:

1. **Load the Mapbar API** located at "http://api.mapbar.com/api/mapbarapi.js" with a script tag:

        <script language="javascript"  src="http://api.mapbar.com/api/mapbarapi.js"></script>

1. **Create a div element** with the "map_canvas" id, this div will hold the map:

        <div id="map_canvas"></div>

1. **Instantiate the map**, this is done in several steps. First, put the following code in the head:

        <script type="text/javascript">
          function initialize() {
            map = new Maplet(&#39;map_canvas&#39;);
            map.setStyle(&#39;en&#39;);
            map.addControl(new MStandardControl());
            map.centerAndZoom(new MPoint(&#39;IJUBIVWVJAAUIU&#39;), 12);
          }
        </script>

    Then call the initialize() function when the body is loaded:

        <body onload="initialize()">

A bit more about the intialize() function:

- **map = new Maplet('map_canvas')** creates a map object (for which we specify the id of the div we previously created),
- **map.setStyle('en')** sets the language of the map, we here use english ('en'), it is by default set to Chinese,
- **map.addControl(new MStandardControl())** adds the zoom slider and the navigation arrows,
- **map.centerAndZoom(new MPoint('IJUBIVWVJAAUIU'), 12)** sets the center and the zoom level of the map,

This last point is a bit problematic: Mapbar coordinates system is completely obfuscated through encryption. You can't use longitude and latitude coordinates as you would do with Google Maps, instead you refer to locations with an alpha numeric sequence such as "IJUBIVWVJAAUIU". Some people have been looking for a way to break this system, and [actually succeeded](http://www.cnblogs.com/Tangf/archive/2006/06/06/419124.html), but I guess that since 2006 (time when this solution was published) Mapbar updated (more than once) their system. I could not find any up-to-date method and did not find enough time, nor motivation, to do it by myself. If somebody feels like unpacking Mapbar API and solve this issue I'll buy him a drink. As a starting point, below is the (broken) encryp/decrypt method:

    <script language="javascript">
      // This key is supposed to change over time, you can find it at the beginning of
      // the Mapbar API file
      var strLicenseKey = 699;
      
      // Decrypt function
      function jiemi(meT){
        var W7pj=-1;
        var I524S=0;
        var qk_X=&#39;&#39;;
        for(var i=0;i<meT.length;i  ){var j86T=parseInt(meT.charAt(i),36)-10;
        if(j86T>=10)j86T=j86T-7;qk_X =(j86T).toString(36);
        if(j86T>I524S){W7pj=i;I524S=j86T}}var U8T=parseInt(qk_X.substring(0,W7pj),16);
        var f9v8D=parseInt(qk_X.substring(W7pj 1),16);
        var H1433=new Array();
        H1433[0]=(U8T f9v8D-parseInt(strLicenseKey))/2;
        H1433[1]=(f9v8D-H1433[0])/100000.0;
        H1433[0]/=100000.0;
        return H1433
      };
      
      // Encrypt function
      function jiami(e53,B92_) {
        var WVd94=parseInt(parseFloat(e53)*100000);
        var j7_2=parseInt(parseFloat(B92_)*100000);
        var rpB=(j7_2-WVd94 parseInt(strLicenseKey)).toString(16);
        var ie9=(j7_2 WVd94).toString(16);
        var H1433=&#39;&#39;;
        for(var i=0;i<rpB.length;i  ) {
          var k6A36=parseInt(rpB.charAt(i),16);
          H1433 =(((k6A36>=10)?(k6A36 7):k6A36) 10).toString(36)
        }
        H1433 =&#39;z&#39;;
        for(var i=0;i<ie9.length;i  ) {
          var k6A36=parseInt(ie9.charAt(i),16);
          H1433 =(((k6A36>=10)?(k6A36 7):k6A36) 10).toString(36)
        }
        return H1433.toUpperCase();
      }
    </script>

Meanwhile there are ways to hack Mapbar search system to provide search functionalities to your users, but [as I said before](/2007/11/11/online-maps-china-ni-yao-qu-na-li/), I found Mapbar listings to be inconsistent to say the least. Though if some of you show some interest, I may publish another post to explain how to do it.

If you dig a little in the API file ([http://api.mapbar.com/api/mapbarapi.js](http://api.mapbar.com/api/mapbarapi.js)), you'll see that you have many methods that allow you to do pretty much all what you can with Google Maps: adding info bubbles, stickers, set the look of the navigation slider, create animations, draw polygons... Again, if some of you are interested, just leave a comment, I'll write another post. For the moment I'd just like to enjoy my Tsingtao while it's cold.