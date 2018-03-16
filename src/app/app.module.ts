import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {DataTableModule, DialogModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { GroupingComponent } from './grouping/grouping.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContraintesComponent } from './contraintes/contraintes.component';
import { TitleComponent } from './title/title.component';
import { RouterModule, Routes } from '@angular/router';
import { ExistingorderComponent } from './existingorder/existingorder.component';
import { NewOrderComponent } from './neworder/neworder.component';
import {NewtitleComponent} from './newtitle/newtitle.component';
import { PaymentScheduleComponent } from './payment-schedule/payment-schedule.component';



const routes: Routes = [
  { path: 'neworder', component: NewOrderComponent},
  {path: 'existingorder', component: ExistingorderComponent},
  {path: 'title', component: TitleComponent},
  {path: 'newtitle', component: NewtitleComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    GroupingComponent,
    PortfolioComponent,
    ContraintesComponent,
    TitleComponent,
    ExistingorderComponent,
    NewOrderComponent,
    NewtitleComponent,
    PaymentScheduleComponent
  ],
  imports: [
    BrowserAnimationsModule , BrowserModule, FormsModule, DataTableModule, DialogModule,  RouterModule.forRoot(routes) , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ],
})
export class AppModule { }
