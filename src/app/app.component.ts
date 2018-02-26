import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  popup= false;
  c1 = true;
  c2 = false;
  c3 = false;
  c4 = false ;
  click1() {
    this.c1 = !this.c1;
    this.c2 = false;
    this.c3 = false;
    this.c4 = false;
  }
  click2() {
    this.c1 = false;
    this.c2 = !this.c2;
    this.c3 = false;
    this.c4 = false;
  }
  click3() {
    this.c1 = false;
    this.c2 = false;
    this.c3 = !this.c3;
    this.c4 = false;
  }
  click4() {
    this.c1 = false;
    this.c2 = false;
    this.c3 = false;
    this.c4 = !this.c4;  }
getpopup() {
this.popup = true;
}
}
