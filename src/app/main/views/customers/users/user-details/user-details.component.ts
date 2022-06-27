import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  val = 1;

  ngOnInit(): void {
  }

  back(): void {
    this.location.back()
  }
}
