// configuration.ts - axios configuration
export interface ConfigurationParameters {
  basePath?: string;
  accessToken?: string;
}

export class Configuration {
  /**
     * parameter for oauth2 security
     *
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
  accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);

  /**
   * override base path
   *
   * @type {string}
   * @memberof Configuration
   */
  basePath?: string;

  constructor(param: ConfigurationParameters = {}) {
    this.accessToken = param.accessToken;
    this.basePath = param.basePath;
  }
}
