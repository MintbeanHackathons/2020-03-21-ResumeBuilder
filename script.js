app = {};
app.resume = {
	basics: {
		name: "John Doe",
		label: "Programmer",
		picture: "",
		email: "john@gmail.com",
		phone: "(912) 555-4321",
		website: "http://johndoe.com",
		summary: "A summary of John Doe...",
		location: {
			address: "2712 Broadway St",
			postalCode: "CA 94115",
			city: "San Francisco",
			countryCode: "US",
			region: "California"
		},
		profiles: [
			{
				network: "Twitter",
				username: "john",
				url: "http://twitter.com/john"
			}
		]
	},
	work: [
		{
			company: "Company",
			position: "President",
			website: "http://company.com",
			startDate: "2013-01-01",
			endDate: "2014-01-01",
			summary: "Description...",
			highlights: ["Started the company"]
		}
	],
	volunteer: [
		{
			organization: "Organization",
			position: "Volunteer",
			website: "http://organization.com/",
			startDate: "2012-01-01",
			endDate: "2013-01-01",
			summary: "Description...",
			highlights: ["Awarded 'Volunteer of the Month'"]
		}
	],
	education: [
		{
			institution: "University",
			area: "Software Development",
			studyType: "Bachelor",
			startDate: "2011-01-01",
			endDate: "2013-01-01",
			gpa: "4.0",
			courses: ["DB1101 - Basic SQL"]
		}
	],
	awards: [
		{
			title: "Award",
			date: "2014-11-01",
			awarder: "Company",
			summary: "There is no spoon."
		}
	],
	publications: [
		{
			name: "Publication",
			publisher: "Company",
			releaseDate: "2014-10-01",
			website: "http://publication.com",
			summary: "Description..."
		}
	],
	skills: [
		{
			name: "Web Development",
			level: "Master",
			keywords: ["HTML", "CSS", "Javascript"]
		}
	],
	languages: [
		{
			language: "English",
			fluency: "Native speaker"
		}
	],
	interests: [
		{
			name: "Wildlife",
			keywords: ["Ferrets", "Unicorns"]
		}
	],
	references: [
		{
			name: "Jane Doe",
			reference: "Reference..."
		}
	]
};
app.workCounter = 0;

app.moreWork = function() {
	// append more work info
	app.workCounter++;
	console.log("fizz");
	const workToAppend = `<fieldset class="work${app.workCounter}" data-jsonSection="work${app.workCounter}">${$(
		".work0"
	).html()}</fieldset>`;
	$(workToAppend).insertAfter($(".work0"));

	app.resume.work.push(app.resume.work[0]);
};

app.updateJSON = function() {
	// formatting for basic information
	for (let item in app.resume.basics) {
		if (item != "profiles" && item != "location") {
			app.resume.basics[item] = $(`.basics #${item}`).val();
		} else if (item == "location") {
			for (let locationItem in item) {
				app.resume.basics[item][locationItem] = $(`.basics #${locationItem}`).val();
			}
		} else {
			for (let profileItem in app.resume.basics[item][0]) {
				app.resume.basics[item][0][profileItem] = $(`.basics #${profileItem}`).val();
			}
		}
	}

	// formatting for work information
	for (let i = 0; i < app.resume.work.length; i++) {
		for (let item in app.resume.work[i]) {
			app.resume.work[i][item] = $(`.work${i} input[name='${item}']`).val();
		}
	}
// pick up here later
	console.log(app.resume.work);
};

app.init = function() {
	$(`form`).on("submit", function(e) {
		e.preventDefault();
		app.updateJSON();
	});

	$(".moreWork").on("click", function() {
		app.moreWork();
	});
};

$(function() {
	app.init();
});
