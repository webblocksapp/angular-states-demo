import { ElementRef } from '@angular/core';
import * as CSS from 'csstype';
import styleToCss from 'style-object-to-css-string';
import { Styling } from './styling';

export class StylingTrait implements Styling {
  class: string;
  private elRef: ElementRef;

  set style(value: CSS.Properties) {
    const style = { ...this.style, ...value };

    if (this.elRef === undefined) {
      console.error(
        'elRef must be declared as private on component constructor.'
      );
      return;
    }

    if (Object.keys(value).length > 0) {
      this.elRef.nativeElement.style = styleToCss(style);
    }
  }

  /**
   * This trait method must be called inside the constructor of the component
   * that implemented the StylingTrait to take effect.
   */
  initDefaultDisplay(): void {
    this.style = !this.class && !this.style ? { display: 'block' } : {};
  }
}
