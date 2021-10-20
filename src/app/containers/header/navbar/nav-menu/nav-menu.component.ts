import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
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
  @Input()
  @HostBinding('class.menu-open')
  isOpen: boolean = false;
  @Output()
  menuToggleEmmitter:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(){}
  ngOnInit() :void{}
  onNavLinkClicked($event: MouseEvent){
    this.isOpen = false;
    this.menuToggleEmmitter.emit
    (this.isOpen);
  }
}
