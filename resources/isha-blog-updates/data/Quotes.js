

    google.load("feeds", "1");
    var latesttitle = "";  
    function beginupdate() {
        initialize();
        setInterval(function(){initialize()}, 600000);}

    function initialize() {
      var feed = new google.feeds.Feed("http://feeds.ishafoundation.org/MysticQuotes-English");
        feed.setNumEntries(1);

        feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          while( container.childNodes[0] ) {
             container.removeChild(container.childNodes[0] );
             }
          var entry = result.feed.entries[0];
          eAnchor = document.createElement("iframe");
          eAnchor.setAttribute("frameborder","no");
          eAnchor.setAttribute("width","100%");
          eAnchor.setAttribute("height","550px");
          eAnchor.setAttribute("src",entry.link);
          container.appendChild(eAnchor);      
        }
      });
      
      
      var blogfeed = new google.feeds.Feed("http://feeds.ishafoundation.org/IshaBlog");
      blogfeed.setNumEntries(8);
      blogfeed.load(function(result) {
        if (!result.error) {
          var qcontainer = document.getElementById("blogfeed");
          while( qcontainer.childNodes[0] ) {
             qcontainer.removeChild(qcontainer.childNodes[0] );
             }
          for (var i = 0; i < result.feed.entries.length; i++) {
            if (latesttitle != result.feed.entries[0].title) {
                latesttitle = result.feed.entries[0].title;
            }
            var entry = result.feed.entries[i];
            eUL = document.createElement("h3");
            eAnchor = document.createElement("a");
            eAnchor.setAttribute("href",entry.link);
            eAnchor.setAttribute("style","text-decoration: none");
            eAnchor.appendChild(document.createTextNode(entry.title));
            eUL.appendChild(eAnchor); 
            qcontainer.appendChild(eUL); 
            var pos = entry.content.indexOf('<div>');
            if (pos > 0) {
                var desc = entry.content.substring(0,pos);
                }
            qcontainer.appendChild(document.createTextNode(desc));
          }
        }
      });
    }
    google.setOnLoadCallback(beginupdate);