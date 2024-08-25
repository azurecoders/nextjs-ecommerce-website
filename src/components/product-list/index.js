import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductList = ({ productsFetched, loading }) => {
  return (
    <div className="p-5 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-2">Products</h2>
      <Link href="/">
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-green-500 rounded-lg h-[60px]">
          Go To Home
        </button>
      </Link>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => (
                <Card className="border border-[#ccc]" key={index}>
                  <CardContent>
                    <div className="flex flex-col space-y-3 py-5 px-2">
                      <Skeleton className="h-[125px] rounded-xl bg-gray-300 dark:bg-gray-700" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[200px] bg-gray-300 dark:bg-gray-700" />
                        <Skeleton className="h-4 w-[250px] bg-gray-300 dark:bg-gray-700" />
                        <Skeleton className="h-4 w-[60px] bg-gray-300 dark:bg-gray-700" />
                        <Skeleton className="h-4 w-[50px] bg-gray-300 dark:bg-gray-700" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
          : productsFetched.map((product) => (
              <Link href={`/products/${product.id}`}>
                <Card className="border border-[#ccc]">
                  <CardContent>
                    <ImageWithSkeleton
                      src={product.images[0]}
                      alt={product.name}
                    />
                    <div className="flex flex-col gap-2 my-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product?.title}
                      </h3>
                      <p className="text-md text-gray-750">
                        {product?.description.substring(0, 50)}...
                      </p>
                      <p className="text-2xl font-extrabold">
                        ${product?.price}
                      </p>
                    </div>
                    <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-gray-800 rounded-lg h-[60px] hover:bg-gray-700 transition-all">
                      Buy Now
                    </button>
                  </CardContent>
                </Card>
              </Link>
            ))}
      </div>
    </div>
  );
};

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="h-60 overflow-hidden mt-3 mb-2">
      {!loaded && (
        <Skeleton className="h-full w-full bg-gray-300 dark:bg-gray-700" />
      )}
      <img
        src={src}
        alt={alt}
        className={`object-cover object-top transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ProductList;
