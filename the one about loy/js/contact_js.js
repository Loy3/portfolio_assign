window.onload = function () {
    //NavBar
    let navB = "<table><tr><td><img src='./assets/logo.png' alt='Logo' width='70' style='text-align:left;margin-left:30px;'></td>" +
        "<td align='right' style='padding-right: 50px;'> <a href='index.html'>home</a>" +
        "<a href='about.html' title='About Me'>about me</a><a href='contact.html' class='active' title='Contact'>contact</a></td></tr></table>";
    document.getElementById("myNav").innerHTML = navB;
    //End of NavBar

    //Header
    let myTxt = "<h1><b>contact me</b></h1>" +
        '<p><b>"you might be alone at the moment, but someday, without any doubt, you will definitely find nakama (a' +
        ' friend). no one is born into this world to be alone." - Jaguar D Saul</b></p>';
    document.getElementById("txt").innerHTML = myTxt;
    //End of Header

    //Main
    //Cards
    let card =
        '<div class="card"><span>location:</span><br>block f<br>soshanguve, 0152</div><br>' +
        '<div class="card"><span>email: </span><br>netshiozwiloy@gmail.com</div><br>' +
        '<div class="card"><span>phone Number: </span><br> +27 68 128 7854 || +27 76 850 7586</div><br>' +
        '<div class="card"><span>socials</span><br><br><div class="socials">' +
        '<a href="https://za.linkedin.com/in/loy-netshiozwi-94a591210" title="LinkedIn"><img src="./assets/Icons/linkedin.png" alt="LinkedIn"></a>' +
        '<a href="https://github.com/Loy3" title="GitHub"><img src="./assets/Icons/github.png" alt="GitHub"></a></div></div>';

    document.getElementById("firstCol").innerHTML = card;
    //End of Cards
    //End of Main

}

//messages
let nameVld = "<p>first or last name entry shouldn't be left empty</p>";
let emailVld = "<p>email address entry shouldn't be left empty</p>";
let subVld = "<p>subject entry shouldn't be left empty</p>";
let messVld = "<p>message entry shouldn't be left empty</p>";

let vldEmail = "<p>invalid email address</p>";

let success = '<h2>message</h2>' +
    '<p> message was sent successfully!</p><br>' +
    '<button onclick="closeForm()">close</button>';
//End of messages

//form
let full_name = "";
function myForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    console.log(fname + ", " + lname + ", " + email + ", " + subject + ", " + message);

    if (emptyEntry(fname, lname, email, subject, message) == true && validate_email(email) == true) {
        full_name = fname + " " + lname;

        const myData = {
            "First & Last Name:": full_name, "Email Address": email, "Subject": subject, "Message": message
        }

        sendEmail(myData);
    }

    return false;
}


//Check if entries are empty
function emptyEntry(fname, lname, mail, subj, mess) {

    if (fname == "") {
        document.getElementById("name_validate").innerHTML = nameVld;
        document.getElementById("fname").style.border = "2px solid red";

    } else {
        document.getElementById("name_validate").innerHTML = "";
        document.getElementById("fname").style.border = "2px solid #552f1ad7";
    }

    if (lname == "") {
        document.getElementById("name_validate").innerHTML = nameVld;
        document.getElementById("lname").style.border = "2px solid red";
    } else {
        document.getElementById("name_validate").innerHTML = "";
        document.getElementById("lname").style.border = "2px solid #552f1ad7";
    }

    if (mail == "") {
        document.getElementById("email_validate").innerHTML = emailVld;
        document.getElementById("email").style.border = "2px solid red";
    } else {
        document.getElementById("email_validate").innerHTML = "";
        document.getElementById("email").style.border = "2px solid #552f1ad7";
    }

    if (subj == "") {
        document.getElementById("subject_validate").innerHTML = subVld;
        document.getElementById("subject").style.border = "2px solid red";
    } else {
        document.getElementById("subject_validate").innerHTML = "";
        document.getElementById("subject").style.border = "2px solid #552f1ad7";
    }

    if (mess == "") {
        document.getElementById("message_validate").innerHTML = messVld;
        document.getElementById("message").style.border = "2px solid red";
    } else {
        document.getElementById("message_validate").innerHTML = "";
        document.getElementById("message").style.border = "2px solid #552f1ad7";
    }

    if (fname != "" && mail != "" && lname != "" && subj != "" && mess != "") {
        return true;
    } else {
        return false;
    }

}
//End

//Validate email
function validate_email(mail) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (mail.match(mailformat)) {
        return true;
    }
    else {
        document.getElementById("email_validate").innerHTML = vldEmail;
        return false;
    }
}
//End

//Send email
function sendEmail(data) {

    fetch('https://formspree.io/f/mvonaavz', {
        method: 'POST',
        body: JSON.stringify({
            data
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (results) {
            console.log(results);
            openForm();
            document.getElementById("box").innerHTML = success;
        }).catch(error => {
            console.error('Error:', error);
        });
}


//Open and close popup
function openForm() {
    document.getElementById("popup").style.display = "block";

}

function closeForm() {
    document.getElementById("popup").style.display = "none";
    location.reload();
}
//end of open and close popup