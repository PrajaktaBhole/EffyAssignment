import { Component, OnInit } from '@angular/core';
import { UiServicesService } from '../../services/ui-services.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  // userWrapper: any = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   designation: '',
  //   dateOfBirth: '',
  //   active: true,
  // };
  // userForm: any;

  // reactive-form
  form = new FormGroup({
    // userId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    designation: new FormControl(''),
    dateOfBirth: new FormControl(''),
    active: new FormControl(true),
  });
  userDto: any;

  constructor(
    private uiService: UiServicesService,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  addUser() {
    console.log('Add user called');
    // this.userWrapper.firstName = 'Vaish';
    // this.userWrapper.lastName = 'Bhole';
    // this.userWrapper.email = 'appu.bhole@gmail.com';
    // this.userWrapper.designation = 'CTO';
    // this.userWrapper.dateOfBirth = '16-10-2008';
    // console.log(this.userWrapper);

    console.log('UserForm is', this.form.value);

    // POST api call
    // this.uiService.postUser(this.userWrapper).subscribe((res) => {
    this.uiService.postUser(this.form.value).subscribe((res) => {
      console.log('POST api resp', res);
      this.router.navigateByUrl('');
    });
  }
}
