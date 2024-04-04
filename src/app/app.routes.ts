import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResourcesComponent } from './resources/resources.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'resources', component: ResourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

