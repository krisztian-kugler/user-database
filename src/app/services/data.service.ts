import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  private baseURL: string = "https://reqres.in";

  public cachedUser = new BehaviorSubject<User>(null);
  public cachedLastPage: number;
  public cachedData: any = {};

  public getUsers(page?: number): Observable<any> {
    let url: string = `${this.baseURL}/api/users?page=`;
    page ? (url += page) : (url += "1");
    return this.http.get(url);
  }

  public getSingleUser(id: number): Observable<any> {
    const url: string = `${this.baseURL}/api/users/${id}`;
    return this.http.get(url);
  }
}
