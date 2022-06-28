import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersSubscription = new Subscription();
  isLoading = false;
  users!: User[];
  selectedUser!: User;

  startPoint = 0;
  endPoint!: number;
  
    items: MenuItem[] = [
      {
        label: 'View Details', icon: 'pi pi-fw pi-eye',
        command(event?) {
          console.log(event);
        },
      },
      { label: 'Blacklist User', icon: 'pi pi-fw pi-user-minus' },
      { label: 'Activate User', icon: 'pi pi-fw pi-user-plus' },
    ];

  constructor(private router: Router,
    private usersSerrvice: UsersService,
  ) { }

  ngOnInit(): void {
    this.isLoading = this.users ? false : true;

    this.usersSubscription = this.usersSerrvice.usersSubject.subscribe(users => {
      this.users = users;
      this.endPoint = this.users.length;
      this.isLoading = false;
    });

    this.usersSerrvice.fetchUsers();
  }

  onHideDropdown(user: User, menu: Menu) {
    this.selectedUser = user;
    console.log(menu);
    console.log(user);
  }

  gotoUserDetails(user: User) {
    this.router.navigateByUrl(`/app/customers/users/${user.id}`);
  }

}
