var button;
var toolbarbutton = require("toolbarbutton");
var data = require("self").data;
var tabs = require("sdk/tabs");


// createButton()
// Creates the add-on toolbar button
// 
// @return object
function createButton(options) {

    return toolbarbutton.ToolbarButton({
        id: "Isha Updates",
        label: "Isha Updates",
        tooltiptext: "Isha Updates",
        image: data.url("images/isha-icon.png"),
        panel: Isha_Blog, 
    });
}


exports.main = function(options) {
    button = createButton(options);
    
    // On install moves button into the toolbar
    if (options.loadReason == "install") {
        button.moveTo({
            toolbarID: "nav-bar",
            insertbefore: "home-button",
            forceMove: true
        });
        
//    tabs.open("http://blog.ishafoundation.org");    
    }
};

var Isha_Blog = require("sdk/panel").Panel({
  width: 500,
  height: 600,
  contentURL: data.url("popup.html"),
});
var Youtube = require("sdk/panel").Panel({
  width: 500,
  height: 600,
  position: {
  right: 0,
  bottom: 8
  },
  contentURL: data.url("Youtube_Iframe.html"),
});

var Quote = require("sdk/panel").Panel({
  width: 425,
  height: 575,
  position: {
  right: 0,
  bottom: 8
  },
  contentURL: data.url("Quotes.html"),
});

function show() {
//    if(prefsModule.prefs.myBooleanPref){
        var notifications = require("notifications");
        notifications.notify({
            title: "Isha Kriya Reminder",
            text: "'I am not the body, I am not even the mind.",
            });
 //       }
    };
var tmr = require('timer');
tmr.setInterval(function() {show()}, 3600000);


