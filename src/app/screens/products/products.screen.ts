import { Component } from '@angular/core';
import { Product } from '@interfaces';
import { ProductRepository } from '@repositories';

@Component({
  selector: 'products',
  template: `
    <default-template>
      <box row>
        <box col>
          <box pt="1">1</box>
        </box>
        <box col>
          <box pr="2">2</box>
        </box>
        <box col>
          <box pb="3">3</box>
        </box>
        <box col>
          <box [xs]="11" pl="4">4</box>
        </box>
      </box>
    </default-template>
  `,
  styles: [``],
})
export class ProductsScreen {
  public products: Product[] = [];
  public loading: boolean;
  public error: string;

  constructor(private productRepository: ProductRepository) {
    this.productRepository.subscribe(({ products, loading, error }) => {
      this.products = products;
      this.loading = loading;
      this.error = error;
    });

    this.productRepository.findAll();
  }
}
