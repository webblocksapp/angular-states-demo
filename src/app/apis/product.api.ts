import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@interfaces';
import { environment as env } from '@env';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Product[]>(`${env.apiRootLocal}/products`);
  }
}
