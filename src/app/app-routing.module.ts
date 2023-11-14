import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from "./pages/registration/registration.component";
import { LoginComponent} from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { StorageComponent} from "./pages/storage/storage.component";

const routes: Routes = [
  { path: '', pathMatch: "full", component: HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'storage', component: StorageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
