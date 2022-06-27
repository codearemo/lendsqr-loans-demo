import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  navItems: {
    header?: string,
    children?: {
      title: string,
      icon: string,
    }[]
  }[] = [
    {
      children: [
        {
          title: 'Dashboard',
          icon: '',
        },
      ],
    },
    {
      header: 'CUSTOMERS',
      children: [
        {
          title: 'Users',
          icon: '',
        },
        {
          title: 'Guarantors',
          icon: '',
        },
        {
          title: 'Loans',
          icon: '',
        },
        {
          title: 'Decision Models',
          icon: '',
        },
        {
          title: 'Savings',
          icon: '',
        },
        {
          title: 'Loan Requests',
          icon: '',
        },
        {
          title: 'Whitelist',
          icon: '',
        },
        {
          title: 'Karma',
          icon: '',
        },
      ],
    },
    {
      header: 'BUSINESSES',
      children: [
        {
          title: 'Organization',
          icon: '',
        },
        {
          title: 'Loan Products',
          icon: '',
        },
        {
          title: 'Savings Products',
          icon: '',
        },
        {
          title: 'Fees and Charges',
          icon: '',
        },
        {
          title: 'Transactions',
          icon: '',
        },
        {
          title: 'Services',
          icon: '',
        },
        {
          title: 'Service Account',
          icon: '',
        },
        {
          title: 'Settlements',
          icon: '',
        },
        {
          title: 'Reports',
          icon: '',
        },
      ],
    },
    {
      header: 'SETTINGS',
      children: [
        {
          title: 'Preferences',
          icon: '',
        },
        {
          title: 'Fees and Pricing',
          icon: '',
        },
        {
          title: 'Audit Logs',
          icon: '',
        },
      ],
    },
  ];

  ngOnInit(): void {
  }

}
