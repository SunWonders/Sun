import { ProductspageComponent } from './pages/component/productspage/productspage.component';
import { LoginpageComponent } from './pages/component/loginpage/loginpage.component';
import { PlanspageComponent } from './pages/component/planspage/planspage.component';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { TransferPageComponent } from "./pages/component/transferpage/transfer.component";
import { ProfilepageComponent } from "./pages/component/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/component/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/component/landingpage/landingpage.component";
import { ContactpageComponent } from "./pages/component/contactpage/contactpage.component";

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "transfer", component: TransferPageComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "landing", component: LandingpageComponent },
  { path: "contact", component: ContactpageComponent },
  { path: "plans", component: PlanspageComponent },
  { path: "login", component: LoginpageComponent },
  { path: "products", component: ProductspageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
