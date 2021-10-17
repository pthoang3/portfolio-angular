import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showToggle = false;
  bigScreen = false;
  currentColor!: string;
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
