import { Component, OnInit } from '@angular/core';
import { titreModel} from './ordre-model';
import { NAMED_ENTITIES } from '@angular/compiler';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-newtitle',
  templateUrl: './newtitle.component.html',
  styleUrls: ['./newtitle.component.css']
})
export class existingorderComponent implements OnInit {
  stateForm:FormGroup;
titresModel:titreModel[] = [
  {'name': 'nomtest','identifier':'9876','label':'labeltest'},
  {'name': 'rayan','identifier':'98789','label':'ffff'},
  {'name': 'kais','identifier':'9876','label':'cccc'},
  {'name': 'youssef','identifier':'98789','label':'adsq'},
  {'name': 'adib','identifier':'9876','label':'fsdg'},
  {'name': 'myriam','identifier':'98789','label':'labxcvxfdgeltest2'},
  {'name': 'zaineb','identifier':'9876','label':'labefdsgsdgltest'},
  {'name': 'fatma','identifier':'98789','label':'azezea'},
  {'name': 'mayssa','identifier':'9876','label':'labsdfeltest'},
  {'name': 'rezgui','identifier':'98789','label':'tzet'}
]
showDropdown=true;
c1=true;
c2=false;

click1(){
  this.c1=!this.c1;
  this.c2=false;
}
click2(){
  this.c2=!this.c2;
  this.c1=false;
}
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
