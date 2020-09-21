import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { VendorsModule } from "../../../../vendors/src/lib/vendors.module";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { LanguageModule } from "../../../../translate/src/lib/translate.module";
import {CommonsModule} from "../../../../commons/src/lib/commons.module";
import {environment} from "../../environments/environment";
import {TokenService} from "../../../../commons/src/lib/services/token.service";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {HttpInterceptorService} from "../../../../commons/src/lib/services/http-interceptor.service";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./_store";
import {EffectsModule} from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {routerReducer, RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {CustomSerializer} from "../../../../utils/router.utils";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const views = [];

const modules = [
  CommonModule,
  CommonsModule.forRoot({ environment }),
  VendorsModule,
  LanguageModule,
  HttpClientModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  StoreModule.forRoot(reducers, {
    metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    },
  }),
  EffectsModule.forRoot([]),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
  StoreRouterConnectingModule.forRoot(),
];

const providers = [
  TokenService,
  JwtHelperService,
  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  { provide: LocationStrategy,  useClass: HashLocationStrategy },
  {
    provide: RouterStateSerializer,
    useClass: CustomSerializer,
  },
];


@NgModule({
  declarations: [],
  imports: modules,
  providers: providers
})
export class CoreModule { }
