"use client";
import ProductDetailItem from "@/components/product-details";
import { useState, useEffect } from "react";

const fetchProductDetails = async (currentProductID) => {
  const apiResponse = await fetch(
    `https://dummyjson.com/products/${currentProductID}`
  );
  const data = await apiResponse.json();
  return data;
};

const ProductDetail = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const product = await fetchProductDetails(params.details);
      setData(product);
      setLoading(false);
    };
    fetchData();
  }, []);
  return <ProductDetailItem product={data} loading={loading} />;
};

export default ProductDetail;
