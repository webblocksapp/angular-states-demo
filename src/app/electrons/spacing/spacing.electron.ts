import { ColSize, PaddingSize } from '@app-types';
import { Spacing } from '@app/electrons/spacing/spacing';

export class SpacingElectron implements Spacing {
  public class: string;

  set xs(value: ColSize) {
    this.class += ` col-xs-${value} `;
  }

  set sm(value: ColSize) {
    this.class += ` col-${value} `;
  }

  set md(value: ColSize) {
    this.class += ` col-${value} `;
  }

  set lg(value: ColSize) {
    this.class += ` col-${value} `;
  }

  set xl(value: ColSize) {
    this.class += ` col-${value} `;
  }

  set xxl(value: ColSize) {
    this.class += ` col-${value} `;
  }

  set padding(value: PaddingSize) {
    if (!this.p) this.class += ` p-${value}`;
  }

  set paddingTop(value: PaddingSize) {
    if (!this.pt) this.class += ` pt-${value}`;
  }

  set paddingRight(value: PaddingSize) {
    if (!this.pr) this.class += ` pe-${value}`;
  }

  set paddingBottom(value: PaddingSize) {
    if (!this.pb) this.class += ` pb-${value}`;
  }

  set paddingLeft(value: PaddingSize) {
    if (!this.pl) this.class += ` ps-${value}`;
  }

  set p(value: PaddingSize) {
    if (!this.padding) this.class += ` p-${value}`;
  }

  set pt(value: PaddingSize) {
    if (!this.paddingTop) this.class += ` pt-${value}`;
  }

  set pr(value: PaddingSize) {
    if (!this.paddingRight) this.class += ` pe-${value}`;
  }

  set pb(value: PaddingSize) {
    if (!this.paddingBottom) this.class += ` pb-${value}`;
  }

  set pl(value: PaddingSize) {
    if (!this.paddingLeft) this.class += ` ps-${value}`;
  }
}
