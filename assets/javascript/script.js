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




function submitNewPost() {
var date = new Date();






posts = JSON.parse(localStorage.getItem("posts")) || [];
posts.push ({

              topic: document.getElementById("nameofpostinput").value,
              message: document.getElementById("usertextarea").value,
              category: document.getElementById("selectforumcategorydropdown").value,
              time: date
});
localStorage.setItem("posts", JSON.stringify(posts));



document.getElementById("nameofpostinput").value = "";
document.getElementById("usertextarea").value = "";
document.getElementById("selectforumcategorydropdown").value = 0;
 //retrieving array

    for(var i=0; i < posts.length; i++) {
        var div = document.createElement("div");

        var h1 = document.createElement("h1");
        h1.innerHTML = posts[i].topic;
        div.appendChild(h1);

        p1 = document.createElement("p");
        var string = posts[i].message;
        var reducedText = string.slice(0, 50) + "...";
        p1.innerHTML = reducedText;
        div.appendChild(p1);

        p2 = document.createElement("p");
        p2.innerHTML = posts[i].category;
        div.appendChild(p2);


        p3 = document.createElement("p");
        p3.innerHTML = posts[i].date;
        div.appendChild(p3);


        document.getElementById("posts").appendChild(div);
        div.style = "background-color: white; font-weight: 400; margin: 20px 25px ;padding: 10px 25px ; box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.59); cursor: pointer;"
        h1.style = "font-size: 40px;";
        p1.style = "font-size: 15px; font-weight: 100;";
        p2.style = "font-weight: 100; color: grey;";
        p3.style = "font-weight"

        createnewpostparent.style.display = 'none';
        div.setAttribute('onclick', 'location.href = "forumpost.html"');
}
}


function displayMyPost(){
  var post = JSON.parse(localStorage.getItem("posts"));

  var title = post.topic;
  var message = post.message;
  var category = post.category;

  document.getElementById("myposttitle").innerHTML = title;
  document.getElementById("mypostmessage").innerHTML = message;
  document.getElementById("mypostcategory").innerHTML = category;


}

function saveMyLesson() {

}
