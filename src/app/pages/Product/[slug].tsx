/*import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  image: string;
  price: string;
  discountedPrice: string;
  discount: string;
  description: string;
  rating: number;
  reviews: number;
}

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch the product data from your API or static data
    if (slug) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${slug}`);
          const data: Product = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <Image 
            src={product.image} 
            alt={product.name} 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>
          <div className="mt-2">
            <span className="text-gray-500 line-through">{product.price}</span>
            <span className="text-green-500 ml-2 font-bold">{product.discountedPrice}</span>
          </div>
          <p className="text-red-500 text-sm">{product.discount}</p>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <div className="flex items-center mt-3">
            {Array.from({ length: Math.round(product.rating) }, (_, index) => (
              <span key={index} className="text-yellow-400 text-sm mr-1">
                ★
              </span>
            ))}
            <span className="text-gray-400 ml-2">({product.reviews} reviews)</span>
          </div>
        </div>
      </div>
  
  );
};

export default ProductPage;
*/
/*import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  image: string;
  price: string;
  discountedPrice: string;
  discount: string;
  description: string;
  rating: number;
  reviews: number;
}

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof slug === "string") {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${slug}`);
          if (!response.ok) throw new Error("Product not found!");

          const data: Product = await response.json();
          setProduct(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  if (loading)
    return <div className="text-center py-10 text-gray-500">Loading product...</div>;

  if (error)
    return <div className="text-center text-red-500">{error}</div>;

  if (!product)
    return <div className="text-center text-red-500">Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.name}
            width={500} // ✅ Fixed width
            height={400} // ✅ Fixed height
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>
          <div className="mt-2">
            <span className="text-gray-500 line-through">{product.price}</span>
            <span className="text-green-500 ml-2 font-bold">{product.discountedPrice}</span>
          </div>
          <p className="text-red-500 text-sm">{product.discount}</p>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <div className="flex items-center mt-3">
            {Array.from({ length: Math.round(product.rating) }, (_, index) => (
              <span key={index} className="text-yellow-400 text-sm mr-1">★</span>
            ))}
            <span className="text-gray-400 ml-2">({product.reviews} reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
*/
/*
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  image: string;
  price: string;
  discountedPrice: string;
  discount: string;
  description: string;
  rating: number;
  reviews: number;
}

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof slug === "string") {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${slug}`);
          if (!response.ok) throw new Error("Product not found!");

          const data: Product = await response.json();
          setProduct(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  if (loading)
    return <div className="text-center py-10 text-gray-500">Loading product...</div>;

  if (error)
    return <div className="text-center text-red-500">{error}</div>;

  if (!product)
    return <div className="text-center text-red-500">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Product Image */
   /*   <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/2 h-96 border border-gray-300 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Product Details */
     /*   <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* Pricing */
   /*       <div className="mt-4">
            <span className="text-gray-500 line-through text-lg">{product.price}</span>
            <span className="text-green-500 text-2xl font-bold ml-2">{product.discountedPrice}</span>
            <p className="text-red-500 font-semibold mt-1">{product.discount} Off</p>
          </div>

          {/* Rating & Reviews */
       /*   <div className="flex items-center mt-4">
            {Array.from({ length: Math.round(product.rating) }, (_, index) => (
              <span key={index} className="text-yellow-400 text-lg mr-1">★</span>
            ))}
            <span className="text-gray-500 ml-2 text-lg">({product.reviews} Reviews)</span>
          </div>

          {/* Buy Button */
         /* <button className="mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
*/
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  image: string;
  price: string;
  discountedPrice: string;
  discount: string;
  description: string;
  rating: number;
  reviews: number;
  category: string;
  stock: number;
}

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof slug === "string") {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${slug}`);
          if (!response.ok) throw new Error("Product not found!");

          const data: Product = await response.json();
          setProduct(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  if (loading) return <div className="text-center py-10 text-gray-500">Loading product...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!product) return <div className="text-center text-red-500">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Product Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-96 border border-gray-300 rounded-lg overflow-hidden">
          <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* Category */}
          <p className="text-gray-500 mt-1 text-sm">Category: {product.category}</p>

          {/* Pricing */}
          <div className="mt-4">
            <span className="text-gray-500 line-through text-lg">${product.price}</span>
            <span className="text-green-500 text-2xl font-bold ml-2">${product.discountedPrice}</span>
            <p className="text-red-500 font-semibold mt-1">{product.discount} Off</p>
          </div>

          {/* Stock */}
          <p className={`mt-2 font-semibold ${product.stock > 0 ? "text-green-500" : "text-red-500"}`}>
            {product.stock > 0 ? `In Stock (${product.stock} items left)` : "Out of Stock"}
          </p>

          {/* Rating & Reviews */}
          <div className="flex items-center mt-4">
            {Array.from({ length: Math.round(product.rating) }, (_, index) => (
              <span key={index} className="text-yellow-400 text-lg mr-1">★</span>
            ))}
            <span className="text-gray-500 ml-2 text-lg">({product.reviews} Reviews)</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              Buy Now
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-300 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
