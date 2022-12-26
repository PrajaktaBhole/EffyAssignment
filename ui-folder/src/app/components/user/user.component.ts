import { Component, OnInit, Output } from '@angular/core';
// import {
//   HttpClient,
//   HttpHeaders,
//   HttpClientModule,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { UiServicesService } from '../../services/ui-services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userList: any;

  constructor(private uiService: UiServicesService) {}

  ngOnInit(): void {
    this.getUsers(); //whenever page loads all data will be displayed
  }

  // firstName = 'Prajakta';

  userInfo(user: any) {
    console.log('User is', user);
    this.uiService.getUser(user);
  }

  getUsers() {
    this.uiService.fetchUsers().subscribe((res) => {
      console.log(res);
      this.userList = res;
    });
  }

  deleteUser(user: any) {
    console.log(user);
    this.uiService.deleteUser(user).subscribe(
      (res: any) => {
        console.log(res);
        this.userList = [];
        this.getUsers();
      },
      (error) => {
        console.log(error);
        this.userList = [];
        this.getUsers();
      }
    );
  }

  //search
  searchText = '';

  // @Output()
  // se;

  onSearchTextEntered(searchedValue: string) {
    this.searchText = searchedValue;
    console.log(this.searchText);
  }
}
