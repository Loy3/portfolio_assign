window.onload = function () {
    //Heading and sub 
    let designHead = '<h2>designs</h2><p>all the desings were made using adobe photoshop</p>';
    let videoHead = '<h2>videos</h2><p>all the videos were made and edited using adobe after effects</p>';
    let webHead = '<h2>websites</h2><p>all the websites were developed using angular 10</p>';
    //end of heading and sub 

    //Arrays
    let coverArr = [
        "./assets/Images/Cover/20.png",
        "./assets/Images/Cover/14.png",
        "./assets/Images/Cover/3.png",
        "./assets/Images/Cover/15.png"
    ];
    let charArr = [
        "./assets/Images/Char/3.png",
        "./assets/Images/Char/4.png",
        "./assets/Images/Char/5.png",
        "./assets/Images/Char/7.png"
    ];
    let posterArr = [
        "./assets/Images/Poster/1.png",
        "./assets/Images/Poster/2.png",
        "./assets/Images/Poster/3.png",
        "./assets/Images/Poster/4.png"
    ];
    let videosArr = [
        "./assets/Images/Video/1.m4v",
        "./assets/Images/Video/4.m4v",
        "./assets/Images/Video/6.m4v"
    ];

    let webArr = new Array(
        { img: "./assets/Images/UI/11.png", title: "Thee Third Stop Dinner Website", pLink: "<a href='https://omwdinner.web.app/'><button>visit</button></a>" },
        { img: "./assets/Images/UI/12.png", title: "Thee Third Stop Shop Website", pLink: "<a href='https://omwshop-81e79.web.app/'><button>visit</button></a>" },
        { img: "./assets/Images/UI/13.png", title: "Thee Third Stop Shop Online Store", pLink: "<h6><i>coming soon</i></h6>" }
    )
    //end of arrays

    //NavBar
    let navB = '<a href="about.html"><img src="./assets/Icons/rtn.png" alt="" style="text-align:left;" title="Return to about"></a>';
    document.getElementById("myNav").innerHTML = navB;
    //End of NavBar

    //Header
    let myTxt = "<h2><b>loy's work</b></h2><h3><b>loy's personal work</b></h3>";
    document.getElementById("txt").innerHTML = myTxt;
    //End of Header

    //Main
    //Call Headers and sub
    document.getElementById("desHead").innerHTML = designHead;
    document.getElementById("vidHead").innerHTML = videoHead;
    document.getElementById("webHead").innerHTML = webHead;
    //Call Headers and sub


    //Cover
    let cover = '<h3>cover art</h3>';

    for (let c = 0; c < coverArr.length; c++) {
        cover += '<div class="column" >' +
            '<img src="' + coverArr[c] + '" alt="" onclick="openForm(this);"></div>' +
            ' <div class="card"></div>';
    }
    document.getElementById("cover").innerHTML = cover;
    //End of cover

    //Charactors
    let char = '<h3>charactors</h3>';

    for (let ch = 0; ch < charArr.length; ch++) {
        char += '<div class="column" >' +
            '<img src="' + charArr[ch] + '" alt="" onclick="openForm(this);"></div>' +
            ' <div class="card"></div>';
    }
    document.getElementById("char").innerHTML = char;
    //End of Charactors

    //Poster
    let poster = '<h3>posters</h3>';

    for (let p = 0; p < posterArr.length; p++) {
        poster += '<div class="column" >' +
            '<img src="' + posterArr[p] + '" alt="" onclick="openForm(this);"></div>' +
            ' <div class="card"></div>';
    }
    document.getElementById("poster").innerHTML = poster;
    //End of poster

    //videos
    let vid = '';

    for (let v = 0; v < videosArr.length; v++) {
        vid += '<div class="column"><video controls>' +
            ' <source src="' + videosArr[v] + '" type="video/mp4"></video></div>';
    }
    document.getElementById("myVideos").innerHTML = vid;
    //End of videos

    //Websites
    let website = '';

    for (let w = 0; w < webArr.length; w++) {
        website += '<div class="column"><div class="card">' +
            ' <img src="' + webArr[w].img + '" alt="">' +
            '<h5>' + webArr[w].title + '</h5>' +
            webArr[w].pLink + '</div></div>';
    }

    document.getElementById("myWeb").innerHTML = website;
    //end of ebsites
    //End of main


};
//Change images
function showCover() {
    document.getElementById("cover").style.display = "block";
    document.getElementById("char").style.display = "none";
    document.getElementById("poster").style.display = "none";
}

function showChar() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("char").style.display = "block";
    document.getElementById("poster").style.display = "none";
}

function showPoster() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("char").style.display = "none";
    document.getElementById("poster").style.display = "block";
}
//end of change images


//Open and close popup
function openForm(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    document.getElementById("popup").style.display = "block";
}

function closeForm() {
    document.getElementById("popup").style.display = "none";
}
//end of open and close popup