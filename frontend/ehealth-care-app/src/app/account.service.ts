import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
      public baseUrl:string="http://3.21.167.235:9090/ehealthcare/patient/account";
  constructor(public httpClient:HttpClient) { }

  findBalance(emailid:any):Observable<any> {
    return this.httpClient.get(this.baseUrl+"/findBalance?email="+emailid);
  }
}
