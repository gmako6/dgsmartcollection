import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CiTextAlignLeft } from "react-icons/ci";

export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h1>Edit Product</h1>
        <Link
          href={"/products"}
          className="bg-blue-900 py-2 px-3 text-white rounded-md"
        >
          <CiTextAlignLeft />
        </Link>
      </div>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
}
