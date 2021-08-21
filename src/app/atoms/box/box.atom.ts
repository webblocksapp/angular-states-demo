import { Component, HostBinding, Input } from '@angular/core';
import { SpacingElectron, Spacing } from '@app/electrons/spacing';
import { Styling, StylingElectron } from '@app/electrons/styling';
import { ColSize, PaddingSize } from '@app/types';
import { applyMixins } from '@functions';
import * as CSS from 'csstype';

@Component({
  selector: 'box',
  template: `<ng-content></ng-content>`,
})
export class BoxAtom implements Spacing, Styling {
  @HostBinding()
  @Input()
  class: string = '';
  style: CSS.Properties;

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

  constructor() {
    applyMixins(BoxAtom, [SpacingElectron, StylingElectron]);
  }
}
