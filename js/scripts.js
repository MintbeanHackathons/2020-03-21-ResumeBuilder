const builder = {};

builder.template = `{
    "basics": {
        "name": "John Doe",
        "label": "Programmer",
        "picture": "",
        "email": "john@gmail.com",
        "phone": "(912) 555-4321",
        "website": "http://johndoe.com",
        "summary": "A summary of John Doe...",
        "location": {
            "address": "2712 Broadway St",
            "postalCode": "CA 94115",
            "city": "San Francisco",
            "countryCode": "US",
            "region": "California"
        },
        "profiles": [{
            "network": "Twitter",
            "username": "john",
            "url": "http://twitter.com/john"
        }]
    },
    "work": [{
        "company": "Company",
        "position": "President",
        "website": "http://company.com",
        "startDate": "2013-01-01",
        "endDate": "2014-01-01",
        "summary": "Description...",
        "highlights": [
            "Started the company"
        ]
    }],
    "volunteer": [{
        "organization": "Organization",
        "position": "Volunteer",
        "website": "http://organization.com/",
        "startDate": "2012-01-01",
        "endDate": "2013-01-01",
        "summary": "Description...",
        "highlights": [
            "Awarded 'Volunteer of the Month'"
        ]
    }],
    "education": [{
        "institution": "University",
        "area": "Software Development",
        "studyType": "Bachelor",
        "startDate": "2011-01-01",
        "endDate": "2013-01-01",
        "gpa": "4.0",
        "courses": [
            "DB1101 - Basic SQL"
        ]
    }],
    "awards": [{
        "title": "Award",
        "date": "2014-11-01",
        "awarder": "Company",
        "summary": "There is no spoon."
    }],
    "publications": [{
        "name": "Publication",
        "publisher": "Company",
        "releaseDate": "2014-10-01",
        "website": "http://publication.com",
        "summary": "Description..."
    }],
    "skills": [{
        "name": "Web Development",
        "level": "Master",
        "keywords": [
            "HTML",
            "CSS",
            "Javascript"
        ]
    }],
    "languages": [{
        "language": "English",
        "fluency": "Native speaker"
    }],
    "interests": [{
        "name": "Wildlife",
        "keywords": [
            "Ferrets",
            "Unicorns"
    ]
    }],
    "references": [{
        "name": "Jane Doe",
        "reference": "Reference..."
    }]
}`

// doc ready function
function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

// on doc ready call init
ready(function(){
    builder.init();
});

builder.init = () => {
    // gather DOM elements
    builder.getDOM();
    // set event listeners
    builder.listenUp();
    // set up input template
    builder.addTemplate();
}

builder.getDOM = () => {
    // dom elements
    builder.resetButton = document.querySelector('.reset');
    builder.buildButton = document.querySelector('.build');
    builder.copyButton = document.querySelector('.clipboard');
    builder.dlButton = document.querySelector('.download');
    builder.input = document.querySelector('#userInput');
}

builder.listenUp = () => {
    // event listeners
    builder.resetButton.addEventListener('click', builder.reset);
    builder.buildButton.addEventListener('click', builder.build);
    builder.copyButton.addEventListener('click', builder.copy);
    builder.dlButton.addEventListener('click', builder.download);
}

builder.addTemplate = () => {
    // set template
    builder.input.value = builder.template;
}

builder.reset = (e) => {
    // prevent submit
    e.preventDefault();
    // call addTemplate method
    builder.addTemplate();
    // user confirmation
    alert('Template has been reset for you!');
}

builder.build = (e) => {
    // prevent submit
    e.preventDefault();
    // build json resume
}

builder.copy = (e) => {
    // prevent submit
    e.preventDefault();
    // copy json resume
}

builder.download = (e) => {
    // prevent submit
    e.preventDefault();
    // download json resume
}
