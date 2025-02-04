import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

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
        <div className="relative h-48">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
    </div>
  );
};

export default ProductPage;
