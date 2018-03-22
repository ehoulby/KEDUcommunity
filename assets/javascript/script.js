<script>
function showMaterial(evt, materialTab) {
    var i, tabcontent, tablinks;

materialtabs = document.getElementsByClassName("materialcontent");
for (i = 0; i < materialtabs.length; i++) {
    materialtabs[i].style.display = "none";
}
materialtabbuttons = document.getElementsByClassName("materialtabbuttons");
for (i = 0; i < tablinks.length; i++) {
    materialtabbuttons[i].className = materialtabbuttons[i].className.replace(" active", "");
}
document.getElementById(materialTab).style.display = "block";
evt.currentTarget.className += " active";
}
</script>
