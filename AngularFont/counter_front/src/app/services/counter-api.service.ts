import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CounterResponse {
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class CounterApiService {
  private baseUrl = 'http://localhost:9090/counter';

  constructor(private http: HttpClient) {}

  getValue(): Observable<CounterResponse> {
    return this.http.get<CounterResponse>(this.baseUrl);
  }

  increment(): Observable<CounterResponse> {
    return this.http.post<CounterResponse>(`${this.baseUrl}/increment`, {});
  }

  decrement(): Observable<CounterResponse> {
    return this.http.post<CounterResponse>(`${this.baseUrl}/decrement`, {});
  }

  reset(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/reset`, {});
  }
}
