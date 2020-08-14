

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LocationServices {
  constructor(private http: HttpClient) { }
  getLocationString() {
    return this.http.get<any>(`api/Location/GetUserLocationString`);
  }

  updateLocationString(token:string,profileId:string,locationName:string,locationUrl:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        'Authorization': token.toString()
      })
    };
    return this.http.post<any>(`api/Location/UpdateLocation?profile_uuid=${profileId}&&locationName=${locationName}&&locationPath=${locationUrl}`,null, httpOptions);
  }

}
