function hamburgerHandler(toggle) {
  toggle.addEventListener( "click", function(e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true){
      this.classList.remove("is-active");
      document.querySelector('#nav-overlay').style.width = '0%';
      document.querySelector('#main-container').className = '';
      document.querySelector('body').style.overflow = 'auto';
    }
    else{
        this.classList.add("is-active");
        document.querySelector('#nav-overlay').style.width = '100%';
        document.querySelector('#main-container').className = 'animate';
        document.querySelector('body').style.overflow = 'hidden';
    }
  });
}

function scrollBtnHandler(scroll){
  scroll.addEventListener("click", function(e){
    e.preventDefault();

    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
  });
}
