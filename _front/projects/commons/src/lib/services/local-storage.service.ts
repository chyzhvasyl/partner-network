import {Injectable, Optional} from '@angular/core';
import {EnvConfig} from "../env-config/env-config";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public localStorage: any = localStorage;
  private _prefix: string = ``;

  constructor(@Optional() config?: EnvConfig) {

    if (config) {
      this._prefix = `${config.environment.APP_NAME}_`;
    }

    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
  }

  public set(key: string, value: string): void {
    this.localStorage[`${this._prefix}_${key}`] = value;
  }

  public get(key: string): any {
    return this.localStorage[`${this._prefix}_${key}`] || null;
  }

  public setObject(key: string, value: any): void {
    this.localStorage[`${this._prefix}_${key}`] = JSON.stringify(value);
  }

  public getObject(key: string): any {
    return JSON.parse(this.localStorage[`${this._prefix}_${key}`] || '{}');
  }

  public remove(key: string): void {
    this.localStorage.removeItem(`${this._prefix}_${key}`);
  }

  public clear(): void {
    this.localStorage.clear();
  }

}
