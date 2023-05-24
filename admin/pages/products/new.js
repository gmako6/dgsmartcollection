import Layout from "@/components/Layout";
import Link from "next/link";
import React, { useState } from "react";
import { CiAlignLeft } from "react-icons/ci";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState();
  const [currency, setCurrency] = useState();
  const [featured, setFeatured] = useState(false);
  const [trending, setTrending] = useState(false);

  //handles submit
  function createProduct() {}

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <Link
          href={"/products"}
          className="bg-blue-900 py-2 px-3 text-white rounded-md"
        >
          <CiAlignLeft />
        </Link>
      </div>
      <form onSubmit={createProduct} className="mt-5 border p-2 rounded-lg">
        <h1>New Product</h1>
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
          <div>
            <label className="text-sm text-gray-600">Currency:</label>
            <input
              placeholder="TZS"
              type="text"
              value={currency}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button className="btn mt-3">Upload </button>
        </div>
        <button type="submit" className="btn-primary mt-1">
          Submit
        </button>
      </form>
    </Layout>
  );
}
