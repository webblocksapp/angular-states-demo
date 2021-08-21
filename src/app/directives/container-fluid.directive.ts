import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[containerFluid]',
})
export class ContainerFluidDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('container-fluid');
    el.nativeElement.style.display = 'block';
  }
}
