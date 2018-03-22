/*var kedumaterial = document.getElementById('kedumaterial');
var mymaterial = document.getElementById('mymaterial');
var communitymaterial = document.getElementById('communitymaterial');

function showKeduMaterial() {
  kedumaterial.style.display = 'block';
  communitymaterial.style.display = 'none';
  mymaterial.style.display = 'none';
  }
}

function showMyMaterial() {
  kedumaterial.style.display = 'none';
  communitymaterial.style.display = 'none';
  mymaterial.style.display = 'block';
}

function showCommunityMaterial() {
  kedumaterial.style.display = 'none'
  communitymaterial.style.display = 'block';
  mymaterial.style.display = 'none';

}
*/
function showMyMaterial() {
    var mymaterial = document.getElementById("mymaterial");
    kedumaterial.style.display = 'none';
    communitymaterial.style.display = 'none';
    mymaterial.style.display = 'block';

}

function showKeduMaterial() {
    var mymaterial = document.getElementById("mymaterial");
    kedumaterial.style.display = 'block';
    communitymaterial.style.display = 'none';
    mymaterial.style.display = 'none';
}

function showCommunityMaterial() {
    var communitymaterial = document.getElementById("communitymaterial");
    kedumaterial.style.display = 'none';
    communitymaterial.style.display = 'block';
    mymaterial.style.display = 'none';
}
