import { Component, OnInit, ViewEncapsulation , HostListener } from '@angular/core';
import { Portfolio } from './portfolio';
import { Portfolioafter } from './portfolioafter';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation : ViewEncapsulation.None

})
export class PortfolioComponent implements OnInit {
  dialog: boolean;
  table: boolean;
  tmpPortfolio: Portfolio ;
  portfolioSearch: Portfolio = {'account_class' : '' , 'entity' : '' , 'account_number' : '' , 'account_label' : ''};
  newElement: Portfolioafter = { 'avaiable_quantity_without_blocked': '', 'blocked_quantity': '', 'currency': '',
   'brokerage' : '', 'pourcentage_brokerage': '', 'held_quantity': 0 , 'quantity' : '', 'portfolio_number' : '',
   'portfolio_label': '' , 'clean_value' : '' , 'mirror_account' : '' , 'bank_account' : ''};
  tmpPortfolioafter: Portfolioafter[];
  originalportfolio: Portfolio[] = [
  {'account_class' : 'portfolio class' , 'entity' : '003' , 'account_number' : '013' , 'account_label' : '013'},
  {'account_class' : 'portfolio class' , 'entity' : '003' , 'account_number' : '012' , 'account_label' : '012'}
  ];
  portfolio: Portfolio[];
  portfolioafter: Portfolioafter[] = [ {'avaiable_quantity_without_blocked': 0, 'blocked_quantity': 0, 'currency': '',
  'brokerage': 0 , 'pourcentage_brokerage': '', 'held_quantity': 0 , 'quantity' : 0, 'portfolio_number' : '',
  'portfolio_label': '' , 'clean_value' : 0, 'mirror_account' : '' , 'bank_account' : ''}];
  cloned: Portfolioafter;

  constructor() { }

  ngOnInit() {
  }
  showdialog() {
  this.table = true;
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
  clonePortfoliofter(c: Portfolioafter): Portfolioafter {
  const prime = new PrimePortfolioafter();
  for(const prop in c) {
    prime[prop] = c[prop];
  }
  return prime;
}
clonePortfolio(c: Portfolio): Portfolio {
  let prime = new PrimePortfolio();
  for(const prop in c) {
    prime[prop] = c[prop];
  }
  return prime;
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
rowStyle(rowData, rowIndex) {
  if (rowIndex === 0) {
    return('firstrow');
  }
}
@HostListener('document:keypress  ', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {
  if (event.keyCode === 13) {
    if (this.dialog) {
      if (!this.table) {
        this.tableshow ();
      } else if (this.tmpPortfolio != null) {
        this.validatedialog();
      }
    }
  }
}
}
class PrimePortfolioafter implements Portfolioafter {
  constructor(public brokerage?, public held_quantity?, public quantity?, public portfolio_number?, public portfolio_label?,
  public clean_value?, public mirror_account?, public bank_account?) {}
}
class PrimePortfolio implements Portfolio {
  constructor(public account_class?, public entity?, public account_number?, public account_label?) {}
}
