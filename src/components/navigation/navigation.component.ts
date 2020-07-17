import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show: boolean = false;

  showMenu() {
    const body = document.getElementsByTagName('body')[0];
    this.show = !this.show;

    if(this.show) {
      body.classList.add('menu-open');
    } else {
      body.classList.remove('menu-open');
    }
  }

}
