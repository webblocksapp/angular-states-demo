import { ElementRef } from '@angular/core';
import { overrideCssClass } from '@app/utils/functions';
import * as CSS from 'csstype';
import { Display } from './display';

/**
 * Trait for setting the component display.
 *
 * This trait can be used also on a directive.
 */
export class DisplayTrait implements Display {
  private elRef: ElementRef;

  set display(value: CSS.Properties['display']) {
    this.setDisplay(value);
  }

  private setDisplay(display: CSS.Properties['display']) {
    overrideCssClass(this.elRef, new RegExp(/^d-/), `d-${display}`);
  }

  /**
   * Trait methods must be called inside the constructor of the component
   * that implemented the DisplayTrait to take effect.
   */
  initDefaultDisplay(
    hostElRef: ElementRef,
    display: CSS.Properties['display']
  ): void {
    this.elRef = hostElRef;
    this.setDisplay(display);
  }
}
