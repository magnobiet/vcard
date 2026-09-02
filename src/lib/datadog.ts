import * as configcat from '@configcat/sdk/node';
import { environment } from '~/environment';

let client: configcat.IConfigCatClient | null = null;

function getClient(): configcat.IConfigCatClient | null {
  if (!environment.CONFIGCAT_SDK_KEY) {
    return null;
  }

  if (!client) {
    const logger = configcat.createConsoleLogger(configcat.LogLevel.Info);

    client = configcat.getClient(
      environment.CONFIGCAT_SDK_KEY,
      configcat.PollingMode.AutoPoll,
      { logger },
    );
  }

  return client;
}

export const configCat = {
  getClient() {
    return getClient();
  },

  async getValue<T extends string | number | boolean | null | undefined>(
    key: string,
    defaultValue: T,
  ): Promise<T> {
    const client = getClient();

    if (!client) {
      return defaultValue;
    }

    return client.getValueAsync(key, defaultValue) as Promise<T>;
  },

  async getValueJSON<T>(key: string, defaultValue: T): Promise<T> {
    const client = getClient();

    if (!client) {
      return defaultValue;
    }

    const value = await client.getValueAsync(key, JSON.stringify(defaultValue));

    return typeof value === 'string' ? (JSON.parse(value) as T) : defaultValue;
  },
};
