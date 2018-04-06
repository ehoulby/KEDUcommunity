function showMyMaterial() {

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

  kedumaterial.style.display = 'none';
  communitymaterial.style.display = 'block';
  mymaterial.style.display = 'none';

    if (communitymaterial.style.display === 'block') {

      combutton.style.fontWeight = '700';
      kedubutton.style.fontWeight = '400';
      mybutton.style.fontWeight = '400';

}
}

function showKuboLessons () {
  mylessonboxes.style.display = 'none';
  lessonsboxesboth.style.display = 'block';

  if (lessonsboxesboth.style.display === 'block') {
    kubolessonsbutton.style.fontWeight = '700';
    mylessonsbutton.style.fontWeight = '400';
  }

}

function showMyLessons () {
  mylessonboxes.style.display = 'block';
  lessonsboxesboth.style.display = 'none';

  if (mylessonboxes.style.display === 'block') {
    kubolessonsbutton.style.fontWeight = '400';
    mylessonsbutton.style.fontWeight = '700';
  }

}


function showCreateNewLesson() {
  createnewlesson.style.display = 'block';
}

window.onclick = function hideCreateNewLesson(event) {
  var lessondiv = document.getElementById("createnewlesson");
    if (event.target == lessondiv) {
        lessondiv.style.display = "none";
    }
}


/*
function promptNameOnLesson(){
  var lessonname = document.getElementById("nameoflessoninput");
  if (lessonname == '') {
    document.getElementById("prompterrormessage").innerHTML = "Please fill out name";
    document.getElementById("prompterrormessage").style.color = "red";
  }
}

*/

function showCreateNewPost(){
  createnewpostparent.style.display = 'block';
}

window.onclick = function hideCreateNewPost(event) {
  var post = document.getElementById("createnewpostparent");
    if (event.target == post) {
        createnewpostparent.style.display = "none";
    }
}
