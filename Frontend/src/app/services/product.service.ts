import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../models/product.model';

const baseUrl = 'http://localhost:8080/api/products';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private ListaProductos = new BehaviorSubject<Products[]>([]);

  readonly productos = this.ListaProductos.asObservable;


  get products(): Products[] {
    return this.ListaProductos.getValue();
  }

  set products(data: Products[]) {
    this.ListaProductos.next(data);
  }

  getAll(): Observable<Products[]> {
    return this.http.get<Products[]>(baseUrl);
  }

  get(id: any): Observable<Products> {
    return this.http.get<Products>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Products[]> {
    return this.http.get<Products[]>(`${baseUrl}?title=${title}`);
  }
}
