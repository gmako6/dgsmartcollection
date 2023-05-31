import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  //Querring data.
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }

    res.json(await Product.find());
  }

  //submitting data.
  if (method === "POST") {
    const { name, description, category, price } = req.body;

    const productDoc = await Product.create({
      name,
      description,
      category,
      price,
    });
    res.json(productDoc);
  }

  //updating data.
  if (method === "PUT") {
    const { name, description, category, price, _id } = req.body;

    await Product.updateOne(
      { _id },
      {
        name,
        description,
        category,
        price,
      }
    );
    res.json(true);
  }
}
