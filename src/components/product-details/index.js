import Link from "next/link";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";

const ProductDetailItem = ({ product, loading }) => {
  return (
    <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto p-4">
      <Link href="/products">
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-purple-500 rounded-lg h-[60px]">
          View Products
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 my-4">
        {loading ? (
          <>
            <div className="h-[400px] w-[400px]">
              <Skeleton className="h-full w-full bg-gray-300 dark:bg-gray-750" />
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="h-10 bg-gray-300 dark:bg-gray-750" />
              <Skeleton className="h-20 bg-gray-300 dark:bg-gray-750" />
              <Skeleton className="w-[100px] h-10 bg-gray-300 dark:bg-gray-750" />
              <Skeleton className="h-10 bg-gray-300 dark:bg-gray-750" />
            </div>
          </>
        ) : (
          <>
            <div className="h-[400px] w-[400px]">
              <ImageWithSkeleton
                src={product && product.images && product?.images[0]}
                alt={product?.title}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-extrabold py-4">{product?.title}</h2>
              <p className="text-gray-500">{product?.description}</p>
              <h3 className="text-xl font-bold">{product?.brand}</h3>
              <p className="text-gray-750">
                Warranty: {product?.warrantyInformation}
              </p>
              <p className="text-2xl font-bold">${product?.price}</p>
              <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-orange-500 rounded-lg h-[60px] hover:bg-orange-400">
                Buy Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetailItem;

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="h-[400px] w-[400px]">
      {!loaded && (
        <Skeleton className="h-full w-full bg-gray-300 dark:bg-gray-750" />
      )}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
