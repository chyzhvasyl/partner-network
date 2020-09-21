import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {EnvConfig} from "./env-config/env-config";
import {TokenService} from "./services/token.service";

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class CommonsModule {
  static forRoot(config: EnvConfig): ModuleWithProviders<CommonsModule> {
    return {
      ngModule: CommonsModule,
      providers: [
        { provide: EnvConfig, useValue: config },
        {
          provide: APP_INITIALIZER,
          useFactory: (sn: TokenService) =>
            function() {
              return sn.init();
            },
          deps: [TokenService],
          multi: true
        }
      ],
    };
  }
}
