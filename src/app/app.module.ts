import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponentComponent } from "./components/home-component/home-component.component";
import { AppRoutingModule } from "./app-routing.modules";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations:[
    AppComponent,

  ],
  imports:[
    AppRoutingModule,
    BrowserModule,
    HomeComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
