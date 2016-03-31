function myfunc(){
  var docHeight = $(document).height();

   $("body").append(
     "<div id='overlay'><ul><li><a href='#'>Login</a></li><li><a href='#'>Register</a></li></ul></div>");

   $("#overlay")
      .height(docHeight)
      .css({
         'display' : 'table',
         'opacity' : 0.98,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'z-index': 5000
      });

    $("#overlay ul").css({
      'display': 'table-cell',
      'list-style':'none',
      'text-align':'center',
      'vertical-align':'middle'
    });

    $("#overlay ul li").css({
      'display':'block',
      'color': '#FFF',
      'font-size':'30px;',
      'font-style': 'bold'
    });
}
