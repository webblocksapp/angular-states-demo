import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { Mixin } from '@app/decorators';
import {
  DefaultCssClass,
  DefaultCssClassTrait,
} from '@app/traits/default-css-class';
import { Display } from '@app/traits/display/display';
import { DisplayTrait } from '@app/traits/display/display.trait';
import { Styling, StylingTrait } from '@app/traits/styling';
import * as CSS from 'csstype';

@Component({
  selector: 'card',
  template: ` <ng-content></ng-content> `,
  styles: [``],
})
@Mixin([StylingTrait, DefaultCssClassTrait, DisplayTrait])
export class CardAtom implements Styling, DefaultCssClass, Display {
  /**
   * Declared trait properties
   */
  @HostBinding()
  @Input()
  class: string;

  @Input() style: CSS.Properties;
  @Input() display: CSS.Properties['display'];

  initElRef: (elRef: ElementRef) => void;
  initDefaultDisplay: (
    hostElRef: ElementRef,
    display?: CSS.Properties['display']
  ) => void;
  initDefaultCssClass: (hostElRef: ElementRef, className: string) => void;

  constructor(private elRef: ElementRef) {
    this.initElRef(this.elRef);
    this.initDefaultDisplay(this.elRef, 'flex');
    this.initDefaultCssClass(this.elRef, 'card');
  }
}
