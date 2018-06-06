var ready = function() {

  'use strict';

  if (!window.AppMan) {
    window.AppMan = {};
  }

  var AppMan = window.AppMan;
  
  AppMan.App = AppMan.App || {};
  // Initialize application
  AppMan.Init = (function() {
    //Modules
  })();


};
window.$(document).on("turbolinks:load", ready);
