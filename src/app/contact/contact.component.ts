import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validators/phone-validator';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  countries = ['', 'USA', 'Germany', 'Italy', 'France'];
  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, phoneNumberValidator]),
      country: new FormControl('', [Validators.required]),
    });
  }

  revert() {
    this.contactForm.reset();
  }

  onSubmit() {
    // ...
  }

  // easy access to each control to check their status
  get mobile() {
    return this.contactForm.get('mobile');
  }

  get email() {
    return this.contactForm.get('email');
  }
}
