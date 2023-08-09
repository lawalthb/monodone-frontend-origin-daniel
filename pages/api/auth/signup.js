import User from '../../../models/user';
import dbConnect from '@/utils/dbConnect';
// import handler from '@/utils/handler'
import nc from 'next-connect';

async function handler(req, res) {
  const data = req.body;
  dbConnect();

  const user = await User.create(data);

  res.status(201).json({ message: 'Created user!' });
}

export default handler;
