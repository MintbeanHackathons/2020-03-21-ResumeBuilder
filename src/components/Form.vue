<template lang="pug">
  div
    b-form(v-on:submit.prevent="onSubmit" @submit="onSubmit" @reset="onReset" v-if="showForm")
      b-form-group(
        id="input-group-basics"
        label="Basics:")
        b-form-input(
          v-model="form.basics.name"
          type="text"
          placeholder="Enter full name")
        b-form-input(
          v-model="form.basics.label"
          type="text"
          placeholder="Enter label")
        b-form-input(
          v-model="form.basics.picture"
          type="url"
          placeholder="Url of picture")
        b-form-input(
          v-model="form.basics.email"
          type="email"
          placeholder="Enter email")
        b-form-input(
          v-model="form.basics.phone"
          type="text"
          placeholder="Enter phone number")
        b-form-input(
          v-model="form.basics.website"
          type="url"
          placeholder="Url of website")
        b-form-textarea(
          v-model="form.basics.summary"
          placeholder="Enter summary..."
          rows="3")
        b-form-group(
          id="input-group-location"
          label="Location:")
          b-form-input(
            v-model="form.basics.location.address"
            type="text"
            placeholder="Enter address")
          b-form-input(
            v-model="form.basics.location.postalCode"
            type="text"
            placeholder="Enter postal code")
          b-form-input(
            v-model="form.basics.location.city"
            type="text"
            placeholder="Enter city")
          b-form-input(
            v-model="form.basics.location.countryCode"
            type="text"
            placeholder="Enter countryCode")
          b-form-input(
            v-model="form.basics.location.region"
            type="text"
            placeholder="Enter region")
        b-form-group(
          id="input-group-profiles"
          label="Profiles:")
          .row(
            v-for="(profile, index) in form.basics.profiles"
            :key="profile.url")
            b-form-input(
              v-model="profile.network"
              type="text"  
              placeholder="Enter network")
            b-form-input(
              v-model="profile.username"
              type="text"  
              placeholder="Enter username")
            b-form-input(
              v-model="profile.url"
              type="text"  
              placeholder="Enter url")
            button(@click="removeProfile(index)") Remove Profile
          .row
            button(@click="addProfile") Add Profile
        b-form-group(
          id="input-group-work"
          label="Work:")
          .row(
            v-for="(work, iWork) in form.work")
            b-form-input(
              v-model="work.company"
              type="text"  
              placeholder="Enter company")
            b-form-input(
              v-model="work.position"
              type="text"  
              placeholder="Enter position")
            b-form-input(
              v-model="work.website"
              type="text"  
              placeholder="Enter website")
            b-form-input(
              v-model="work.startDate"
              type="text"  
              placeholder="Enter start date")
            b-form-input(
              v-model="work.endDate"
              type="text"  
              placeholder="Enter end date")
            b-form-input(
              v-model="work.summary"
              type="text"  
              placeholder="Enter summary")

            b-form-group(
              id="input-group-work"
              label="Highlights:")
              .row(
                v-for="(highlight, index) in work.highlights")
                b-form-input(
                  v-model="work.highlights[index]"
                  type="text"  
                  placeholder="Enter highlight")
                button(@click="removeHighlight(index)") Remove Highlight
              .row
                button(@click="addHighlight(iWork)") Add Highlight

            button(@click="removeWork(index)") Remove Work
          .row
            button(@click="addWork") Add Work
      
      b-button(type="submit" variant="primary") Submit
      b-button(type="reset" variant="danger") Reset
    div(v-else)
      | {{json}}
      .row
        button(@click="showForm = !showForm") Show Form
</template>
<script>
export default {
  data() {
    return {
      showForm: true,
      form: {
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
            },
            {
              network: "Facebook",
              username: "john",
              url: "http://facebook.com/john"
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
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.showForm = false;
    },
    onReset() {},
    addProfile(evt) {
      evt.preventDefault();
      this.form.basics.profiles.push({ network: "", username: "", url: "" });
    },
    removeProfile(index) {
      this.form.basics.profiles.splice(index, 1);
    },
    addWork(evt) {
      evt.preventDefault();
      this.form.work.push({
        company: "",
        position: "",
        website: "",
        startDate: "",
        endDate: "",
        summary: ""
      });
    },
    removeWork(index) {
      this.form.work.splice(index, 1);
    },
    addHighlight(index) {
      //Stopped working here
      this.form.work[index].highlights.push();
    },
    removeHighlight(index) {
      this.form.work.highlights.splice(index, 1);
    }
  },
  computed: {
    json() {
      return JSON.stringify(this.form);
    }
  }
};
</script>
