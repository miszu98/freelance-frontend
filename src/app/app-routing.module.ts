import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { MainWebsiteComponent } from './main-website/main-website.component';

const routes: Routes = [
  {path: 'testowy', component: MainWebsiteComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'main', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
