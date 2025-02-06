import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Star } from "lucide-react";
import { Product, Review } from "../../../../scripts/types/type";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch(
      groq`*[_type == "food" && slug.current == $slug][0]{
        _id,
        name,
        type,
        image,
        price,
        discountPrice,
        description,
        reviews,
        tags
      }`,
      { slug }
    );
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    return <div className="text-center py-20 text-xl font-semibold">Product not found</div>;
  }

  const discountPercentage = product.discountPrice
    ? Math.round(((Number(product.price) - Number(product.discountPrice)) / Number(product.price)) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product?.name || "Product image"}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>

          {/* Price Section */}
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-green-600">
              ${product.discountPrice ? product.discountPrice : product.price}
            </p>
            {product.discountPrice && (
              <>
                <p className="text-xl line-through text-gray-400">${product.price}</p>
                <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                  Save {discountPercentage}%
                </span>
              </>
            )}
          </div>

          {/* Reviews Section */}
          {Array.isArray(product.reviews) && product.reviews.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Customer Reviews</h3>
              <div className="mt-3 space-y-3">
                {product.reviews.map((review: Review, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-md"
                  >
                    <Star className="text-yellow-500" />
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags Section */}
          {product.tags && product.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Tags</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <div className="mt-8">
            <button className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

