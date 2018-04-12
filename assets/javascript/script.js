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



function showCreateNewPost(){
  createnewpostparent.style.display = 'block';
}

/*----------- close window ----------*/
window.addEventListener("click", function(event) {
    var post = document.getElementById("createnewpostparent");
    if (event.target == post) {
        createnewpostparent.style.display = "none";
    }
});

window.addEventListener("click", function(event) {
var lessondiv = document.getElementById("createnewlesson");
  if (event.target == lessondiv) {
      lessondiv.style.display = "none";
  }
});
/*---------------------*//*
  function submitNewPost() {
        var name = document.getElementById('nameofpostinput').value;
        localStorage.setItem('userPost', name);

        var category = document.getElementById('selectforumcategorydropdown').value;
        localStorage.setItem('userCategory', category);

        var message = document.getElementById('usertextarea').value;
        localStorage.setItem('userMessage', message);


        var title = localStorage.getItem('userPost');
        var forumcategory = localStorage.getItem('userCategory');
        var forummessage = localStorage.getItem('userMessage');

        document.getElementById("posttitle").innerHTML = title;
        document.getElementById("postcategory").innerHTML = forumcategory;
        document.getElementById("postmessage").innerHTML = forummessage;


        createnewpostparent.style.display = 'none';
        }


var post = {

            message:"Doe",
            category:50,
            eyeColor:"blue"};

*/

function submitNewPost() {


var posts = [{
        topic: document.getElementById("nameofpostinput").value,
        message: document.getElementById("usertextarea").value,
        category: document.getElementById("selectforumcategorydropdown").value

    }];



    localStorage.setItem("posts", JSON.stringify(posts));

//get

document.getElementById("nameofpostinput").value = "";
document.getElementById("usertextarea").value = "";
document.getElementById("selectforumcategorydropdown").value = 0;
var postsList = JSON.parse( localStorage.getItem("posts"));


        for(var i=0; i < posts.length; i++) {
          var dt = document.createElement("div");
          dt.innerText = postsList[i].topic;

          var dm = document.createElement ("div");
          dm.innerText = postsList[i].message;

          var dc = document.createElement("div");
          dc.innerText = postsList[i].category;

          /*
          document.getElementById("posttitle").innerHTML += postsList[i].topic;
          document.getElementById("postmessage").innerHTML += postsList[i].message;
          document.getElementById("postcategory").innerHTML += postsList[i].category;
          */

          var posts = document.getElementById("userposts");
          posts.appendChild(dt);
          posts.appendChild(dm);
          posts.appendChild(dc);

          createnewpostparent.style.display = 'none';
          userposts.style.display = 'block';

}

}

function test () {
    var div = document.createElement("div");
    div.appendChild(document.document.getElementById("posttitle")).innerHTML += postsList[i].topic;
    div.appendChild(document.getElementById("postmessage")).innerHTML += postsList[i].message;
    div.appendChild(document.getElementById("postcategory")).innerHTML += postsList[i].category;
    document.getElementById('userposts').appendChild('div');

}
