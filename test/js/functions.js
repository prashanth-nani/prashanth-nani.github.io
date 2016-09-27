function hamburgerHandler(toggle) {
  toggle.addEventListener( "click", function(e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true){
      this.classList.remove("is-active");
      document.querySelector('#nav-overlay').style.width = '0%';
      // section[secNum].className = 'section';
      $( ".section" ).each(function() {
          $( this ).removeClass( "layDown" );
        });
      // document.querySelector('#container').className = '';
      document.querySelector('body').style.overflow = 'auto';
    }
    else{
        this.classList.add("is-active");
        document.querySelector('#nav-overlay').style.width = '100%';
        document.querySelector('#container').className = 'perspective';
        secNum = getNextSectionNumber() - 1;
        //section[secNum].className = 'layDown section';
        $( ".section" ).each(function() {
            $( this ).addClass( "layDown" );
          });
        document.querySelector('body').style.overflow = 'hidden';
    }
  });
}

function scrollBtnHandler(scroll){
  scroll.addEventListener("click", function(e){
    e.preventDefault();
    var i = getNextSectionNumber();
    scrollTo(section[i]);
  });
}

function scrollTo(element) {
  $('html,body').animate({
      scrollTop: element.offsetTop},
      'slow');
}

function getNextSectionNumber(){
  var presentTop = $(window).scrollTop();
  for(var i=0; i<section.length; i++)
  {
    if(section[i].offsetTop > presentTop )
      break;
  }
  return i;
}
