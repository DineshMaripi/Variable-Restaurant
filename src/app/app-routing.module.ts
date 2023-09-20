import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FoodItemComponent } from './Fooditems/fooditem.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', component: FoodItemComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'foodmenu', loadChildren: () => import('./foodmenu/foodmenu.module').then(m => m.FoodmenuModule) },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
