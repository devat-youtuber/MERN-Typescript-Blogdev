import { Twilio } from 'twilio'

const accountSid = `${process.env.TWILIO_ACCOUNT_SID}`;
const authToken = `${process.env.TWILIO_AUTH_TOKEN}`;
const from = `${process.env.TWILIO_PHONE_NUMBER}`;
const serviceID = `${process.env.TWILIO_SERVICE_ID}`;

const client = new Twilio(accountSid, authToken)


export const sendSms = (to: string, body: string, txt: string) => {
  try {
    client.messages
    .create({
      body: `BlogDev ${txt} - ${body}`,
      from,
      to
    })
    .then(message => console.log(message.sid));

  } catch (err) {
    console.log(err)
  }
}


export const smsOTP = async(to: string, channel: string) => {
  try {
    const data = await client
      .verify
      .services(serviceID)
      .verifications
      .create({
        to,
        channel
      })

    return data;
  } catch (err) {
    console.log(err)
  }
}

export const smsVerify = async(to: string, code: string) => {
  try {
    const data = await client
      .verify
      .services(serviceID)
      .verificationChecks
      .create({
        to,
        code
      })
      
    return data;
  } catch (err) {
    console.log(err)
  }
}