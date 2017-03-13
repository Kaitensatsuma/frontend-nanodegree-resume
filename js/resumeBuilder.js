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
        "location" : "Derby, Connecticut"
    },
    "skills" : [
        "Analytics","Javascript","Client Projects"
    ]
}

var education = {
    "schools" : [
     {
        "name": "Quinnipiac University",
        "location" : "Hamden, Connecticut",
        "degree":"Bachelor of Science",
        "majors" : ["International Business"],
        "dates" : 2014,
        "url" : "https://www.quinnipiac.edu"
     },
     {
        "name" : "Quinnipaic Online",
        "location" : "Hamden, Connecticut",
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
       "location":"Hamden, Connecticut",
       "dates": "2011",
       "description":"Polling individuals across the country on important issues at inconvenient times of day"
   },
   {
       "employer":"Sage Dining",
       "title":"Dishwasher",
       "location":"Cheshire, Connecticut",
       "dates":"2012-2015",
       "description":"Learning that you can always depend on people to be awful, and that as long as your manager is hired by the regional, he could murder someone and they probably still blame the staff"
   },
   {
       "employer":"Prometheus Research",
       "title":"Analyst I",
       "location":"New Haven, Connecticut",
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
        "images": ["images/flag.png"]
    },
    {
        "title": "Research Project: How Culture impacts Economic Growth",
        "dates":"Jan 2013 - Jan 2014",
        "description":"Long Term Research project: Knowing about the different Cultural spectra, are there any correlations between particular cultural traits such as individualism or collectivism and economic development?",
        "images": ["images/qu.png"]
    }
    ]
}

// Functions


//function locationizer() {
//    locations = [];
//    for(var i = 0; i < work.jobs.length; i++){
//        locations.push(work.jobs[i].location);
//    }
//    return locations;
//}
//
//function inName(){
//    names = bio.name.trim().split(" ");
//    names[1] = names[1].toUpperCase();
//    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//    return names[0] +" "+ names[1];
//}

//$(document).click(function(loc){
//    logClicks(loc.pageX, loc.pageY);
//});

/* Ready!
$(document).ready(function(){
    alert("Ready!");
}); */

//function intNational(){
//    document.getElementById("name").innerHTML = inName();
//    document.getElementById("name").style.color = "blue";
//}


bio.displaySkills = function(){
    $('#header').append(HTMLheaderName.replace("%data%", bio.name));
    $('#header').append(HTMLheaderRole.replace("%data%", bio.role));
    $('#header').append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $('#header').append(HTMLbioPic.replace("%data%", bio.bioPic));
    $('#header').append(HTMLskillsStart);
    $('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
    $('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $('#topContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
    $('#topContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
    for(var i = 0; i < bio.skills.length; i++){
        $('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}


projects.displayProjects = function(){
    for(var i = 0; i < projects.projects.length; i++){
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $('.project-entry:last').append(HTMLprojectStart.replace("%data%", projects.projects[i].date));
        $('.project-entry:last').append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        $('.project-entry:last').append(HTMLprojectImage.replace("%data%", projects.projects[i].images));
    }
}

work.displayWork = function(){
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

education.displayEdu = function(){
    for (var i = 0; i < education.schools.length; i++){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    }
}
// Function Calls

work.displayWork();
projects.displayProjects();
bio.displaySkills();
education.displayEdu();
$("#mapDiv").append(googleMap);
