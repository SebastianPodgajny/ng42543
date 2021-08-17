import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  template: `M1`,
})
export class M1Component {}

@NgModule({
  declarations: [M1Component],
  imports: [RouterModule.forChild([{ path: '', component: M1Component }])],
})
export class M1Module {
  constructor() {
    console.log(2);
  }
}
