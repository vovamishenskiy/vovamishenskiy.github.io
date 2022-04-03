document.addEventListener("DOMContentLoaded", function(){
  var clickedBlock = document.getElementsByClassName("howtochoose")[0];
  var body = document.getElementsByTagName("body")[0];
  body.style.cssText += "min-height:"+window.innerHeight+"px;";
  window.addEventListener("resize",function () {
    body.style.cssText += "min-height:"+window.innerHeight+"px;";
  });
  document.getElementsByClassName("cpuWiki")[0].addEventListener("click",function(){
    window.location.href = "https://ru.wikipedia.org/wiki/%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80";
  });
  document.getElementsByClassName("socketWiki")[0].addEventListener("click",function(){
    window.location.href = "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%80%D0%B0%D0%B7%D1%8A%D1%91%D0%BC%D0%BE%D0%B2_%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80%D0%BE%D0%B2";
  });
  var cpuLink = getComputedStyle(document.getElementsByClassName("cpuWiki")[0]);
  console.log(cpuLink.href);
});
