import { Component } from '@angular/core';

@Component({
  selector: 'default-template',
  template: `
    <toolbar></toolbar>
    <box p="3">
      <ng-content></ng-content>
    </box>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 100vh;
      }
    `,
  ],
})
export class DefaultTemplate {}
