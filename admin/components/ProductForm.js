import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "./Layout";
import Link from "next/link";
import { CiTextAlignLeft } from "react-icons/ci";

export default function ProductForm({
  _id,
  name: existingName,
  description: existingDescription,
  category: existingCategory,
  price: existingPrice,
}) {
  const [name, setName] = useState(existingName || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [category, setCategory] = useState(existingCategory || "");
  const [price, setPrice] = useState(existingPrice || "");

  // const [quantity, setQuantity] = useState("");
  // const [currency, setCurrency] = useState("");
  // const [featured, setFeatured] = useState(false);
  // const [trending, setTrending] = useState(false);

  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  //handles submit
  async function saveProduct(e) {
    e.preventDefault();
    const data = { name, description, category, price };
    if (_id) {
      //update
      await axios.post("/api/products", { data, _id });
    } else {
      //create
      await axios.post("/api/products", data);
    }

    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <>
      <form onSubmit={saveProduct} className="mt-5 border p-2 rounded-lg">
        <div className="mb-2">
          <label className="">Name:</label>
          <input
            placeholder="Balenciaga "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-600">Description:</label>
          <textarea
            placeholder=""
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-2 flex items-center justify-between">
          <div>
            <label className="text-sm text-gray-600">Category:</label>
            <input
              placeholder="Tshirts"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Price:</label>
            <input
              placeholder="12456"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button className="btn mt-3">Upload </button>
        </div>
        <button type="submit" className="btn-primary mt-1">
          Submit
        </button>
      </form>
    </>
  );
}
