export default function handler(req, res) {
  if (req.method === 'POST') {
    const commentInfo = {
      fullName: req.body.fullName,
      email: req.body.email,
      message: req.body.message,
    };

    return res.json(commentInfo);
  }

  return res.status(401).json('Invalid Request');
}
