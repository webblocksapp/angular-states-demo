import { ElementRef } from '@angular/core';
import { DefaultCssClass } from './default-css-class';

export class DefaultCssClassTrait implements DefaultCssClass {
  defaultCssClass: string;
  private elRef: ElementRef;

  set class(_value: string) {
    this.initDefaultCssClass();
  }

  /**
   * This trait method must be called inside the constructor of the component
   * that implemented the DefaultCssClassTrait to take effect.
   */
  initDefaultCssClass() {
    if (!this.elRef) {
      throw 'elRef must be declared as private on component constructor.';
    }

    if (!this.defaultCssClass) {
      throw 'defaultCssClass must be initialized with a default value.';
    }

    this.elRef.nativeElement.classList.add(this.defaultCssClass);
  }
}
