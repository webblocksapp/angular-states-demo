import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'card',
  template: ` <ng-content></ng-content> `,
  styles: [``],
})
export class CardAtom {
  @HostBinding()
  @Input()
  set class(value: string) {
    this.class += ` card ${value} `;
  }
}
