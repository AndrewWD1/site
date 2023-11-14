// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://AndrewDoumont:<password>@cluster0.yziwcli.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function handler(req, res) {
  await client.connect();

  let dbres = await client.db("admin").command({ ping: 1 });

  res.status(200).json({ name: dbres });
}
