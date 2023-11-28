import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from "./pages/registration/registration.component";
import { LoginComponent} from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { StorageComponent} from "./pages/storage/storage.component";
import { IsLoginGuard } from "./shared/guards/is-login.guard";
import { IsLogoutGuard } from "./shared/guards/is-logout.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [IsLogoutGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [IsLogoutGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsLogoutGuard] },
  { path: 'storages', component: StorageComponent, canActivate: [IsLoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
