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

posts = JSON.parse(localStorage.getItem('posts')) || [];
posts.push ({

                topic: document.getElementById("nameofpostinput").value,
                message: document.getElementById("usertextarea").value,
                category: document.getElementById("selectforumcategorydropdown").value,
                time: date });

localStorage.setItem('posts', JSON.stringify(posts));
/*
document.getElementById("nameofpostinput").value = "";
document.getElementById("usertextarea").value = "";
document.getElementById("selectforumcategorydropdown").value = 0;*/

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



        document.getElementById("posts").appendChild(div);
        div.style = "background-color: white; font-weight: 400; margin: 20px 25px ;padding: 10px 25px ; box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.59); "
        h1.style = "font-size: 40px;";
        p1.style = "font-size: 15px; font-weight: 100;";
        p2.style = "font-weight: 100; color: grey;";

        createnewpostparent.style.display = 'none';

}
}


function saveMyLessons(){
lessons = JSON.parse(localStorage.getItem('lessons')) || [];
lessons.push ({ title: document.getElementById("nameoflessoninput").value,
                difficulty: document.getElementById("selectlessoncategorydropdown").value,
                duration: document.getElementById("chooselessontimedropdown").value,
                subject: document.getElementById("selectlessoncategorydropdown").value,
                grade: document.getElementById("selectgradelevelcheckbox").value
                });

localStorage.setItem('lessons', JSON.stringify(lessons));


/*all the divs*/
var outerdiv = document.createElement("div");
var innerdiv = document.createElement("div");
var lessondiv = document.createElement("div");
var timediv = document.createElement("div");
var subjectdiv = document.createElement("div");
var gradediv = document.createElement("div");

/*all the images*/
var diffimg = document.createElement("IMG");
diffimg.setAttribute("src", "assets/images/kalender.png");

var duraimg = document.createElement("IMG");
duraimg.setAttribute("src", "assets/images/ur.png");

var subimg = document.createElement("IMG");
subimg.setAttribute("src", "assets/images/bogmærke.png");

var gradimg = document.createElement("IMG");
gradimg.setAttribute("src", "assets/images/stjerne.png");

/*all p's and headlines*/
var h3 = document.createElement("h3");
var p01 = document.createElement("p");
var p02 = document.createElement("p");
var p03 = document.createElement("p");
var p04 = document.createElement("p");


for(var i=0; i < lessons.length; i++) {


        h3.innerHTML = lessons[i].title;
        innerdiv.appendChild(h3);


        p01.innerHTML = lessons[i].difficulty;
        lessondiv.appendChild(diffimg);
        lessondiv.appendChild(p01);
        innerdiv.appendChild(lessondiv);



        p02.innerHTML = lessons[i].duration;
        timediv.appendChild(duraimg);
        timediv.appendChild(p02);
        innerdiv.appendChild(timediv);

        p03.innerHTML = lessons[i].subject;
        subjectdiv.appendChild(subimg);
        subjectdiv.appendChild(p03);
        innerdiv.appendChild(subjectdiv);

        p04.innerHTML = lessons[i].grade;
        gradediv.appendChild(gradimg);
        gradediv.appendChild(p04);
        innerdiv.appendChild(gradediv);

        outerdiv.appendChild(innerdiv);

        document.getElementById("boxes").appendChild(outerdiv);
        createnewlesson.style.display = 'none';

        innerdiv.style = "border: none; width: 160px;height: 200px; font-size: 12px; padding-left: 10px; margin-right: 30px; box-shadow: 0 0 10px 0 grey;"
        h3.style = "font-size: 12px; margin: 10px;"
        lessondiv.style = "display: flex; flex-direction: row;"
        timediv.style = "display: flex; flex-direction: row;"
        subjectdiv.style = "display: flex; flex-direction: row;"
        gradediv.style = "display: flex; flex-direction: row;"
        duraimg.style = "padding-top: 15px; align-self: center;"
        diffimg.style = "padding-top: 15px; align-self: center;"
        subimg.style = "padding-top: 15px; align-self: center;"
        gradimg.style = "padding-top: 15px; align-self: center;"
        p01.style = "align-self: center; margin: 0; padding-top: 15px; padding-left: 10px; font-size: 12px;"
        p02.style = "align-self: center; margin: 0; padding-top: 15px; padding-left: 10px; font-size: 12px;"
        p03.style = "align-self: center; margin: 0; padding-top: 15px; padding-left: 10px; font-size: 12px;"
        p04.style = "align-self: center; margin: 0; padding-top: 15px; padding-left: 10px; font-size: 12px;"

}
}
