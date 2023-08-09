export default function handler(req, res) {
  const result = [];
  const { id, name, parcel, deliverFrom, deliverTo, userType } = JSON.stringify(
    req.body
  );
  const data = {
    id,
    name,
    parcel,
    deliverFrom,
    deliverTo,
    userType,
  };
  

  res.status(200).json({ data });
}
