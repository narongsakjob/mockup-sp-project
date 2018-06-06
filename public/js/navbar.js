(function(window, $) {
  'use strict';

  if (!window.AppMan) {
    window.AppMan = {};
  }

  var AppMan = window.AppMan;

  AppMan.App = AppMan.App || {};

  AppMan.App.Navbar = {

    navbarFunction: function() {  
      var x = document.getElementById("myTopNav");
      var myTopNav = $('#myTopNav'); 
      if (x.className === "top-nav") {
        myTopNav.removeClass("top-nav");
        myTopNav.removeClass("top-nav");
        myTopNav.addClass("top-nav responsive");
      } else {
        x.className = "top-nav";
      }     
    },

    Init: function() {
      this.navbarFunction();
    }
  };

})(window, jQuery);