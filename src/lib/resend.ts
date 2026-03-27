// Brevo email client configuration
export const emailClient = {
  apiKey: process.env.BREVO_API_KEY || 'dummy_key_for_build',
  apiUrl: 'https://api.brevo.com/v3/smtp/email'
};