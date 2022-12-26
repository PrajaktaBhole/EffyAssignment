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
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
})
export class AddCompanyComponent implements OnInit {
  constructor(
    private uiService: UiServicesService,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  form = new FormGroup({
    companyName: new FormControl(''),
    companyAddress: new FormControl(''),
  });

  addCompany() {
    console.log('Add company called');
    console.log('Company form is', this.form.value);

    // POST api call
    this.uiService.postCompany(this.form.value).subscribe((res) => {
      console.log('POST api response', res);
      this.router.navigateByUrl('/companies');
    });
  }
}
