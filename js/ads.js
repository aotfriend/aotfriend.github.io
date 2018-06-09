document.addEventListener('DOMContentLoaded', function() {
  var nDIV = document.createElement("DIV");
  nDIV.className = "adsblock-content";
  nDIV.innerHTML = "<div align=\"center\" style=\"width:100%;overflow-y:hidden;\"><script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script><ins class=\"adsbygoogle\" style=\"display:inline-block;width:100%;height:60px\" data-ad-client=\"ca-pub-6915385022840539\" data-ad-slot=\"2259532232\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>";
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

