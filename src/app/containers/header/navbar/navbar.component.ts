import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showToggle = false;
  bigScreen = false;
  currentColor!: string;
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
  ngOnInit(): void {
    this.bigScreen = window.innerWidth > 750;
    window.addEventListener("resize", event => {
      this.bigScreen = window.innerWidth > 750;
    });

  }
  onToggle() {
    this.showToggle = !this.showToggle;
  }

}
