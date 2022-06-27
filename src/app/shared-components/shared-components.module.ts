import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [
  ],
  exports: [
    AvatarModule,
    MenuModule,
    SidebarModule,
    PaginatorModule,
    RatingModule,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    AvatarModule,
    MenuModule,
    SidebarModule,
    PaginatorModule,
    RatingModule,
  ]
})
export class SharedComponentsModule { }
