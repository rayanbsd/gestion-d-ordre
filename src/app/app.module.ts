import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BordereauComponent } from './bordereau/bordereau.component';
import { FraisComponent } from './frais/frais.component';
import { PortefeuilleComponent } from './portefeuille/portefeuille.component';
import { ZoneLibreComponent } from './zone-libre/zone-libre.component';


@NgModule({
  declarations: [
    AppComponent,
    BordereauComponent,
    FraisComponent,
    PortefeuilleComponent,
    ZoneLibreComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
