import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from "../../../partner-web-app/src/environments/environment";
import { CookieService } from "ngx-cookie-service";
import { LanguageList } from "./constants/languages.enum";

@Injectable({
  providedIn: 'root'
})
export class LanguageControlServiceService {
  private _storageName = environment.APP_NAME + 'i18n';
  private _languageMatcher = `/${LanguageList.en}/`;

  constructor(
    private _translateService: TranslateService,
    private _cookieService: CookieService
  ) { }

  public init(): void {
    const _selected = this._cookieService.get(this._storageName);
    const browserLang: string = this._translateService.getBrowserLang();
    this._translateService.addLangs([LanguageList.en]);

    if (_selected) {
      this._translateService.use(_selected ? _selected : LanguageList.en);
    } else {
      this._translateService.use(browserLang.match(this._languageMatcher) ? browserLang : LanguageList.en);
    }

    console.info(`INIT TRANSLATE: ${this._translateService.getLangs().join(', ')}`);
  }

  public setLang(lang: string): void {
    this._cookieService.set(this._storageName, lang, 30, '/', environment.COOKIE_DOMAIN, true);
    this._translateService.use(lang);
  }

  public getCurrent(): string {
    return this._translateService.currentLang;
  }
}
