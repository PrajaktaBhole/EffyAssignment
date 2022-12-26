import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { CompanyComponent } from './components/company/company.component';
import { UserComponent } from './components/user/user.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'companies',
    component: CompanyComponent,
  },
  {
    path: 'add-company',
    component: AddCompanyComponent,
  },
  {
    path: 'update-user',
    component: UpdateUserComponent,
  },
  {
    path: 'update-company',
    component: UpdateCompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
