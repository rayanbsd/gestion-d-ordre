import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {DataTableModule,DialogModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BordereauComponent } from './bordereau/bordereau.component';
import { FraisComponent } from './frais/frais.component';
import { PortefeuilleComponent } from './portefeuille/portefeuille.component';
import { ZoneLibreComponent } from './zone-libre/zone-libre.component';
import { ContraintesComponent } from './contraintes/contraintes.component';
import { TitleComponent } from './title/title.component';
import { RouterModule, Routes } from '@angular/router';
import { existingorderComponent } from './existingorder/newtitle.component';
import {FilterPipe} from './existingorder/pipe';
import {FilterPipe2} from './existingorder/pipe2';
import {FilterPipe3} from './neworder/pipe3';
import {FilterPipe4} from './neworder/pipe4';
import { NewOrderComponent } from './neworder/neworder.component';
import{NewtitleComponent} from './newtitle/newtitle.component';



const routes: Routes = [
  { path: 'neworder', component: NewOrderComponent},
  {path: 'existingorder', component: existingorderComponent},
  {path: 'title', component: TitleComponent},
  {path:'newtitle',component:NewtitleComponent}

];  
@NgModule({
  declarations: [
  
    AppComponent,
    BordereauComponent,
    FraisComponent,
    PortefeuilleComponent,
    ZoneLibreComponent,
    ContraintesComponent,
    TitleComponent,
    existingorderComponent,
    FilterPipe,
  FilterPipe2,
  FilterPipe3,
  FilterPipe4,
  NewOrderComponent,
  NewtitleComponent
  ],
  imports: [
    BrowserAnimationsModule , BrowserModule, FormsModule, DataTableModule,DialogModule,  RouterModule.forRoot(routes) ,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ],
 
})
export class AppModule { }
