import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MaterialModule } from "./custom-modules/material.module";
import { HomeComponent } from "./home/home.component";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { CandidatosService } from "./services/candidatos.service";
import { AngularFireDatabase } from "angularfire2/database";
import { AddPersonComponent } from "./add-person/add-person.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddPersonComponent,
    ItemDetailComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [CandidatosService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {}
