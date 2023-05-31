import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function DeleteProductPage() {
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

  function goBack() {
    router.push("/products");
  }

  return (
    <Layout>
      <h1 className="text-center">
        Do you want to Delete Product: &nbsp;{productInfo?.name}?
      </h1>
      <div className="flex justify-center items-center">
        <Link
          href={"/products"}
          className="bg-blue-900 py-2 px-3 text-white rounded-md"
        >
          No
        </Link>
        <Link
          href={"/products"}
          className="bg-blue-900 py-2 px-3 text-white rounded-md"
        >
          Yes
        </Link>
      </div>
    </Layout>
  );
}
