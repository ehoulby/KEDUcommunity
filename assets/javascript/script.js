function showMyMaterial() {
    var mymaterial = document.getElementById("mymaterial");
    var combutton = document.getElementById("combutton");
    var kedubutton = document.getElementById("kedubutton");
    var mybutton = document.getElementById("mybutton");

    kedumaterial.style.display = 'none';
    communitymaterial.style.display = 'none';
    mymaterial.style.display = 'block';

    if (mymaterial.style.display === 'block') {
      combutton.style.fontWeight = '400';
      kedubutton.style.fontWeight = '400';
      mybutton.style.fontWeight = '700';

    }
}

function showKeduMaterial() {
    var kedumaterial = document.getElementById("kedumaterial");
    var kedubutton = document.getElementById("kedubutton");
    var combutton = document.getElementById("combutton");
    var kedubutton = document.getElementById("kedubutton");
    var mybutton = document.getElementById("mybutton");

    kedumaterial.style.display = 'block';
    communitymaterial.style.display = 'none';
    mymaterial.style.display = 'none';

    if (kedumaterial.style.display === 'block') {
      combutton.style.fontWeight = '400';
      kedubutton.style.fontWeight = '700';
      mybutton.style.fontWeight = '400';

    }
}



function showCommunityMaterial() {
    var communitymaterial = document.getElementById("communitymaterial");
    var combutton = document.getElementById("combutton");
    var kedubutton = document.getElementById("kedubutton");
    var mybutton = document.getElementById("mybutton");

    kedumaterial.style.display = 'none';
    communitymaterial.style.display = 'block';
    mymaterial.style.display = 'none';

    if (communitymaterial.style.display === 'block') {
      combutton.style.fontWeight = '700';
      kedubutton.style.fontWeight = '400';
      mybutton.style.fontWeight = '400';

}
}
