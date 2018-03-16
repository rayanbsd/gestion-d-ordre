import { Component, OnInit,HostListener } from '@angular/core';
import {EL} from './../note/EL';
import { element } from 'protractor';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NewOrderComponent implements OnInit {
  exclamation=false;
  j: number;
  displayoperationtype = false;
  tableoperation = true;
  operationtypes: EL[];
  operationtypessearch: EL = {'externalcode': '', 'label': ''};
  originaloperation: EL[][] = [[{'externalcode': 'investisseur', 'label': 'b1'}, { 'externalcode': 'acheteur', 'label': 'b2'}],
 
];
  selectedoperation: EL;
  operation: EL[] = [{'externalcode' : '' , 'label': ''}];

constructor(){       
}
  ngOnInit() {
  }   
    showdialog(i: number) {
      this.j = i;
      this.displayoperationtype = true;
      this.operationtypes = this.originaloperation[this.j];
    }
    validateoperation() {
      this.operation[this.j].externalcode = this.selectedoperation.externalcode;
      this.operation[this.j].label = this.selectedoperation.label;
      this.displayoperationtype = false;
    }
    hidedialog() {
      this.displayoperationtype = false;
    }
    operationAdvancedSearch() {
      this.tableoperation = false;
  
    }
    resultatoperation() {
      this.tableoperation = !this.tableoperation;
      this.operationtypes = this.originaloperation[this.j].slice(0);
      let i: number;
      i = 0;
      while (i < this.operationtypes.length) {
      loop :
      for (const prop in this.operationtypes[i]) {
        if (this.operationtypes[i][prop].search(this.operationtypessearch[prop]) === -1 && this.operationtypessearch[prop] !== '') {
          const index = this.operationtypes.indexOf(this.operationtypes[i]);
          this.operationtypes.splice(index, 1);
          i--;
          break loop ;
        }
      }
      i++;
      }
    }
    @HostListener('document:keypress  ', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      if (this.displayoperationtype) {
        if (!this.tableoperation) {
          this.resultatoperation ();
        } else if (this.selectedoperation != null) {
          this.validateoperation();
        }
      }}

}

