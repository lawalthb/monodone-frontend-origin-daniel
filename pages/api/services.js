var path = require('path');
const fs = require('fs');

export default function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const filePath = path.join(process.cwd(), 'data.json');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      fs.readFile(filePath, (err, result) => {
        if (err) {
          return res.status(500).send();
        }
        return res.status(200).json(JSON.parse(result.toString()));
      });
    }
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
  // const filePath = path.join(process.cwd(), 'data.json');
  // fs.readFile(filePath, (err, result) => {
  //     if (err) {
  //         return res.json(err)
  //     }
  //     return res.json(JSON.parse(result.toString()))
  // });
}
