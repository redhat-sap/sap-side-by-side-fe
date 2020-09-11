import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CUSTOMERS, CUSTOMER } from './sap-fuse.models';
import { ConfigurationService, Configuration } from './configuration.service';
@Injectable({
  providedIn: 'root',
})
export class SapFuseService {
  config!: Configuration;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private configService: ConfigurationService) {
    this.configService.loadConfiguration().subscribe((resp: Configuration) => {
      this.config = resp;
    });
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  getCustomers(search: string): Observable<CUSTOMERS> {
    console.log(this.config);
    search = search ? search : '*';
    return this.http.get<CUSTOMERS>(`${this.config.apiUrl}/sap-fuse-workshop/api/customers?name=${search}`, {
      headers: this.setHeaders(),
    });
  }

  createCustomer(customer: CUSTOMER): Observable<any> {
    return this.http.post<any>(`${this.config.apiUrl}/sap-fuse-workshop/api/customers`, customer, {
      headers: this.setHeaders(),
    });
  }
}
