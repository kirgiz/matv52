import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { Matv52SharedLibsModule, Matv52SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Matv52SharedLibsModule, Matv52SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
  entryComponents: [JhiLoginModalComponent],
  exports: [Matv52SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv52SharedModule {}
