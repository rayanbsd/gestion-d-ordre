import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-libre',
  templateUrl: './zone-libre.component.html',
  styleUrls: ['./zone-libre.component.css']
})
export class ZoneLibreComponent implements OnInit {

  constructor() { }

 

    display: boolean = false;

    showDialog() {
        this.display = true;
    }



  ngOnInit() {
  }

}
