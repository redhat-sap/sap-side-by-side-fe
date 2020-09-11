import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other.component';

@NgModule({
  declarations: [OtherComponent],
  imports: [SharedModule, OtherRoutingModule],
})
export class OtherModule {}
