import { Component, Input } from '@angular/core';
import { Product } from '@app/interfaces';
import { ProductRepository } from '@app/repositories';

@Component({
  selector: 'product-form',
  template: ``,
  styles: [``],
})
export class ProductFormOrganism {
  @Input() mode: 'create' | 'update';

  private formData: Product;
  private id: number;

  constructor(private productRepository: ProductRepository) {
    this.id = 2;
  }

  ngOnInit() {
    if (this.mode === 'update') {
      this.formData = this.productRepository.selectProduct({ id: this.id });
    }
  }

  submit() {
    switch (this.mode) {
      case 'create':
        this.create();
        break;
      case 'update':
        this.update();
        break;
      default:
        break;
    }
  }

  create() {
    const foundProduct = this.productRepository.selectProduct({ id: this.id });

    if (foundProduct) {
      //Print alert when the product exists
      return;
    }

    this.productRepository.create(this.formData);
  }

  update() {
    this.productRepository.update(this.id, this.formData);
  }
}
