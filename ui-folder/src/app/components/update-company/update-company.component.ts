import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UiServicesService } from '../../services/ui-services.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css'],
})
export class UpdateCompanyComponent implements OnInit {
  constructor(
    private uiService: UiServicesService,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.populateCompanyForm();
  }

  updateCompanyForm = new FormGroup({
    companyName: new FormControl(''),
    companyAddress: new FormControl(''),
  });

  populateCompanyForm() {
    console.log('companyObject is', this.uiService.pi);
    console.log('companyObject is', this.uiService.companyObject);
    this.updateCompanyForm.patchValue({
      companyName: this.uiService.companyObject.companyName,
      companyAddress: this.uiService.companyObject.companyAddress,
    });
  }

  updateCompany() {
    console.log(
      'Reached update company function',
      this.updateCompanyForm.value
    );
    this.uiService
      .updateCompany(
        this.uiService.companyObject._id,
        this.updateCompanyForm.value
      )
      .subscribe((res) => {
        console.log(res);
      });
    // this.router.navigateByUrl('/companies');
  }
}
