import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private location: Location, private usersService: UsersService) { }
  user!: User;
  isLoading = true;
  val = 1;

  ngOnInit(): void {
    this.isLoading = true;

    this.usersService.fetchSingleUser('75').subscribe(user => {
      this.user = user;
      this.isLoading = false;
    });
  }

  updateMonthlyIncome(monthlyIncome: string[] | null | undefined): string {
    return monthlyIncome ? `₦${monthlyIncome[0]} - ₦${monthlyIncome[monthlyIncome.length - 1]}` : 'N/A'
  }

  back(): void {
    this.location.back()
  }
}
