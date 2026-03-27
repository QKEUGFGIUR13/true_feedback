import { emailClient } from '../lib/resend';
import { apiResponse } from '@/types/apiResponse';

export async function sendVerificationEmail(
  username: string,
  email: string,
  verifyCode: string
): Promise<apiResponse> {
  try {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Verification Code:", verifyCode);

    const emailData = {
      sender: { name: 'True Feedback', email: 'nihalanand469@gmail.com' },
      to: [{ email: email, name: username }],
      subject: 'True Feedback | Verification code',
      htmlContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .code { background: white; border: 2px dashed #667eea; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 5px; margin: 20px 0; border-radius: 5px; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>True Feedback</h1>
              </div>
              <div class="content">
                <h2>Hello ${username},</h2>
                <p>Thank you for registering with True Feedback! Please use the following verification code to complete your registration:</p>
                <div class="code">${verifyCode}</div>
                <p>This code will expire in 1 hour.</p>
                <p>If you did not request this code, please ignore this email.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} True Feedback. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `
    };

    const response = await fetch(emailClient.apiUrl, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': emailClient.apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo API Error:', error);
      throw new Error(error.message || 'Failed to send email');
    }

    const result = await response.json();
    console.log('Brevo Email sent successfully:', result);

    return { success: true, message: 'Verification email sent successfully' };
  } catch (emailError: any) {
    console.error("Error sending verification email:", emailError);
    return { success: false, message: emailError?.message || 'Failed to send verification email' };
  }
}
