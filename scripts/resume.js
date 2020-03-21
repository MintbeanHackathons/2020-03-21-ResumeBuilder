const resume = {
  basics: {
    profiles: []
  },

  // Add Basic Contact Information
  addBasics: function(basicsObj) {
    // save the previous profiles, so it does't overwrite
    const profiles = this.basics.profiles;
    // merge the passed basic info object with the profiles
    this.basics = { ...basicsObj, profiles };
  },

  // Add Basic Social Networking Information
  addBasicsProfiles: function(profileObj) {
    this.basics.profiles.push(profileObj);
  }
};

$(function() {
  // Add social media information
  $("#add-profile").on("click", function(e) {
    resume.addBasicsProfiles({
      network: $("#basics-profiles-network").val(),
      username: $("#basics-profiles-user").val(),
      url: $("#basics-profiles-url").val()
    });
  });

  // Main resume form
  $("#resume-form").on("submit", function(e) {
    e.preventDefault();

    // Add the basic name, label
    resume.addBasics({
      name: $("#basics-name").val(),
      label: $("#basics-label").val()
    });

    // turn it into a JSON object
    let resumeJSON = JSON.stringify(resume);
    console.log(resumeJSON);
  });
});
