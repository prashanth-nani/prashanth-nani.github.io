$(document).ready(function(){

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if (this.classList.contains("is-active") === true){
        this.classList.remove("is-active");
        document.querySelector('#nav-overlay').style.width = '0%';
        document.querySelector('#main-container').className = '';
      }
      else{
          this.classList.add("is-active");
          document.querySelector('#nav-overlay').style.width = '100%';
          document.querySelector('#main-container').className = 'animate';
      }
    });
  }

  var navul = document.getElementById('nav-bar').children[0].cloneNode(true);
  document.getElementById('nav-overlay').appendChild(navul);
});
