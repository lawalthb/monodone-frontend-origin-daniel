export default function handler(req, res) {
  if (req.method === 'POST') {
    const quoteInfo = {
      deliveryFrom: req.body.deliveryFrom,
      deliveryTo: req.body.deliveryTo,
      quantity: req.body.quantity,
      weight: req.body.weight,
      value: req.body.value,
      category: req.body.category && req.body.category,
      address: req.body.address && req.body.address,
      city: req.body.city && req.body.city,
      zipcode: req.body.zipcode && req.body.zipcode,
      packageType: req.body.packageType && req.body.packageType,
    };

    return res.json(quoteInfo);
  }

  return res.status(401).json('Invalid Request');
}
