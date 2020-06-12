import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss']
})
export class DialogRegisterComponent implements OnInit {

  public registerTeamsFormGroup: FormGroup;
  public input: Array<string> = [];
  public output: Array<string> = [];

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createForm();
    this.displayRegisteredTeams();
  }

  createForm(): FormGroup {
    return this.registerTeamsFormGroup = this.formBuilder.group({
      teamName: [null, Validators.required]
    });
  }

  addTeams() {
    this.input.push(this.registerTeamsFormGroup.get('teamName').value);

    localStorage.setItem('Times', JSON.stringify(this.input));
    this.output = this.input;

    this.registerTeamsFormGroup.get('teamName').reset();
  }

  displayRegisteredTeams(): void {
    this.output = JSON.parse(localStorage.getItem('Times'));
  }

  clearTeams() {
    localStorage.removeItem('Times');
    this.output = [];
  }

  closeDialog() {
    this.clearTeams();
  }
}