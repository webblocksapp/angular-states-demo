import { Component } from '@angular/core';
import { Product } from '@interfaces';
import { ProductRepository } from '@repositories';

@Component({
  selector: 'products',
  template: `
    <default-template>
      <box [style]="{}" row [spacing]="4">
        <box *ngFor="let product of products" [xs]="12" [md]="4">
          <card> Hello world </card>
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

  constructor(private productRepository: ProductRepository) {
    this.productRepository.subscribe(({ products, loading, error }) => {
      this.products = products;
      this.loading = loading;
      this.error = error;
    });

    this.productRepository.findAll();
  }
}
