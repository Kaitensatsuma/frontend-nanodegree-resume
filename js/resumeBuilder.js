/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "PROMETHEUS | RESEARCH",
    "role" : "",
    "welcomeMessage" : "Research Data Management is Evolving",
    "bioPic" : "images/prometheus.png",
    "contacts" : { 
        "email" :"contact@PrometheusResearch.com",
        "mobile" : "+1.203.672.5800",
        "bitbucket" : "Prometheus",
        "twitter" : "prometheusrsrch",
        "location" : "New Haven, Connecticut"
    },
    "skills" : [
        "Research", "Analytics","Data Management","Client Projects"
    ]
}

var education = {
    "schools" : [
     {
        "name": "",
        "location" : "",
        "degree":"",
        "majors" : ["International Business"],
        "dates" : 2014,
        "url" : "https://www.quinnipiac.edu"
     },
     {
        "name" : "",
        "location" : "",
        "degree":"",
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
       "employer":"American Podiatric Medical Association",
       "title":"",
       "location":"Bethesda, Maryland",
       "dates": "2017 - Ongoing",
       "description":" ",
       "url":"https://www.apma.org/"
   },
   {
       "employer":"UC Irvine",
       "title":"",
       "location":"Irvine, California",
       "dates": "2016 - Ongoing",
       "description":" ",
       "url":"https://uci.edu/"
   },
   {
       "employer":"Children's Hospital of Colorado",
       "title":"",
       "location":"Aurora, Colorado",
       "dates":"2016 - Ongoing",
       "description":" ",
       "url":"https://www.childrenscolorado.org/"
   },
   {
       "employer":"Yale University",
       "title":"",
       "location":"New Haven, Connecticut",
       "dates":"2012 - Ongoing",
       "description":" ",
       "url":"https://www.yale.edu"
   }
   ]
}

var projects = {
    "projects" : [
    {
        "title": "RexStudy",
        "dates": "2011 -",
        "description": "An Integrated research registry for managing all your human subject research data and research workflows in a single system",
        "images":[""],
        "url":"https://www.prometheusresearch.com/RexStudy/"
    },
    {
        "title": "Rex Registry",
        "dates": "Feb 2017 -",
        "description": "A data management platform for delivering tailored quality improvement performane benchmarking, disease and device specific patient registries",
        "images": [""],
        "url":"https://www.prometheusresearch.com/RexRegistry/"
    },
    {
        "title": "Rex DB",
        "dates":"Feb 2011 -",
        "description":"A Library of tools for creating configurable data repositories with little-to-no help from programmers and database administrators",
        "images": ["images/rexdb.png"],
        "url":"https://www.prometheusresearch.com/rexdb/"

    },
    {
        "title": "HTSQL",
        "dates":"Feb 2011 -",
        "description":"A comprehensive navigational query language for use with relational databases, made for both casual as well as advanced user needs",
        "images": ["images/rabbit.png"],
        "url":"http://htsql.org/"

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
    $('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
    $('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $('#topContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
    $('#topContacts').append(HTMLbitbucket.replace("%data%", bio.contacts.bitbucket));
    $('#footerContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
    $('#footerContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $('#footerContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $('#footerContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
    $('#footerContacts').append(HTMLbitbucket.replace("%data%", bio.contacts.bitbucket));
    $('#header').append(HTMLbioPic.replace("%data%", bio.bioPic));
    $('#header').append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++){
        $('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}


projects.displayProjects = function(){
    for(var i = 0; i < projects.projects.length; i++){
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(HTMLprojectTitle.replace("%data%", projects.projects[i].title)
                .replace("#",projects.projects[i].url));
        $('.project-entry:last').append(HTMLprojectStart.replace("%data%", projects.projects[i].date));
        $('.project-entry:last').append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        $('.project-entry:last').append(HTMLprojectImage.replace("%data%", projects.projects[i].images));
    }
}

work.displayWork = function(){
        for (job in work.jobs){
            $("#workExperience").append(HTMLworkStart);
            
            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer)
                .replace("#",work.jobs[job].url); 
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
