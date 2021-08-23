import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[col]',
})
export class ColDirective {
  constructor(el: ElementRef) {
    const elementClassList = el.nativeElement.classList;
    elementClassList.add('col');
  }
}
