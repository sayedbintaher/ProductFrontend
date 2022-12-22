import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "Product";
  constructor(private http: HttpClient) { }

  public getProducts() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/${this.url}`);
  }
  public getProductById(id:number) : Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.apiUrl}/${this.url}/${id}`);
  }
  public createProduct(product: IProduct): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(
      `${environment.apiUrl}/${this.url}`,
      product
    );
  }
  public updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `${environment.apiUrl}/${this.url}`,
      product
    );
  }
  public deleteProduct(product: IProduct): Observable<IProduct[]> {
    return this.http.delete<IProduct[]>(
      `${environment.apiUrl}/${this.url}/${product.id}`
    );
  }
}
