import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  usersSubject = new Subject<User[]>();

  private users!: User[];

  fetchUsers() {
    this.http.get<User[]>('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users').subscribe(users => {
      this.users = users;
      this.usersSubject.next(this.users);
    });
  }

  fetchSingleUser(userID: string): Observable<User> {
    return this.http.get<User>(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userID}`);
  }
}
