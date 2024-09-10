import { Component } from '@angular/core';

export interface NavigationItem{
  value:string;
  link:string;
}

@Component({
  selector: 'app-page-sidenav',
  templateUrl: './page-sidenav.component.html',
  styleUrl: './page-sidenav.component.scss'
})
export class PageSidenavComponent {
  panelName:string='Student Panel';
  navItems:NavigationItem[]=[];

  constructor(){
    this.navItems=[
      {value:'View Books',link:'view-books'},
      {value:'My Orders',link:'my-orders'},

    ]
  }
}
