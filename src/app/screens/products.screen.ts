import { Component } from '@angular/core';
import { Product } from '@interfaces';
import { ProductRepository } from '@repositories';

@Component({
  selector: 'products',
  template: `
    <default-template>
      <div *ngIf="loading">Loading...</div>
      <box *ngIf="!loading" row [spacing]="4">
        <box *ngFor="let product of products" [md]="4">
          <card>
            <card-body>
              <box display="flex">
                <ul>
                  <li>{{ product.id }}</li>
                  <li>{{ product.name }}</li>
                  <li>{{ product.price }}</li>
                  <li>{{ product.location }}</li>
                </ul>
              </box>
            </card-body>
          </card>
        </box>
      </box>
    </default-template>
  `,
  styles: [``],
})
export class ProductsScreen {
  products: Product[] = [];
  loading: boolean;
  error: string;

  constructor(private productRepository: ProductRepository) {}

  ngOnInit() {
    this.productRepository.subscribe(({ products, loading, error }) => {
      this.products = products;
      this.loading = loading;
      this.error = error;
    });

    this.productRepository.findAll();
  }
}
