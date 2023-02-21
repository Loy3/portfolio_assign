window.onload = function () {
    //NavBar
    let navB = "<table><tr><td><img src='./assets/logo.png' alt='Logo' width='70' style='text-align:left;margin-left:30px;'></td>" +
        "<td align='right' style='padding-right: 50px;'> <a href='#' class='active'>home</a>" +
        "<a href='about.html' title='About Me'>about me</a><a href='contact.html' title='Contact'>contact</a></td></tr></table>";
    document.getElementById("myNav").innerHTML = navB;
    //End of NavBar


    //Header
    let myTxt = "<h2><b>the one about loy</b></h2><p><b>video by koolshooter, downloaded from pexels.com</b></p>";
    document.getElementById("txt").innerHTML = myTxt;
    //End of Header

    //Main
    let fCol = '<a href="about.html"><img src="./assets/Images/Loy.png" alt="Loy"></a>';
    document.getElementById("firstCol").innerHTML = fCol;

    let sCol = '<h1>loy netshiozwi</h1><p><span>my bio - </span> loy is a multimedia designer who has a great passion in web development, and graphic/digital design.' +
        '<br><br>personally he is a person who works hard and is enthused, motivated, dependable, and responsible. he is someone who can easily adjust to any difficult circumstances. ' +
        'he has the ability to operate well both independently and in a collaborative setting.</p><a href="about.html"><button>read more</button></a>';
    document.getElementById("secondCol").innerHTML = sCol;
    //End of Main

    //Footer
    let fCol1 = "<br><br><p><span>phone number: </span><br>+27 68 128 7854 || +27 76 850 7586</p>" +
        "<div class='socials' style='margin-top: 30px;'>" +
        "<h3>socials</h3>" +
        "<a href='https://za.linkedin.com/in/loy-netshiozwi-94a591210' title='LinkedIn'><img src='./assets/Icons/linkedin.png' alt='LinkedIn'></a>" +
        "<a href='https://github.com/Loy3' title='GitHub'><img src='./assets/Icons/github.png' alt='GitHub'></a></div>";
    document.getElementById("footCol1").innerHTML = fCol1;

    let myMap = '';
    //End of Footer

};
//End of function