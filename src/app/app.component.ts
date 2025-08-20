import { Component, KeyValueDiffers } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import Validation from './utils/validation';

//Create a reactive form call userForm
//The form must have an optional field of username but cannot be longer than 5 characters
//The form must have a required field that is an email must be an email
//The form must have a required field that is a checkbox for acceptTerms
//The form must have a Register button that is a submit. In the submit, write to the console if the form is valid or not

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  submitted = false;

  constructor(private _fb: FormBuilder) {
    //_fb.group('register-form');
    this.form = this._fb.group({
      username: ['', [Validators.maxLength(5)]],
      emailFields: ['', [Validators.required, Validators.email]],
      terms: [true, [Validators.requiredTrue]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.form.valid
      ? console.log('Form are valid')
      : console.log('Form Not Valid');
  }
}
