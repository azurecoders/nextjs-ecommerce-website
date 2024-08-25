"use client";

import ProductList from "@/components/product-list";
import React, { useState, useEffect } from "react";

const fetchProducts = async () => {
  const apiResponse = await fetch("https://dummyjson.com/products");
  const data = await apiResponse.json();

  return data.products;
};

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const productsFetched = await fetchProducts();
      setProducts(productsFetched);
      setLoading(false);
    };
    fetchData();
  }, []);
  return <ProductList productsFetched={products} loading={loading} />;
};

export default Products;
