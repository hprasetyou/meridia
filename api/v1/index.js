const bodyParser = require('body-parser')
const app = require('express')()
module.exports = { path: '/api', handler: app }
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // ssl
  auth: {
    user: 'hello@meridiastudio.com',
    pass: 'VbScXT97t3J3'
  }
})
function sendMail (subject, message) {
  const mailOptions = {
    from: '"Info" <hello@meridiastudio.com>', // sender address (who sends)
    to: 'hprasetyou@gmail.com', // list of receivers (who receives)
    subject, // Subject line
    html: message // html body
  }

  // send mail with defined transport object
  return new Promise(
    (resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(`couldn't send mail ${error}`)
          reject(error)
        } else {
          console.log('Message sent: ' + info.response)
          resolve(info.response)
        }
      })
    })
}
app.use(bodyParser.json())
app.post('/newsletter/subscribe', (req, res) => {
  sendMail(
    'New Message',
    `<h1>${req.body.name} ${req.body.company}</h1><h2>${req.body.email}</h2><p>${req.body.message}</p>`
  )
  res.json(req.body)
})
