import { Component, ElementRef } from '@angular/core';
import { setDefaultDisplay } from '@app/utils/functions';

@Component({
  selector: 'box',
  template: `<ng-content></ng-content>`,
})
export class BoxAtom {
  constructor(private elRef: ElementRef) {}

  ngAfterContentInit(): void {
    setDefaultDisplay(this.elRef, 'block');
  }
}
