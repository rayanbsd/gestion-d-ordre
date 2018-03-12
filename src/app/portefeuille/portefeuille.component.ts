import { Component, OnInit } from '@angular/core';
import { Portfeuille } from './portefeuille';
import { Portfeuilleafter } from './portfeuilleafter';
import { ViewEncapsulation } from '@angular/core';
import {DataTableModule, SharedModule, ButtonModule, DialogModule, GrowlModule, TabViewModule, AccordionModule, DropdownModule,
  SliderModule, SpinnerModule, SlideMenuModule, ListboxModule, ChartModule, FieldsetModule} from 'primeng/primeng';
@Component({
  selector: 'app-portefeuille',
  templateUrl: './portefeuille.component.html',
  styleUrls: ['./portefeuille.component.css'],
  encapsulation : ViewEncapsulation.None

})
export class PortefeuilleComponent implements OnInit {
  dialog: boolean;
  table: boolean;
  advanced = false;
  tmpPortfolio: Portfeuille ;
  portfolioSearch: Portfeuille = {'account_class' : '' , 'entity' : '' , 'account_number' : '' , 'account_label' : ''};
  newElement: Portfeuilleafter = { 'avaiable_quantity_without_blocked': '', 'blocked_quantity': '', 'currency': '',
   'brokerage' : '', 'pourcentage_brokerage': '', 'held_quantity': 0 , 'quantity' : '', 'portfolio_number' : '',
   'portfolio_label': '' , 'clean_value' : '' , 'mirror_account' : '' , 'bank_account' : ''};
  tmpPortfolioafter: Portfeuilleafter[];
  originalportfolio: Portfeuille[] = [
  {'account_class' : 'portfolio class' , 'entity' : '003' , 'account_number' : '013' , 'account_label' : '013'},
  {'account_class' : 'portfolio class' , 'entity' : '003' , 'account_number' : '012' , 'account_label' : '012'}
  ];
  portfolio: Portfeuille[];
  portfolioafter: Portfeuilleafter[] = [ {'avaiable_quantity_without_blocked': 0, 'blocked_quantity': 0, 'currency': '',
  'brokerage': 0 , 'pourcentage_brokerage': '', 'held_quantity': 0 , 'quantity' : 0, 'portfolio_number' : '',
  'portfolio_label': '' , 'clean_value' : 0, 'mirror_account' : '' , 'bank_account' : ''}];
  cloned: Portfeuilleafter;

  constructor() { }

  ngOnInit() {
  }
  showdialog() {
  this.table = true;
  this.advanced = false;
  this.portfolio = this.originalportfolio;
  this.dialog = true;
  }
  hidedialog() {
  this.dialog = false;
  }
 validatedialog() {
    this.dialog = false;
    this.newElement.portfolio_label = this.tmpPortfolio.account_label;
    this.newElement.portfolio_number = this.tmpPortfolio.account_number;
    this.cloned = this.clonePortfoliofter(this.newElement);
    this.portfolioafter = [...this.portfolioafter, this.cloned];
  }
  advancedsearch() {
  this.table = false;
  this.advanced = true;
  }
  tableshow() {
    this.portfolio = this.originalportfolio.slice(0);
    let i: number;
    i = 0;
    while (i < this.portfolio.length) {
    loop :
    for (const prop in this.portfolio[i]) {
      if (this.portfolio[i][prop].search(this.portfolioSearch[prop]) === -1 && this.portfolioSearch[prop] !== '') {
        const index = this.portfolio.indexOf(this.portfolio[i]);
        this.portfolio.splice(index, 1);
        i--;
        break loop ;
      }
    }
    i++;
    }
    this.table = true;
    this.advanced = false;
  }
  delete() {
    let i: number;
    i = 0;
    while (i < this.tmpPortfolioafter.length) {
      const index = this.portfolioafter.indexOf(this.tmpPortfolioafter[i]);
      if (index > 0) {
        this.portfolioafter.splice(index, 1);
        this.calculate();
      }
      i++;
   }
  }
  clonePortfoliofter(c: Portfeuilleafter): Portfeuilleafter {
  const prime = new PrimePortfeuilleafter();
  for(const prop in c) {
    prime[prop] = c[prop];
  }
  return prime;
} 
clonePortfolio(c: Portfeuille): Portfeuille {
  let prime = new PrimePortfeuille();
  for(const prop in c) {
    prime[prop] = c[prop];
  }
  return prime;
}
onRowSelect(event) {
  if (this.portfolioafter.indexOf(event.data) === 0) {
    event.data.isEditable = false;
  }
}
calculate() {
this.portfolioafter[0].quantity = 0;
let i: number;
i = 1;
while (i < this.portfolioafter.length) {
  this.portfolioafter[0].quantity += Number(this.portfolioafter[i].quantity);
  i++;
}
}
}
class PrimePortfeuilleafter implements Portfeuilleafter {
  constructor(public brokerage?, public held_quantity?, public quantity?, public portfolio_number?, public portfolio_label?,
  public clean_value?, public mirror_account?, public bank_account?) {}
}
class PrimePortfeuille implements Portfeuille {
  constructor(public account_class?, public entity?, public account_number?, public account_label?) {}
}