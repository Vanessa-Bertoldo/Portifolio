import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.modules";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent

  ],
  imports:[
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
