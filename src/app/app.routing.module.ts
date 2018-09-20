import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './featured/feature.component';

const routes: Routes = [
      {
        path: '',
        redirectTo: '/featured',
        pathMatch: 'full',
        data: {}
      },
      {
          path: 'featured',
          component: FeatureComponent
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }