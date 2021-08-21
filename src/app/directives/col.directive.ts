import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[col]',
})
export class ColDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('col');
  }
}
