export default function handler(req, res) {
  if (req.method === 'POST') {
    const blogInfo = {
      title: req.body.title,
      message: req.body.message,
      blogPicture: req.body.blogPicture,
      blogPictureName: req.body.blogPictureName,
    };

    return res.json(blogInfo);
  }

  return res.status(401).json('Invalid Request');
}

// import { MongoClient } from 'mongodb';

// const connectionString =
//   process.env.MONGODB_ATLAS + 'blogs?retryWrites=true&w=majority';

// async function handler(req, res) {
//   if (req.method === 'POST') {
//     const data = req.body;
//     const client = await MongoClient.connect(connectionString);
//     const db = client.db();

//     const blogsCollection = db.collection('blogs');
//     const result = await blogsCollection.insertOne(data);
//     res.status(201).json({ message: 'Blog post inserted!', result });
//     client.close();
//   }
// }
// export default handler;
