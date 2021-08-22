import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { Mixin } from '@app/decorators';
import {
  DefaultCssClass,
  DefaultCssClassTrait,
} from '@app/traits/default-css-class';
import { Styling, StylingTrait } from '@app/traits/styling';
import * as CSS from 'csstype';

@Component({
  selector: 'card-body',
  template: `<ng-content></ng-content>`,
})
@Mixin([StylingTrait, DefaultCssClassTrait])
export class CardBodyAtom implements Styling, DefaultCssClass {
  /**
   * Declared trait properties
   */
  @HostBinding()
  @Input()
  class: string;

  @Input() style: CSS.Properties;
  defaultCssClass: string = 'card-body';

  initDefaultDisplay: () => void;
  initDefaultCssClass: () => void;

  constructor(private elRef: ElementRef) {
    this.initDefaultDisplay();
    this.initDefaultCssClass();
  }
}
