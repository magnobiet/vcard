import { Resend } from 'resend';
import { environment } from '~/environment';

let client: Resend | null = null;

function getClient(): Resend | null {
  if (!environment.RESEND_API_KEY) {
    return null;
  }

  if (!client) {
    client = new Resend(environment.RESEND_API_KEY);
  }

  return client;
}

export const resend = {
  getClient() {
    return getClient();
  },

  async sendEmail(parameters: Parameters<Resend['emails']['send']>[0]) {
    const client = getClient();

    if (!client) {
      throw new Error('Resend API key is not configured');
    }

    return client.emails.send(parameters);
  },
};
