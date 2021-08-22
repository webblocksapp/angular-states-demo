import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { Mixin } from '@decorators';
import { SpacingTrait, Spacing } from '@app/traits/spacing';
import { Styling, StylingTrait } from '@app/traits/styling';
import { ColSize, PaddingSize } from '@app/types';
import * as CSS from 'csstype';
import { GuttersSize } from '@app/types/gutters-size';
import { DisplayTrait } from '@app/traits/display/display.trait';
import { Display } from '@app/traits/display/display';

@Component({
  selector: 'box',
  template: `<ng-content></ng-content>`,
})
@Mixin([SpacingTrait, StylingTrait, DisplayTrait])
export class BoxAtom implements Spacing, Styling, Display {
  /**
   * Declared trait properties
   */
  @HostBinding()
  @Input()
  class: string = '';

  @Input() style: CSS.Properties;
  @Input() xs: ColSize;
  @Input() sm: ColSize;
  @Input() md: ColSize;
  @Input() lg: ColSize;
  @Input() xl: ColSize;
  @Input() xxl: ColSize;
  @Input() padding: PaddingSize;
  @Input() paddingTop: PaddingSize;
  @Input() paddingRight: PaddingSize;
  @Input() paddingBottom: PaddingSize;
  @Input() paddingLeft: PaddingSize;
  @Input() p: PaddingSize;
  @Input() pt: PaddingSize;
  @Input() pr: PaddingSize;
  @Input() pb: PaddingSize;
  @Input() pl: PaddingSize;
  @Input() paddingX: PaddingSize;
  @Input() paddingY: PaddingSize;
  @Input() px: PaddingSize;
  @Input() py: PaddingSize;
  @Input() spacing: GuttersSize;
  @Input() spacingX: GuttersSize;
  @Input() spacingY: GuttersSize;
  @Input() display: CSS.Properties['display'];

  initElRef: (elRef: ElementRef) => void;
  initDefaultDisplay: (
    hostElRef: ElementRef,
    display?: CSS.Properties['display']
  ) => void;

  constructor(private elRef: ElementRef) {
    this.initElRef(this.elRef);
    this.initDefaultDisplay(this.elRef, 'block');
  }
}
