// runtime.ts - axios runtime
import axios, { type AxiosInstance } from "axios";
import type { Configuration } from "./configuration";

export class BaseAPI {
  protected axios: AxiosInstance;
  protected options: any;
  constructor(config: Configuration) {
    this.axios = axios.create({ baseURL: config.basePath });
    this.options = {};
    if (config.accessToken) {
      this.axios.defaults.headers.common["Authorization"] = `Bearer ${config.accessToken}`;
    }
  }
}
