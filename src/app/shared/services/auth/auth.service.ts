import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../../types/User";
import { UserResponse } from "../../interfaces/responses/UserResponse";
import { LoginUser } from "../../types/LoginUser";
import { LoaderService } from "../loader/loader.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, private loaderService: LoaderService) {}

  registration(user: User) {
    this.loaderService.isLoading.next(true);
    this.http.post<UserResponse>("http://54.152.195.230:8080/auth/reg", user).subscribe(response => {
      this.loaderService.isLoading.next(false);
      this.saveTokenAndRedirect(response);
    });
  }

  login(user: LoginUser) {
    this.loaderService.isLoading.next(true);
    this.http.post<UserResponse>("http://54.152.195.230:8080/auth/log", user).subscribe(response => {
      this.loaderService.isLoading.next(false);
      this.saveTokenAndRedirect(response);
    });
  }

  private saveTokenAndRedirect(response: UserResponse) {
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('refresh_token', response.refresh_token);
    this.router.navigateByUrl('/storages').then(() => {
      this.authSubject.next(true);
    });
  }

  logOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigateByUrl('/login').then(() => {
      this.authSubject.next(false);
    });
  }
}
