import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UserDetailsComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    CustomersComponent,
    UsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomersModule { }
