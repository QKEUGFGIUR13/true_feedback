const brevo = require('@getbrevo/brevo');

const apiInstance = new brevo.TransactionalEmailsApi();
const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY || 'dummy_key_for_build';

export { apiInstance as emailClient };