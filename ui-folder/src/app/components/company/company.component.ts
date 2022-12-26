import { Component, OnInit } from '@angular/core';
import { UiServicesService } from 'src/app/services/ui-services.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  companyList: any;

  constructor(private uiService: UiServicesService) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  companyInfo(company: any) {
    console.log('company is$$$$$$$$$$', company);
    this.uiService.getCompany(company);
  }

  getCompanies() {
    this.uiService.fetchCompanies().subscribe((res) => {
      console.log(res);
      this.companyList = res;
    });
  }

  deleteCompany(company: any) {
    console.log(company);
    this.uiService.deleteCompany(company).subscribe(
      (res: any) => {
        console.log(res);
        this.companyList = [];
        this.getCompanies();
      },
      (error) => {
        console.log(error);
        this.companyList = [];
        this.getCompanies();
      }
    );
  }
}
