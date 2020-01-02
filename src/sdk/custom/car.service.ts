import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarConfig } from 'src/sdk/car.config';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {}

  public getAllCars(): Observable<any> {
    const url = CarConfig.getPath() + '/cars';

    return this.http.get(url);
  }

  public addCar(credentials: object): Observable<any> {
    const url = CarConfig.getPath() + '/cars/add';

    return this.http.post(url, credentials);
  }

  public addListingImages(
    reg: any,
    model: any,
    make: any,
    year: any,
    color: any,
    milage: any,
    price: any,
    status: any,
    image: any,
    data?: object
  ): Observable<any> {
    const url = CarConfig.getPath() + '/cars/add';
    const formData: FormData = new FormData();
    formData.append('reg', reg);
    formData.append('model', model);
    formData.append('make', make);
    formData.append('year', year);
    formData.append('color', color);
    formData.append('milage', milage);
    formData.append('price', price);
    formData.append('status', status);
    formData.append('carImage', image);

    return this.http
      .post(url, formData)
      .pipe((response: any) => {
          return response;
        });
  }
  }
