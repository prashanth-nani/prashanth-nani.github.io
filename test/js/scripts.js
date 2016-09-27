var section = document.getElementsByClassName('section');
var secNum;

$(document).ready(function(){
  "use strict";

  var navul = document.getElementById('nav-bar').children[0].cloneNode(true);
  document.getElementById('nav-overlay').appendChild(navul);

  var toggle = document.querySelector(".c-hamburger");
  hamburgerHandler(toggle);

  var scroll = document.getElementById('scroll-btn');
  scrollBtnHandler(scroll, section);

});
