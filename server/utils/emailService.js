import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendPaymentConfirmation = async (email, orderDetails) => {
  const { items, totalAmount, paymentId, appointmentDate, appointmentTime } = orderDetails;

  const itemsList = items.map(item => 
    `<tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.title}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.quantity}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">$${item.price}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.duration}</td>
    </tr>`
  ).join('');

  const appointmentSection = appointmentDate && appointmentTime ? `
    <div style="margin: 20px 0; padding: 20px; background-color: #f0f9ff; border-radius: 5px; border-left: 4px solid #0ea5e9;">
      <h3 style="margin-top: 0; color: #0ea5e9;">Appointment Details</h3>
      <p><strong>Date:</strong> ${appointmentDate}</p>
      <p><strong>Time:</strong> ${appointmentTime}</p>
      <p style="margin-bottom: 0;"><strong>Please arrive 10 minutes early for your appointment.</strong></p>
    </div>
  ` : '';

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <div style="background-color: #e11d48; color: white; padding: 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 28px;">Payment Confirmation</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px;">Healing Minds Counseling</p>
      </div>
      
      <div style="padding: 30px;">
        <p style="font-size: 18px; color: #059669; font-weight: bold; margin-bottom: 20px;">
          ✓ Your payment has been successfully processed!
        </p>
        
        <p>Dear Valued Client,</p>
        <p>Thank you for choosing Healing Minds Counseling. Your payment has been completed successfully, and we're looking forward to supporting you on your wellness journey.</p>
        
        ${appointmentSection}
        
        <div style="margin: 30px 0; padding: 20px; background-color: #f8f8f8; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #e11d48;">Payment Summary</h3>
          <p><strong>Payment ID:</strong> ${paymentId}</p>
          <p><strong>Total Amount:</strong> $${totalAmount}</p>
          <p><strong>Payment Method:</strong> PayPal</p>
          <p><strong>Status:</strong> <span style="color: #059669; font-weight: bold;">Completed</span></p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr style="background-color: #f1f1f1;">
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e11d48;">Service</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e11d48;">Qty</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e11d48;">Price</th>
                <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e11d48;">Duration</th>
              </tr>
            </thead>
            <tbody>
              ${itemsList}
            </tbody>
          </table>
        </div>
        
        <div style="margin: 30px 0; padding: 20px; background-color: #fef3c7; border-radius: 5px; border-left: 4px solid #f59e0b;">
          <h3 style="margin-top: 0; color: #d97706;">Important Information</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Please save this email for your records</li>
            <li>If you need to reschedule, please provide at least 24 hours notice</li>
            <li>Bring a valid ID to your appointment</li>
            <li>Arrive 10 minutes early to complete any necessary paperwork</li>
          </ul>
        </div>
        
        <div style="margin: 30px 0; text-align: center;">
          <p style="margin-bottom: 15px;">Questions about your appointment or payment?</p>
          <p>
            <strong>Email:</strong> <a href="mailto:sarah@counselingcentre.com" style="color: #e11d48;">sarah@counselingcentre.com</a><br>
            <strong>Phone:</strong> <a href="tel:+254712345678" style="color: #e11d48;">+254 712 345 678</a>
          </p>
        </div>
        
        <p>We're honored to be part of your healing journey and look forward to working with you.</p>
        
        <p>Warm regards,<br>
        <strong>Psychologist Joan Muturi</strong><br>
        Licensed Professional Counselor<br>
        Healing Minds Counseling</p>
      </div>
      
      <div style="background-color: #f8f8f8; padding: 20px; text-align: center; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0; color: #666; font-size: 14px;">
          © 2024 Healing Minds Counseling. All rights reserved.<br>
          123 Healing Street, Nairobi, Kenya
        </p>
      </div>
    </div>
  `;

  await transport.sendMail({
    from: process.env.SMTP_FROM,
    to: email,
    subject: 'Payment Confirmation - Healing Minds Counseling',
    html: emailHtml
  });
};