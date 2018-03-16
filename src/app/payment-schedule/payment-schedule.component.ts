import { Component, OnInit, HostListener  } from '@angular/core';
import {Rv} from '../grouping/rv';

@Component({
  selector: 'app-payment-schedule',
  templateUrl: './payment-schedule.component.html',
  styleUrls: ['./payment-schedule.component.css']
})
export class PaymentScheduleComponent implements OnInit {
  // variables
  j: number;
  dialog: boolean;
  table: boolean;
  labels: string[] = ['duration', 'yield_To_Maturity', 'redemption_Date', 'start_Date_Of_Interest', 'first_Corruption_Date',
   'compulation_Method', 'periodicity', 'coupons_Rate'];
  // inputs
  inputs: string[] = [];
  validinputs: string[] = [];
  exclamation: boolean[] = [];
  // complete array
  originalRv: Rv[][] = [[{'external_code' : '1' , 'label' : 'test1'},
  {'external_code' : '2' , 'label' : 'test2' },
  {'external_code' : '3' , 'label' : 'test3' }],
  [{'external_code' : '1' , 'label' : 'test1'},
  {'external_code' : '2' , 'label' : 'test2' },
  {'external_code' : '3' , 'label' : 'test3' }],
  [{'external_code' : '1' , 'label' : 'test1'},
  {'external_code' : '2' , 'label' : 'test2' },
  {'external_code' : '3' , 'label' : 'test3' }],
  [{'external_code' : '1' , 'label' : 'test1'},
  {'external_code' : '2' , 'label' : 'test2' },
  {'external_code' : '3' , 'label' : 'test3' }],
  [{'external_code' : '1' , 'label' : 'test1'},
  {'external_code' : '2' , 'label' : 'test2' },
  {'external_code' : '3' , 'label' : 'test3' }],
  [{'external_code' : '1' , 'label' : 'test1'},
  {'external_code' : '2' , 'label' : 'test2' },
  {'external_code' : '3' , 'label' : 'test3' }],
  [{'external_code' : '1' , 'label' : 'test1'},
  {'external_code' : '2' , 'label' : 'test2' },
  {'external_code' : '3' , 'label' : 'test3' }],
  [{'external_code' : '1' , 'label' : 'test1'},
  {'external_code' : '2' , 'label' : 'test2' },
  {'external_code' : '3' , 'label' : 'test3' }]
];
  // selectedrows
  tmpRv: Rv;
  // tables showing
  Rv: Rv[];
  // search model
  rvSearch: Rv =  {'external_code' : '' , 'label' : '' };

  constructor() { }

  ngOnInit() {
    for (let _i = 0; _i < 8; _i++) {
      this.inputs.push('');
      this.validinputs.push('');
      this.exclamation.push(false);
  }
  }
showdialog(i: number) {
  this.j = i;
  this.table = true;
  this.Rv = this.originalRv[i];
  this.dialog = true;
  }
  hidedialog() {
  this.dialog = false;
  }
  validatedialog() {
    this.dialog = false;
      this.inputs[this.j] = this.tmpRv.label;
}
  advancedsearch() {
  this.table = false;
  }
  tableshow() {
    this.Rv = this.originalRv[this.j].slice(0);
    let i: number;
    i = 0;
    while (i < this.Rv.length) {
    loop :
    for (const prop in this.Rv[i]) {
      if (this.Rv[i][prop].search(this.rvSearch[prop]) === -1 && this.rvSearch[prop] !== '') {
        const index = this.Rv.indexOf(this.Rv[i]);
        this.Rv.splice(index, 1);
        i--;
        break loop ;
      }
    }
    i++;
    }
    this.table = true;
  }
  @HostListener('document:keypress  ', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      if (this.dialog) {
        if (!this.table) {
          this.tableshow ();
        } else if (this.tmpRv != null) {
          this.validatedialog();
        }
      }
    }
  }
  wrong(i: number) {
    if (this.originalRv[i].find(x => x.label === this.inputs[i]) == null && this.inputs[i] !== '') {
      this.exclamation[i] = true;
    } else {
     this.exclamation[i] = false;
     this.validinputs[i] = this.inputs[i];
    }
  }
}
