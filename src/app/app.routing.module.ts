import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureComponent } from "./featured/feature.component";
import { DetailComponent } from "./detail/detail.component";
import { SuperwomanComponent } from "./superwoman/superwoman.component";
import { SupermanComponent } from "./superman/superman.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/featured",
    pathMatch: "full",
    data: {}
  },
  {
    path: "featured",
    component: FeatureComponent
  },
  {
    path: "detail",
    component: DetailComponent
  },
  {
    path: "superman",
    component: SupermanComponent
  },
  {
    path: "superwoman",
    component: SuperwomanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
