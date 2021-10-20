import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  href!: string;
  sections: any[] = [
    {
      'id':'#home',
      'name':'Home'
    },
    {
      'id':'#about',
      'name':'About'
    },
    {
      'id':'#skills',
      'name':'Skills'
    },
    {
      'id':'#works',
      'name':'Works'
    },
    {
      'id':'#contact',
      'name':'Contact'
    }
  ];
  constructor(){}
  ngOnInit() :void{}
}
