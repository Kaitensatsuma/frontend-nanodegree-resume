/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Marcin Mazurek",
    "role" : "Analyst",
    "welcomeMessage" : "Welcome to my Portfolio",
    "bioPic" : "images/me.jpg",
    "contacts" : { 
        "email" :"Marcin.Artur.Mazurek@gmail.com",
        "mobile" : "203-736-7873",
        "github" : "Kaitensatsuma",
        "twitter" : "@Kaitensatsuma",
        "location" : "Connecticut"
    },
    "skills" : [
        "Analytics","Javascript","Client Projects"
    ]
}

var education = {
    "schools" : [
     {
        "name": "Quinnipiac University",
        "city" : "Hamden",
        "degree":"Bachelor of Science",
        "majors" : ["International Business"],
        "dates" : 2014,
        "url" : "https://www.quinnipiac.edu"
     },
     {
        "name" : "Quinnipaic Online",
        "city" : "Hamden",
        "degree":"Master of Science",
        "major" : ["Business Analytics"],
        "dates" : 2017,
        "url" : "https://www.quinnipiac.edu"
     }],
    "onlineCourses" : [
    {
        "title":"Javascript for Beginners",
        "school":"Udacity",
        "dates": 2017,
        "url":"https://www.udacity.com/courses/ud804"
    },
    {
        "title":"Introduction to Computer Science: CS50",
        "school":"edX: Harvard University",
        "dates": 2013,
        "url":"https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
    },
    {
        "title":"Data Scientist's Toolbox",
        "school":"Coursera: Johns Hopkins",
        "dates": 2013,
        "url":"https://www.coursera.org/learn/data-scientists-tools"
    }
    ]
}

var work = {
   "jobs" : [
   {
       "employer":"Quinnipiac",
       "title":"Pollster",
       "location":"Quinnipiac Polling Instutute",
       "dates": "2011",
       "description":"Polling individuals across the country on important issues at inconvenient times of day"
   },
   {
       "employer":"Sage Dining",
       "title":"Dishwasher",
       "location":"Cheshire Academy",
       "dates":"2012-2015",
       "description":"Learning that you can always depend on people to be awful, and that as long as your manager is hired by the regional, he could murder someone and they probably still blame the staff"
   },
   {
       "employer":"Prometheus Research",
       "title":"Analyst I",
       "location":"New Haven",
       "dates":"2016- Current",
       "description":"Learning a lot about the research registry industry, YAML, Python Javascript and enjoying m work very much"
   }
   ]
}

var projects = {
    "projects" : [
    {
        "title": "Research Project: Investing into Israel",
        "dates": "Jan 2012- March 2012",
        "description": "A Look into the business investmen climate in Israel, focused more on Technological investment",
        "images": []
    },
    {
        "title": "Ressearch Project: How Culture impacts Economic Growth",
        "dates":"Jan 2013 - Jan 2014",
        "description":"Long Term Research project: Knowing about the different Cultural spectra, are there any correlations between particular cultural traits such as individualism or collectivism and economic development?",
        "images": []
    }
    ]
}

if (bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
}

// Functions

var displayWork = function(){
        for (job in work.jobs){
            $("#workExperience").append(HTMLworkStart);
            
            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer); 
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocDate = formattedLocation + ' - ' + formattedDates;
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
}

function locationizer() {
    locations = [];
    for(var i = 0; i < work.jobs.length; i++){
        locations.push(work.jobs[i].location);
    }
    return locations;
}

function inName(){
    names = bio.name.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    return names[0] +" "+ names[1];
}


$(document).click(function(loc){
    logClicks(loc.pageX, loc.pageY);
});

/* Ready!
$(document).ready(function(){
    alert("Ready!");
}); */

function intNational(){
    document.getElementById("name").innerHTML = inName();
    document.getElementById("name").style.color = "blue";
}

// Function Calls

$('#header').prepend(HTMLheaderName.replace("%data%", bio.name));
$('#main').append(internationalizeButton);

displayWork();

