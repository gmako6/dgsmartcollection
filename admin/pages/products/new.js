import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import Link from "next/link";
import React from "react";
import { CiTextAlignLeft } from "react-icons/ci";

export default function NewProduct() {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h1>New Product</h1>
        <Link
          href={"/products"}
          className="bg-blue-900 py-2 px-3 text-white rounded-md"
        >
          <CiTextAlignLeft />
        </Link>
      </div>
      <ProductForm />
    </Layout>
  );
}
