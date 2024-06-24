import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '51adc905140417f5cb55230946b408c8';

  constructor(private http : HttpClient) { }


  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}$units=metri$mode=json&appid=${this.apiKey}`,{}
    );
  }

}
