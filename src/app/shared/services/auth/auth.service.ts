import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../../types/User";
import { UserResponse } from "../../interfaces/responses/UserResponse";
import { LoginUser } from "../../types/LoginUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  registration(user: User) {
    this.http.post<UserResponse>("http://grainmole-loadbalancer-451622333.us-east-1.elb.amazonaws.com/reg", user).subscribe(response => {
      this.saveTokenAndRedirect(response);
    });
  }

  login(user: LoginUser) {
    this.http.post<UserResponse>("http://grainmole-loadbalancer-451622333.us-east-1.elb.amazonaws.com/log", user).subscribe(response => {
      this.saveTokenAndRedirect(response);
    });
  }

  private saveTokenAndRedirect(response: UserResponse) {
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('refresh_token', response.refresh_token);
    this.router.navigateByUrl('/storage').then(() => {
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
