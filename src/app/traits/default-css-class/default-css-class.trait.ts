import { ElementRef } from '@angular/core';
import { DefaultCssClass } from './default-css-class.interface';

export class DefaultCssClassTrait implements DefaultCssClass {
  private defaultCssClass: string;
  private elRef: ElementRef;

  set class(_value: string) {
    this.initDefaultCssClass(this.elRef, this.defaultCssClass);
  }

  /**
   * This trait method must be called inside the constructor of the component
   * that implemented the DefaultCssClassTrait to take effect.
   */
  initDefaultCssClass(hostElRef: ElementRef, className: string) {
    this.elRef = hostElRef;
    this.defaultCssClass = className;
    this.elRef.nativeElement.classList.add(this.defaultCssClass);
  }
}
