import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UiServicesService {
  pi = 3.147;
  userObject: any;
  companyObject: any;

  constructor(private http: HttpClient) {}

  fetchUsers() {
    console.log('FetchUsers function');
    return this.http.get('http://localhost:3000/api/get/Users');
  }

  fetchCompanies() {
    console.log('FetchCompanies function');
    return this.http.get('http://localhost:3000/api/get/Companies');
  }

  postUser(userDto: any) {
    console.log(userDto);
    return this.http.post('http://localhost:3000/api/post/User', userDto);
  }

  postCompany(userDto: any) {
    console.log(userDto);
    return this.http.post('http://localhost:3000/api/post/Company', userDto);
  }

  updateUser(userId: any, userDto: any) {
    console.log('Update user funcion');
    return this.http.patch(
      'http://localhost:3000/api/update/User/' + userId,
      userDto
    );
  }

  updateCompany(companyId: any, userDto: any) {
    console.log('Update company funcion');
    return this.http.patch(
      'http://localhost:3000/api/update/Company/' + companyId,
      userDto
    );
  }

  // localhost:3000/api/delete/User/63711fb1f9a9aaf688216163
  deleteUser(userId: any) {
    console.log('Delete user funcion');
    return this.http.delete('http://localhost:3000/api/delete/User/' + userId);
  }

  deleteCompany(userId: any) {
    console.log('Delete user funcion');
    return this.http.delete(
      'http://localhost:3000/api/delete/Company/' + userId
    );
  }

  getUser(user: any) {
    console.log('User in get user', user);
    this.userObject = user;
  }

  getCompany(company: any) {
    console.log('Company in get company', company);
    this.companyObject = company;
  }
}
