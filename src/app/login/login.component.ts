import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  val!: any;

  constructor() { }

  ngOnInit(): void {
  }

  handle(e: any) {
    this.val = e;
  }
}
