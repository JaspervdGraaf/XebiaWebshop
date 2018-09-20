import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { FeatureComponent } from "./featured/feature.component";
import { SupermanComponent } from "./superman/superman.component";
import { SuperwomanComponent } from "./superwoman/superwoman.component";

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    SupermanComponent,
    SuperwomanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
