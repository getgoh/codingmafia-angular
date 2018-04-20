import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Location } from '@angular/common';

import 'rxjs/Rx';
import { Observable } from "rxjs";

const headers = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class AuthService {

  private userUrl = "/user"

  constructor(private http: Http, private location: Location) { }

  login(user: any) {
    const body = JSON.stringify(user);
    return this.http.post(this.userUrl , body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  register(user: any) {
    const body = JSON.stringify(user);
    return this.http.post(this.userUrl, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
