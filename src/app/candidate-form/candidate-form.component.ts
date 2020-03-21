import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.model);
  }

  educationLevel = ['High School', 'College/University', 'Other',];
  model = new Candidate('name', 'label' ,'email', 'phone', 'website', 'github', 'twitter', this.educationLevel[0], 'schoolName');
  submitted = false;

  onSubmit() {
    console.log("Building JSON:");
    console.log(this.model); //Incomplete JSON Resume Object.
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
