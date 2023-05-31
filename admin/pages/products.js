import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="">
        <Link
          href={"/products/new"}
          className="bg-blue-900 py-2 px-3 text-white rounded-md"
        >
          Add Product
        </Link>
      </div>
      <div className="mt-5">
        <table className="basic">
          <thead>
            <tr>
              <td>Name</td>
              <td>Category</td>
            </tr>
          </thead>
          {products.map((product) => (
            <tbody>
              <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>
                  <Link href={"/products/edit/" + product._id}>
                    <CiEdit />
                    Edit
                  </Link>
                  <Link href={"/products/delete/" + product._id}>
                    <CiTrash />
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </Layout>
  );
}
