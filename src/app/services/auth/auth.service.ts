import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import {map} from 'rxjs/operators';
import {Token} from '../../models/token';

@Injectable()
export class AuthService {

   private url = 'http://localhost:3000/api';
    hasSubscription = false;
   constructor(private http: HttpClient) {
     this.getSubscriptions();
   }

  authenticate(credentials) {
      return this.http.post(this.url + '/user/auth', {
        login: credentials.login,
        password: credentials.password
      }).pipe(map((result: Token) => {
         if (result && result.token) {
             localStorage.setItem('token', result.token);
              this.getSubscriptions();
             return true;
         }
         return false;
     })
  );
  }

createOrUpdate(credentials) {
   return this.http.post(this.url + '/user/create', credentials);
}

getUserById(userId) {
     return this.http.get(this.url + '/user/' + userId);
}

createsubscription(subscription) {
     subscription.userId = this.currentUser.userId;
     return this.http.post(this.url + '/subscription', subscription);
}

getSubscriptions() {
     if (this.currentUser) {
       this.http.get(this.url + '/subscriptions/' + this.currentUser.userId).subscribe(res => {
         if (res !== null) {
           this.hasSubscription = true;
         }
       });
     }
}

  logout() {
     return this.http.delete(this.url + '/user/logout/' + this.currentUser.userId)
    .pipe(map(() => {
               localStorage.removeItem('token');
               this.hasSubscription = false;
           })
      );
  }

  isLoggedIn() {
     const jwtHelper = new JwtHelper();
     const token = localStorage.getItem('token');
     if (!token) {
         return false;
     }
     return !(jwtHelper.isTokenExpired(token));
  }
  isAdmin() {
     if (this.currentUser !== null) {
       return this.currentUser.role === 'admin';
     }
  }
  get currentUser() {
     const token = this.getToken();
     if (!token) {
         return null;
     }
     return new JwtHelper().decodeToken(token);
  }
  getToken() {
     return localStorage.getItem('token');
  }
}
