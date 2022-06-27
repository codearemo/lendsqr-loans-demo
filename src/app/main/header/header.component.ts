import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  
  visibleSidebar1: boolean = false;
  items: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-fw pi-user', },
    { label: 'Sign Out', icon: 'pi pi-fw pi-sign-out' },
  ];

  ngOnInit() { }

}
