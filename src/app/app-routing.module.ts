import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/Forms/register/register.component';
import { MainWebsiteComponent } from './main-website/main-website.component';

const routes: Routes = [
  {path: 'main', component: MainWebsiteComponent},
  {path: 'home', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
