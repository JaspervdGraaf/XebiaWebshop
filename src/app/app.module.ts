import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { FeatureComponent } from "./featured/feature.component";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
  declarations: [AppComponent, FeatureComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
