import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export interface Configuration {
  apiUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private readonly CONFIG_URL = 'assets/config/config.json';
  private configuration$!: Observable<Configuration>;

  constructor(private http: HttpClient) {}

  public loadConfiguration(): any {
    if (!this.configuration$) {
      this.configuration$ = this.http.get<Configuration>(this.CONFIG_URL).pipe(shareReplay(1));
    }
    return this.configuration$;
  }
}
