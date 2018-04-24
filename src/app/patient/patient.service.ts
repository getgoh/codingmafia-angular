import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Patient} from '../models/patient';
import {VitalSign} from '../models/vitalsign';

import { URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class PatientService {

  constructor(private _http: HttpClient) {
  }

  getAll() {
    return this._http
        .get<any>('http://localhost:3000/users')
        .map(apiResp => {
          return apiResp as Patient[];
        });
  }

  getVitaSignsByName(name: string) {

    // let myParams = new URLSearchParams();
	  // myParams.append('patient', name);
    // let options = new RequestOptions({ params: myParams });

    let params = new HttpParams({
      fromObject: {
        patient: name
      }
    })

    return this._http
        .post<any>('http://localhost:3000/display/vitalsigns/seeVisits?patient=', params)
        .map(apiResp => {
          return apiResp as VitalSign[];
        });
  }

}
