import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  items: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-fw pi-user', },
    { label: 'Sign Out', icon: 'pi pi-fw pi-sign-out' },
  ];

  gotoUserDetails() {
    this.router.navigateByUrl('/app/customers/users/001');
  }

}
