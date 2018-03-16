import { element } from 'protractor';
import { Component, OnInit , HostListener} from '@angular/core';
import { EL } from './EL';
import { MN } from './MN';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  //////////////////////////////////////////////////////// DIALOGEL
    j: number;
    displayoperationtype = false;
    tableoperation = true;
    operationtypes: EL[];
    operationtypessearch: EL = {'externalcode': '', 'label': ''};
    originaloperation: EL[][] = [[{'externalcode': 'teste1', 'label': 'test2'}, { 'externalcode': 'xyz', 'label': 'aze'}],
    [{'externalcode': 'kais', 'label': 'test2'}, { 'externalcode': 'xyz', 'label': 'aze'}],
    [{'externalcode': 'rayan', 'label': 'test2'}, { 'externalcode': 'xyz', 'label': 'aze'}],
    [{'externalcode': 'yassine', 'label': 'test2'}, { 'externalcode': 'xyz', 'label': 'aze'}]
  ];
    selectedoperation: EL;
    operation: EL[] = [{'externalcode' : '' , 'label': ''}, {'externalcode' : '', 'label': ''}, {'externalcode' : '', 'label': ''},
    {'externalcode' : '' , 'label' : ''}];
    exclamation: boolean[] = [false, false, false, false];
    //////////////////////////////////////////////////////////// DIALOGMN
    k: number;
    displayelement = false;
    tableelement = true;
    elementtypes: MN[];
    elementtypesearch: MN = {'mnemonic' : '', 'name': ''};
    originalelement: MN[][] = [[{'mnemonic': 'Ahmed', 'name': 'test2'}, { 'mnemonic': 'youssef', 'name' : 'aze' }],
    [{'mnemonic': 'Youssef', 'name': 'test2'}, { 'mnemonic': 'youssef', 'name' : 'aze' }],
    [{'mnemonic': 'Rezgui', 'name': 'test2'}, { 'mnemonic': 'youssef', 'name' : 'aze' }]
  ];
    selectedelement: MN;
    element: MN[] = [{'mnemonic': '', 'name' : ''}, { 'mnemonic': '', 'name': ''}, {'mnemonic': '', 'name': ''}];
    exclamation2: boolean[] = [false, false, false];
  constructor() { }
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


  showdialog2(i: number) {
    this.k = i;
    this.displayelement = true;
    this.elementtypes = this.originalelement[this.k];
  }
  validateelement() {
    this.element[this.k].mnemonic = this.selectedelement.mnemonic;
    this.element[this.k].name = this.selectedelement.name;
    this.displayelement = false;
  }
  hidedialog2() {
    this.displayelement = false;
  }
  elementAdvancedSearch() {
    this.tableelement = false;

  }
  resultatelement() {
    this.tableelement = !this.tableelement;
    this.elementtypes = this.originalelement[this.k].slice(0);
    let i: number;
    i = 0;
    while (i < this.elementtypes.length) {
    loop :
    for (const prop in this.elementtypes[i]) {
      if (this.elementtypes[i][prop].search(this.elementtypesearch[prop]) === -1 && this.elementtypesearch[prop] !== '') {
        const index = this.elementtypes.indexOf(this.elementtypes[i]);
        this.elementtypes.splice(index, 1);
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
      }
      if (this.displayelement) {
        if (!this.tableelement) {
          this.resultatelement ();
        } else if (this.selectedelement != null) {
          this.validateelement();
        }
      }
    }
}
wrong(i: number) {
  alert (this.operation[i].label);
}
wrong2(i: number) {
  if (this.originalelement[i].find(x => x.mnemonic === this.element[i].mnemonic && x.name === this.element[i].name) == null
  && this.element[i].mnemonic !== '' && this.element[i].name !== '' ) {
    this.exclamation2[i] = true;
  } else {
   this.exclamation2[i] = false;
  }
}
}
