document.addEventListener("DOMContentLoaded", function(){
  var clickedBlock = document.getElementsByClassName("howtochoose")[0];
  var body = document.getElementsByTagName("body")[0];
  body.style.cssText += "min-height:"+window.innerHeight+"px;";
  window.addEventListener("resize",function () {
    body.style.cssText += "min-height:"+window.innerHeight+"px;";
  });
});
