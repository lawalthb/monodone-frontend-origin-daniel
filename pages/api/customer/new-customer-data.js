// import { MongoClient } from "mongodb";

// const connectionString = process.env.MONGODB_ATLAS + "customers?retryWrites=true&w=majority";

// async function handler(req, res) {
//     if (req.method === "POST") {
//         const data = req.body
//         const client = await MongoClient.connect(connectionString)
//         const db = client.db()

//         const customersCollection = db.collection("customers")
//         const result = await customersCollection.insertOne(data)
//         res.status(201).json({ message: "Customer inserted!", result })
//         client.close()
//     }
// }

// export default handler