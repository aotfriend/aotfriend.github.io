document.addEventListener('DOMContentLoaded', function() {
  var nDIV = document.createElement("DIV");
  nDIV.className = "adsblock-content";
  nDIV.innerHTML = "<ins class=\"adsbygoogle\"
  style=\"display:inline-block;width:100%;\"
  data-ad-client=\"ca-pub-6915385022840539\"
  data-ad-slot=\"2259532232\"></ins>";
  var DIV = document.createElement("DIV");
  DIV.className = "adsblock";
  DIV.title = "Google Ads";
  DIV.appendChild(nDIV);
  document.getElementsByTagName("body")[0].appendChild(DIV);
  
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

