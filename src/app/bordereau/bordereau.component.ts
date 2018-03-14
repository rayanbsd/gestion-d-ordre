import { Component, OnInit } from '@angular/core';
import {test} from './test';
import { EL } from './EL';
import { MN } from './MN';
@Component({
  selector: 'app-bordereau',
  templateUrl: './bordereau.component.html',
  styleUrls: ['./bordereau.component.css']
})
export class BordereauComponent implements OnInit {
  ////////////////////////////////////////////////////////DIALOGEL////////////////////////////////////////
  table=true;
  advancedsearch=false;
  j:number;
  display: boolean = false;
  displayoperationtype:boolean=false;
  tableoperation=true;
  advancedsearchoperation=false;
  operationtypes:EL[];
  operationtypessearch:EL= {"externalcode":"","label":""};
  originaloperation:EL[][]= [[{"externalcode":"teste1","label":"test2"},{"externalcode":"xyz","label":"aze"}],
  [{"externalcode":"kais","label":"test2"},{"externalcode":"xyz","label":"aze"}],
  [{"externalcode":"rayan","label":"test2"},{"externalcode":"xyz","label":"aze"}],
  [{"externalcode":"yassine","label":"test2"},{"externalcode":"xyz","label":"aze"}]
];
  selectedoperation:EL;
  operation:EL[]=[{"externalcode":"","label":""},{"externalcode":"","label":""},{"externalcode":"","label":""},{"externalcode":"","label":""}];
  constructor() { }
  showdialog(i:number){
    this.j=i;
    this.displayoperationtype=true;
    this.operationtypes=this.originaloperation[this.j];
  }
  valideroperation(){
    this.operation[this.j].externalcode=this.selectedoperation.externalcode;
    this.operation[this.j].label=this.selectedoperation.label;
    this.displayoperationtype=false;
  }
  hidedialog(){
    this.displayoperationtype=false;
  }
  recherchavanceroperation(){
    this.advancedsearchoperation=!this.advancedsearchoperation;
    this.tableoperation=false;

  }
  resultatoperation(){
    this.tableoperation=!this.tableoperation;
    this.advancedsearchoperation=false;
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
  ////////////////////////////////////////////////////////////DIALOGMN////////////////////////////////////////
 
  

  k:number;
  displayelement:boolean=false;
  tableelement=true;
  advancedsearchelement=false;
  elementtypes:MN[];
  elementtypesearch:MN= {"mnemonic":"","name":""};
  originalelement:MN[][]= [[{"mnemonic":"Ahmed","name":"test2"},{"mnemonic":"youssef","name":"aze"}],
  [{"mnemonic":"amine","name":"test2"},{"mnemonic":"yassine","name":"aze"}],
  [{"mnemonic":"rezgi","name":"test2"},{"mnemonic":"ala","name":"aze"}],
];
  selectedelement:MN;
  element:MN[]=[{"mnemonic":"","name":""},{"mnemonic":"","name":""},{"mnemonic":"","name":""}];

  showdialog2(i:number){
    this.k=i;
    this.displayelement=true;
    this.elementtypes=this.originalelement[this.k];
  }
  validerelement(){
    this.element[this.k].mnemonic=this.selectedelement.mnemonic;
    this.element[this.k].name=this.selectedelement.name;
    this.displayelement=false;
  }
  hidedialog2(){
    this.displayelement=false;
  }
  recherchavancerelement(){
    this.advancedsearchelement=!this.advancedsearchelement;
    this.tableelement=false;

  }
  resultatelement(){
    this.tableelement=!this.tableelement;
    this.advancedsearchelement=false;
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
  


  ngOnInit() {
  }

}
