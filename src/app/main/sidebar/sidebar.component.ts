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
          icon: 'pi pi-desktop',
        },
      ],
    },
    {
      header: 'CUSTOMERS',
      children: [
        {
          title: 'Users',
          icon: 'pi pi-user',
        },
        {
          title: 'Guarantors',
          icon: 'pi pi-user-plus',
        },
        {
          title: 'Loans',
          icon: 'pi pi-credit-card',
        },
        {
          title: 'Decision Models',
          icon: 'pi pi-info',
        },
        {
          title: 'Savings',
          icon: 'pi pi-money-bill',
        },
        {
          title: 'Loan Requests',
          icon: 'pi pi-wallet',
        },
        {
          title: 'Whitelist',
          icon: 'pi pi-file',
        },
        {
          title: 'Karma',
          icon: 'pi pi-history',
        },
      ],
    },
    {
      header: 'BUSINESSES',
      children: [
        {
          title: 'Organization',
          icon: 'pi pi-sitemap',
        },
        {
          title: 'Loan Products',
          icon: 'pi pi-stop',
        },
        {
          title: 'Savings Products',
          icon: 'pi pi-thumbs-up',
        },
        {
          title: 'Fees and Charges',
          icon: 'pi pi-percentage',
        },
        {
          title: 'Transactions',
          icon: 'pi pi-list',
        },
        {
          title: 'Services',
          icon: 'pi pi-exclamation-triangle',
        },
        {
          title: 'Service Account',
          icon: 'pi pi-database',
        },
        {
          title: 'Settlements',
          icon: 'pi pi-check',
        },
        {
          title: 'Reports',
          icon: 'pi pi-book',
        },
      ],
    },
    {
      header: 'SETTINGS',
      children: [
        {
          title: 'Preferences',
          icon: 'pi pi-cog',
        },
        {
          title: 'Fees and Pricing',
          icon: 'pi pi-dollar',
        },
        {
          title: 'Audit Logs',
          icon: 'pi pi-file-excel',
        },
      ],
    },
  ];

  ngOnInit(): void {
  }

}
