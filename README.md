# ng-reactive-form-approach
angular reactive form demo

# Description 
//Create a reactive form call userForm
//The form must have an optional field of username but cannot be longer than 5 characters
//The form must have a required field that is an email must be an email
//The form must have a required field that is a checkbox for acceptTerms
//The form must have a Register button that is a submit. In the submit, write to the console if the form is valid or not


# What to import
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import Validation from './utils/validation';

# Constructor call
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

# Submit Button Call

onSubmit(): void {
    this.form.valid
      ? console.log('Form are valid')
      : console.log('Form Not Valid');
  }

  # form html tag
  <form class="register-form" [formGroup]="form" (ngSubmit)="onSubmit()">

  # email validation 
  <div class="row mb-3">
        <label>Email *</label>
        <input
          type="email"
          formControlName="emailFields"
          id="email"
          class="form-control"
          required
        />
        <p
          style="color:red"
          *ngIf="
            form?.get('emailFields')?.invalid &&
            form?.get('emailFields')?.touched
          "
        >
          <span *ngIf="form?.get('emailFields')?.errors?.['email']">
            Please enter Valid formate
          </span>
          <span *ngIf="form?.get('emailFields')?.errors?.['required']">
            Email Filed is required
          </span>
        </p>
      </div>

# Submit button enable/disable as form is valid
<div class="row mb-3">
        <button
          [disabled]="form.invalid"
          type="submit"
          class="btn btn-primary float-end"
        >
          Register
        </button>
      </div>


