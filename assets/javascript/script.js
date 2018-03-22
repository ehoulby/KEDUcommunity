function showMyMaterial() {
    var mymaterial = document.getElementById("mymaterial");

    kedumaterial.style.display = 'none';
    communitymaterial.style.display = 'none';
    mymaterial.style.display = 'block';

}

function showKeduMaterial() {
    var kedumaterial = document.getElementById("kedumaterial");
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
