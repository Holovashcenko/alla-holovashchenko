import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export async function sendEmail(
  name: string,
  email: string,
  message: string,
): Promise<EmailJSResponseStatus> {
  return emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    { name, email, message },
    'YOUR_PUBLIC_KEY',
  );
}
