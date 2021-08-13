import {
  prospectiveLeadersAirtable,
  loginsAirtable,
} from '../../lib/airtable'
const cookies = nookies.get({req})

export default async function handler(req, res) {
  const cookies = nookies.get({req})
  try {
    const tokenRecord = await loginsAirtable.find(
      'rec' + cookies.authToken
    )
    if(!tokenRecord.fields['Path'].includes(req.query.id)){
      res.redirect('/')
      return
    }
    const prospectiveLeadersRecord = await prospectiveLeadersAirtable.create({
      Email: req.query.email,
      Application: ['rec'+ req.query.id]
    })
    const loginRecord = await loginsAirtable.create({
      'Relevant User': [prospectiveLeadersRecord.id],
      "New Invite": true
    })
    res.json({ success: true, id: loginRecord.id })
  } catch (error) {
    console.log(error)
    res.status(504).json({ success: false, error })
  }
}