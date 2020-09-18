import { APP_INITIALIZER, NgModule } from '@angular/core';
import { LanguageControlServiceService } from "./translate.service";

@NgModule({
  providers: [
    LanguageControlServiceService,
    {
      provide: APP_INITIALIZER,
      useFactory: (sn: LanguageControlServiceService) =>
        function() {
          return sn.init();
        },
      deps: [LanguageControlServiceService],
      multi: true
    }
  ]
})
export class LanguageModule { }
