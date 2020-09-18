export interface Env {
  production:          boolean;
  APP_NAME:            string;
  COOKIE_DOMAIN:       string;
}

export class EnvConfig {
  environment: Env;
}
