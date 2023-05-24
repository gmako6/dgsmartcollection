import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <Layout>
      <Link
        href={"/products/new"}
        className="bg-blue-900 py-2 px-3 text-white rounded-md"
      >
        Add Product
      </Link>
    </Layout>
  );
}
