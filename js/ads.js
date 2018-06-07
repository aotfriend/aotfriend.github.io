document.addEventListener('DOMContentLoaded', function() {
  /*
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach(function($el) {
      $el.addEventListener('click', function() {

        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }*/
  
  var nDIV = document.createElement("DIV");
  nDIV.className = "adsblock";
  nDIV.innerHTML = "Ads";
  nDIV.title = "Google Ads";
  nDIV.width = "100%";
  nDIV.height = "auto";
  
  document.getElementsByTagName("body")[0].appendChild(nDIV);
  
});

window.onscroll = function(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementsByClassName("adsblock")[0].style.display = "block";
    }
    else
    {
        document.getElementsByClassName("adsblock")[0].style.display = "none";
    }
}