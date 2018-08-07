import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  name = 'Angular 4';
  // tslint:disable-next-line:no-inferrable-types
  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor() { }
  // tslint:disable-next-line:no-inferrable-types

  ngOnInit() {
  }

}
