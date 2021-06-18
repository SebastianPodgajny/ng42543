import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "@xyz/user-interface"; //   <--- this is path mapped in tsconfig to TS files

@Component({
  template: `<lib-button></lib-button>`
})
export class M2Component {}


@NgModule({
  declarations: [M2Component],
  imports: [
    ButtonModule,
    RouterModule.forChild([
      {path: '', component: M2Component}
    ])
  ]
})
export class M2Module {}
