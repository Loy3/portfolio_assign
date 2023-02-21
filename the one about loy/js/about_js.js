window.onload = function () {
    //NavBar
    let navB = "<table><tr><td><img src='./assets/logo.png' alt='Logo' width='70' style='text-align:left; margin-left:30px;'></td>" +
        "<td align='right' style='padding-right: 50px;'> <a href='index.html'>home</a>" +
        "<a href='about.html' class='active' title='About Me'>about me</a><a href='contact.html' title='Contact'>contact</a></td></tr></table>";
    document.getElementById("myNav").innerHTML = navB;
    //End of NavBar

    //Header
    let myTxt = "<h1><b>about me</b></h1><h3><b>the one about loy </b></h3>";
    document.getElementById("txt").innerHTML = myTxt;
    //End of Header

    //main
    //Intro
    let myIntro = "<h1>about</h1>" +
        "<p>loy was born and raised in soshanguve, pretoria, by a single mother with 6 children and he was the" +
        " sixth child (last born). after he finishing matric, he chose to further his studies, by studying to" +
        " become a multimedia designer, and during his studies, he grew to have a passion for web development and" +
        "   digital design, and ever since he has been working hard to improve his skills.</p>";
    document.getElementById("intro").innerHTML = myIntro;
    //End of Intro

    //Details
    let fCol = '<img src="./assets/Images/bike.png" alt="Loy" width="100%" class="detImg">';
    document.getElementById("firstCol").innerHTML = fCol;

    let sCol = '<h3>multimedia Designer || web developer || digital designer</h3><br>' +
        '<div class="row">' +
        '<div class="column"><span>full name(s): </span><br>loy shandukani netshiozwi</div>' +
        '<div class="column"><span> age: </span>25</div>' +
        '<div class="column"><span>phone number:</span><br>+27 68 128 7854 || +27 76 850 7586</div>' +
        '<div class="column"><span>email:</span> netshiozwiloy@gmail.com</div>' +
        '<div class="column"><span>website: </span><a href="https://portfolio-63e6b.web.app/">portfolio</a></div>' +
        '<div class="column"><span>city:</span> tshwane</div>' +

        '<div class="longColumn"><h3>hobbies:</h3></div>' +
        '<div class="longColumn"><table style="width: 100%;"><tr class="hobb">' +
        '<td style="width: 10%;"><img src="./assets/Icons/bodybuilder.png" alt=""><br><span>body building</span></td>' +
        '<td style="width: 10%;"><img src="./assets/Icons/martial-arts.png" alt=""><br><span>kyokushin karate</span></td>' +
        '<td style="width: 10%;"><img src="./assets/Icons/sewing-machine.png" alt=""><br><span>sewing</span></td>' +
        '</tr></table></div>' +

        '<div class="longColumn"><p>these are some of the things he enjoys doing if he is not coding or designing, ' +
        'and if he is not doing either of these things, he is either watching anime or collecting hot wheels.</p>' +
        '</div>';
    document.getElementById("secondCol").innerHTML = sCol;
    //End of Details



    //Skills
    const webArr = [
        'angular 2+',
        'html || css/scss || javascript',
        'php',
        'typescript'
    ];

    const designArr = [
        'adobe after effects',
        'adobe photoshop',
        'autodesk 3ds max',
        'unity'
    ];


    //web
    let webSk = '<img src="./assets/Icons/coding.png" alt="" class="mImg"><h3>for web development:</h3><div id="webBull"><ul>';

    for (let w = 0; w < webArr.length; w++) {
        webSk +=
            '<li class="img' + w + '">' +
            webArr[w] +
            '</li>';
    }

    webSk += '</ul></div>';
    document.getElementById("webSkill").innerHTML = webSk;
    //end of web
    let num = 4;
    //des
    let desSk = '<img src="./assets/Icons/graphic-design.png" alt="" class="mImg"><h3>for design:</h3><div id="webBull"><ul>';
    for (let d = 0; d < designArr.length; d++) {
        desSk +=
            '<li class="img' + num + '">' +
            designArr[d] +
            '</li>';

        num++;
    }

    desSk += '</ul></div>';
    document.getElementById("desSkill").innerHTML = desSk;
    //end of web
    //End of Skills

    //resume
    let edu =
        '<div class="longColumn"><h2>education</h2></div>' +

        '<div class="column"><h4>national diploma in IT multimedia:</h4><p>' +
        'tshwane university of technology<br>pretoria, soshanguve south campus.<br>2017 - 2021</p></div>' +

        '<div class="column"><h4>system development nq level 5:</h4><p>' +
        'tsafrika foundation learnership<br>kya sands, radnburg.<br>2021 - 2022</p></div>';

    document.getElementById("education").innerHTML = edu;

    let workExp =
        '<div class="longColumn"><h2>work experience</h2></div>' +
        '<div class="column"><div id="firstexp"><h4 class="mb-3">Information Community Engagement Project (ICEP)</h4><p>' +
        'front-end developer || 2020 - 2021.<br>I was an intern at ICEP working as a front-end developer working handin hand with back-end developers and business analysts.<br></p>' +
        '<ul><li>developer in a 10 member team, which consisted of a scrum master, back-end developers and business analysts</li>' +
        '<li>developed web application, e-commerce web application.</li>' +
        '<li>using angular, scss, and typeScript to develop the web applications.</li>' +
        '<li>Connecting APIs on Angular.</li></ul><br><button onclick="next()">next</button></div>' +

        '<div id="secondexp"><h4 class="mb-3">Bodibeng Community Library</h4><p>' +
        'librarian || 2022 - 2022.<br>I was an intern librarian at Bodibeng, helping customers locate book, finding material online, checking books in and out at the front desk, sorting and ' +
        'shelving books according to their categorization, registering new customers and maintaining and updating customer profile, assisting customers with internet access and' +
        'ensuring their technical needs are met.<br><br>As part of the learneship, my system development duties was to develop' +
        'web application,using angular, html5, CSS, and PHP to develop the web applications. </p><br><button onclick="prev()">prev.</button></div></div>';

    document.getElementById("experience").innerHTML = workExp;
    //end of resume

    //spec
    const specWebArr = [
        'creating PHP REST APIs',
        ' developing websites and web application',
        'firebase API connecting',
        'firebase website hosting'
    ];

    const specDesignArr = [
        'designing 2d characters using photoshop',
        'different types of posters designs using photoshop',
        'mixtape cover art designing using photoshop',
        'Video Editing using After Effects.'
    ];

    const specUiArr = [
        'designing ui',
        'implementing them in angular'
    ];

    //first card
    let special1 = '<h3>web development:</h3> <ul>';

    for (let s = 0; s < specWebArr.length; s++) {
        special1 += '<li>' + specWebArr[s] + '</li>';
    }
    special1 += '</ul><br><br><br>';

    document.getElementById("spec1").innerHTML = special1;
    //first card

    //second card
    let special2 = '<h3>design:</h3> <ul>';

    for (let s = 0; s < specDesignArr.length; s++) {
        special2 += '<li>' + specDesignArr[s] + '</li>';
    }
    special2 += '</ul>';

    document.getElementById("spec2").innerHTML = special2;
    //second card

    //third card
    let special3 = '<h3>ui/ux development:</h3> <ul>';

    for (let s = 0; s < specUiArr.length; s++) {
        special3 += '<li>' + specUiArr[s] + '</li>';
    }
    special3 += '</ul><br><br><br><br>';

    document.getElementById("spec3").innerHTML = special3;
    //second card
    //end of spec

    //designs
    let myDesArr = new Array(
        { img: "./assets/Images/Char/7.png", name: "uncle loy" },
        { img: "./assets/Images/Poster/2.png", name: "chillas sunday" },
        { img: "./assets/Images/Cover/20.png", name: " mixtape cover art" },
    );

    let des = '<div class="row" style="margin-top: 50px;" id="myDesigns">';
    for (let m = 0; m < myDesArr.length; m++) {
        des += '<div class="column"><img src="' +
            myDesArr[m].img +
            '" alt="Design"><br></div>';
    }
    des += '';
    document.getElementById("aFew").innerHTML = des;
    //end of designs

    //end of main
};

function next() {
    document.getElementById("firstexp").style.display = "none";
    document.getElementById("secondexp").style.display = "block";
}

function prev() {
    document.getElementById("firstexp").style.display = "block";
    document.getElementById("secondexp").style.display = "none";
}