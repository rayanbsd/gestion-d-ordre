import { Component, OnInit } from '@angular/core';
import { NAMED_ENTITIES } from '@angular/compiler';
import { FormGroup,FormBuilder } from '@angular/forms';
import { newModel} from './neworder-model';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NewOrderComponent implements OnInit {
c1=true;
c2=false;
c5=true;
c6=false;

click1(){
  this.c1=!this.c1;
  this.c2=false;
}
click2(){
  this.c2=!this.c2;
  this.c1=false;
}
////////////////////////////////
stateForm:FormGroup;
newModels:newModel[] = [
  {'externalcode': 'nomtest','label':'9876'},
  {'externalcode': 'rayan','label':'79645'},
  {'externalcode': 'kais','label':'4321'},
  {'externalcode': 'yasine','label':'2136'},
  {'externalcode': 'amine','label':'6543'},
 
]
showDropdown=true;

constructor(private fb:FormBuilder){
  this.initForm()        
}
initForm():FormGroup{
  return this.stateForm=this.fb.group({
    search:[null]
  })
}

getSearchValue() {
  return this.stateForm.value.search;
}
selectValue(value) {
this.stateForm.patchValue({"search": value});
this.showDropdown = false;
}
ng
  ngOnInit() {
  
  }

}
