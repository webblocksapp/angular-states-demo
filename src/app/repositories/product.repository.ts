import { Injectable } from '@angular/core';
import { Product } from '@interfaces';
import { ProductApi } from '@apis';
import { BehaviorSubject, Subscription } from 'rxjs';

interface ProductRepositoryState {
  products: Product[];
  loading: boolean;
  error: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  private stateSubject = new BehaviorSubject<boolean>(false);
  private state$: Subscription;
  private state: ProductRepositoryState = {
    products: [],
    loading: false,
    error: '',
  };

  constructor(private productApi: ProductApi) {}

  private emitChange() {
    this.stateSubject.next(!this.stateSubject.getValue());
  }

  subscribe(callBack: (state: ProductRepositoryState) => void) {
    this.state$ = this.stateSubject.subscribe(() => {
      callBack(this.state);
    });
  }

  async findAll() {
    try {
      this.state.loading = true;
      this.emitChange();
      this.state.products = await this.productApi.findAll().toPromise();
    } catch (error) {
      this.state.error = error;
    } finally {
      this.state.loading = false;
      this.emitChange();
    }
  }

  async create(product: Product) {
    this.state.products.push(product);
    this.emitChange();
  }

  async update(id: number, product: Product) {
    const index = this.state.products.findIndex((item) => item.id === id);
    this.state.products[index] = product;
    this.emitChange();
  }

  async delete(id: number) {
    this.state.products = this.state.products.filter((item) => item.id !== id);
    this.emitChange();
  }

  unsubscribe() {
    this.state$.unsubscribe();
  }
}
