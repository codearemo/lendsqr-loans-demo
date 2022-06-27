import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customers'
      },
      {
        path: 'customers',
        loadChildren: () => import('./views/customers/customers.module').then((m) => m.CustomersModule),
      }
    ],
  }
];

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class MainModule { }
