export interface Env {
  production:          boolean;
  APP_NAME:            string;
  COOKIE_DOMAIN:       string;
  API_URL: string
}

export class EnvConfig {
  environment: Env;
}
