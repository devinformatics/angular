
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { WnctyPlanLibrary } from '../../_models/planlibrary';


@Injectable()
export class PlanLibraryServices {

  constructor(private http: HttpClient) { }

  getParentPlanLibrary(token: string, profileID: string, clientUID: string,planYear: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        'Authorization': token.toString(),
        'profile_uuid': profileID.toString(),
        'client_uuid': clientUID.toString()
      })
    };
    return this.http.get<any>(`api/PlanLibrary/GetPlanLibraries?planYear=${planYear}`, httpOptions).map(plan => plan);
  }

  // Start : getAllModality
  getAllModality(token: string, profileID: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        'Authorization': token.toString(),
        'profile_uuid': profileID.toString()
      })
    };
    // need to change the path after controller
    return this.http.get<any>(`api/PlanLibrary/GetModalityType`, httpOptions).map(modality => modality);
  }
  // End : getAllModality

  // Start : getAllModality
  getAllStyles(token: string, profileID: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        'Authorization': token.toString(),
        'profile_uuid': profileID.toString()
      })
    };
    // need to change the path after controller
    return this.http.get<any>(`api/PlanLibrary/GetModalityStyle`, httpOptions).map(styles => styles);
  }
  // End : getAllModality


  updatePlanLibraryHierarchy(objCaseModel: WnctyPlanLibrary) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json'
      })
    };

    return this.http
      .post(`api/PlanLibrary/UpdatePlanLibrary`, JSON.stringify(objCaseModel), httpOptions);
  }

  postUpdatePlanLibraryHierarchy(objCaseModel: WnctyPlanLibrary, token: string, profileUUID: string) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        'Authorization': token.toString(),
        'profile_uuid': profileUUID
      })
    };
    
    return this.http
      .post(`api/PlanLibrary/InsertPlanLibrary`, JSON.stringify(objCaseModel), httpOptions);
  }

  updatePlanLibraryDetails(objCaseModel: WnctyPlanLibrary, token: string, profileUUID: string) {
    console.log(profileUUID);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'Accept': 'application/json',
        'Authorization': token.toString(),
        'profile_uuid': profileUUID
      })
    };
    console.log(objCaseModel);
    return this.http
      .post(`api/PlanLibrary/UpdatePlanLibrary`, JSON.stringify(objCaseModel), httpOptions);
  }
}
