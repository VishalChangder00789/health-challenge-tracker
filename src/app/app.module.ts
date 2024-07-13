import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FormComponent } from "./form/form.component";
import { DropDownComponent } from "./drop-down/drop-down.component";
import { SearchComponent } from "./search/search.component";
import { DisplayComponent } from "./display/display.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    DropDownComponent,
    SearchComponent,
    DisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
