import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[containerFluid]',
})
export class ContainerFluidDirective {
  constructor(el: ElementRef) {
    const elementClassList = el.nativeElement.classList;
    elementClassList.add('container-fluid');
    elementClassList.add('d-block');
  }
}
