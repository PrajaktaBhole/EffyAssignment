import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UiServicesService } from '../../services/ui-services.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private uiService: UiServicesService,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.populateUserForm();
  }

  // dataItems: any = [
  //   {
  //     firstName: 'Saurabh',
  //     lastName: 'Mangalekar',
  //     email: 'bhole.prajakta@yahoo.com',
  //     designation: 'CEO',
  //     active: true,
  //   },
  // ];

  // showUserValue() {
  //   // this.userService.userInfo;
  //   // console.log('ShowU serValue function', this.
  // }

  updateUserForm = new FormGroup({
    // userId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    designation: new FormControl(''),
    dateOfBirth: new FormControl(''),
    active: new FormControl(''),
  });

  populateUserForm() {
    console.log('userObject is', this.uiService.userObject);
    this.updateUserForm.patchValue({
      firstName: this.uiService.userObject.firstName,
      lastName: this.uiService.userObject.lastName,
      email: this.uiService.userObject.email,
      designation: this.uiService.userObject.designation,
      dateOfBirth: this.uiService.userObject.dateOfBirth,
      active: this.uiService.userObject.active,
    });
  }

  updateUser() {
    console.log('Reached updateUser function', this.updateUserForm.value);
    this.uiService
      .updateUser(this.uiService.userObject._id, this.updateUserForm.value)
      .subscribe((res) => {
        console.log(res);
      });
    this.router.navigateByUrl('');
  }
}
