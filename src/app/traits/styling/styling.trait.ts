import { ElementRef } from '@angular/core';
import * as CSS from 'csstype';
import styleToCss from 'style-object-to-css-string';
import { Styling } from './styling.interface';

/**
 * Trait for setting the component style.
 *
 * This trait can be used also on a directive.
 */
export class StylingTrait implements Styling {
  class: string;
  private elRef: ElementRef;

  set style(value: CSS.Properties) {
    const style = { ...this.style, ...value };

    if (Object.keys(value).length > 0) {
      this.elRef.nativeElement.style = styleToCss(style);
    }
  }

  /**
   * Trait methods must be called inside the constructor of the component
   * that implemented the StylingTrait to take effect.
   */
  initElRef(hostElRef: ElementRef): void {
    this.elRef = hostElRef;
  }
}
