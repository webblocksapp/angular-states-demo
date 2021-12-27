import { Component } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  template: `
    <box class="dropdown dropstart">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        <i class="bi bi-cart"></i>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" routerLink="/">Home</a>
        </li>
        <li><a class="dropdown-item" routerLink="/blank">Blank</a></li>
      </ul>
    </box>
  `,
})
export class ShoppingCartMolecule {}
