import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-newtitle',
  templateUrl: './newtitle.component.html',
  styleUrls: ['./newtitle.component.css']
})
export class NewtitleComponent implements OnInit {
  c1 = true;
  c2 = false;
  click1() {
    this.c1 = !this.c1;
    this.c2 = false;

  }
  click2() {
    this.c1 = false;
    this.c2 = !this.c2;

  }
  constructor() { }

  ngOnInit() {
  }

}
