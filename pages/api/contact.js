export default function handler(req, res) {
  if (req.method === 'POST') {
    const contactInfo = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    };

    return res.json(contactInfo);
  }

  return res.status(401).json('Invalid Request');
}
