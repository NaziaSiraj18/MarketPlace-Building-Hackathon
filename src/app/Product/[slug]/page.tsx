/*
 import React from 'react';
import { useRouter } from 'next/router';
import { client } from '@/sanity/lib/client';
import { Product } from '@/components/ProductCard';
import Image from 'next/image';

async function fetchProduct(slug: string): Promise<Product | null> {
  const query = `*[_type == "food" && slug.current == $slug][0] {
    category,
    "id": _id,
    price,
    description,
    stockLevel,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image": image.asset->url,
    "slug": slug
  }`;

  const data = await client.fetch(query, { slug });
  return data || null;
}

const ProductDetail = ({ product }: { product: Product | null }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={500} height={500} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  const product = await fetchProduct(params.slug);
  return { props: { product } };
}

export default ProductDetail;
*/
/*import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation";

// Function to fetch product details
async function fetchProduct(slug: string) {
  const query = `*[_type == "food" && slug.current == $slug][0]{
    category,
    "id": _id,
    price,
    description,
    stockLevel,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image": image.asset->url,
    "slug": slug
  }`;
  
  const product = await client.fetch(query, { slug });

  return product || null;
}

// Product Page Component
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await fetchProduct(params.slug);

  if (!product) {
    notFound(); // Show 404 page if the product is not found
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <Image
        src={product.image || "/default-image.png"}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-lg"
      />
      <p className="text-gray-700 mt-4">{product.description}</p>
      <p className="text-lg font-bold mt-2">Price: ${product.price}</p>
    </div>
  );
}
*/


/*import React from 'react'
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

interface Props{
  params:{
    slug: string;
  }
}

export default async function page({params}: Props){
  const data = await client.fetch(`*[_type == "food" && slug.current == "${params.slug}"]{
    productName, ProductPrice, "slug": slug.current,
  }`, { slug: params.slug })

  console.log(data)
  return (
    
    <div>
      <h1>{data[0].productName}</h1>
      <p>{data[0].ProductPrice}</p>
      <Image src={data[0].imageUrl} alt='product image' width={500} height={500} />
    </div>
  )
}


/*import React from 'react'
import Image from 'next/image';
import { Product } from '../../../../scripts/types/type';



import { client } from '@/sanity/lib/client';

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const query: string = `*[_type == "food" && _id == $id]{
    name,
    price,
    description,
    category,
    "image": image.asset->url,
    "id": _id
  }`;
  const products: Product | null = await client.fetch(query, { id });

  if (!products) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div key={products.id}>
      <h1>{products.name}</h1>
      <p>{products.price}</p>
      <Image src={typeof products.image === 'string' ? products.image : "/default-image.png"} alt="product image" width={500} height={500} />
    </div>
  );
};

export default page;
*/

/*
import { client } from '@/sanity/lib/client';
import { Product } from '../../../../scripts/types/type';
import ProductCard from '@/components/ProductCard';

const Page = async ({ params }: { params: { id: string } }) => {
  const query = `*[ _type == "product" && _id == $id]{
    name,
    "id": _id,
    price,
    description,
    category,
    stockLevel,
    "image": image.asset._ref
  }[0]`;

  const product: Product | null = await client.fetch(query, { id: params.id });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default Page;
*/
/*import { client } from '@/sanity/lib/client'
import React from 'react'
import { Product } from '../../../../scripts/types/type'


const page =  async ({params:{id}}: {params:{id:string}}) => {
const query =`*[type ==  "food" && _id == $id]{
  
  name,
  price,
  description, 
    category,
    "image":image.asset._ref
    "id": _id  
}[0]`


const products: Product | null = await client.fetch(query , {id})
if(!products){
  return (
    <div>Product not found</div>
  )
}

  return (
    <div key={products.id}>
      <h1>{products.name}</h1>
      
    </div>
  )
}

export default page

*/
/*
import React from 'react'
import { Product } from '../../../../scripts/types/type'

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const query = `*[type == "food" && _id == $id]{
    name,
    price,
    description, 
    category,
    "image": image.asset._ref,
    "id": _id
  }[0]`

  const products: Product | null = await client.fetch(query, { id })
  if (!products) {
    return (
      <div>Product not found</div>
    )
  }

  return (
    <div key={products.id}>
      <h1>{products.name}</h1>
      {/* Render other product details */
  /*  </div>
  )
}

export default page
*/



/*import ProductCard from '@/components/ProductCard';
import { client } from '@/sanity/lib/client';
import { Product } from '../../../../scripts/types/type';

const Page = async ({ params }: { params: { id: string } }) => {
  const query = `*[ _type == "product" && _id == $id]{
    name,
    "id": _id,
    price,
    description,
    category,
    stockLevel,
    "image": image.asset._ref
  }[0]`;

  const product: Product | null = await client.fetch(query, { id: params.id });
  console.log("Fetching product with ID:", params.id); // Log the ID being passed


  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <ProductCard product={product} key={product.id} />
      </div>
    </div>
  );
};

export default Page;

*/
/*
import {groq} from 'next-sanity';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../../scripts/types/type';


interface ProductPageProps {
  params: Promise<{slug :string}>
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq `*[_type == "food" && slug.current == $slug][0]{
    _id,
    name,
    type,
    image,
    price,
}` , { slug }
  );
}
  
export default async function ProductPage({params}: ProductPageProps) {
  const{slug} = await params;
const product = await getProduct((await params).slug);

if (!product) {
  return <div>Product not found</div>;
}

return(
  <div className='max-w-7xl- mx-auto px-4'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      <div className='aspect-square'>
        {product.image && (
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={300}
          height={300}
          className='rounded-lg shadow-md'
          />
        )}
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='text-4xl font-bold'>
          {product.name}
        </h1>
        <p className='text-2xl font-sans'>
          {product.price}
        </p>
      </div>
    </div>
  </div>
)

}
*/
/*
import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../../scripts/types/type';

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      type,
      image,
      price
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl font-sans">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
*//*
import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../../scripts/types/type';

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      type,
      image,
      price,
      description,
      discountPrice,
      reviews,
      tags
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600">{product.description}</p>
          <p className="text-2xl font-sans">
            ${product.discountPrice ? product.discountPrice : product.price}
          </p>
          {product.discountPrice && (
            <p className="line-through text-gray-500 text-xl">
              ${product.price}
            </p>
          )}
          {product.reviews && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Reviews:</h3>
              <ul className="list-disc pl-5">
                {product.reviews.map((review: string, index: number) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </div>
          )}
          {product.tags && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Tags:</h3>
              <ul className="list-inline">
                {product.tags.map((tag: string, index: number) => (
                  <li key={index} className="inline-block mr-2 bg-gray-200 px-3 py-1 rounded-full">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
*/
/*port { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../../scripts/types/type';

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
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
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Calculate discount percentage if discountPrice is available
  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Product Image */
     /* <div className="aspect-square relative">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={400}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
          )}
        </div>
        
        {/* Product Details */
    /*  <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          
          {/* Price Section */
      /*  <div className="flex items-center gap-4">
            <p className="text-3xl font-semibold text-green-500">
              ${product.discountPrice ? product.discountPrice : product.price}
            </p>
            {product.discountPrice && (
              <>
                <p className="text-xl line-through text-gray-500">
                  ${product.price}
                </p>
                <span className="text-sm text-red-500 font-semibold">
                  Save {discountPercentage}%!
                </span>
              </>
            )}
          </div>
          
          {/* Reviews Section */
       /* {product.reviews && (
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800">Customer Reviews:</h3>
              <div className="space-y-4 mt-4">
                {product.reviews.map((review: string, index: number) => (
                  <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                    <p className="text-gray-700">{review}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags Section */
    /*    {product.tags && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Tags:</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {product.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */
     /*   <div className="mt-8">
            <button className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
/*
import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Star } from 'lucide-react';
import { Product } from '../../../../scripts/types/type';

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      type,
      image,
      price,
      discountPrice,
      description,
      reviews,
      tags,
      slug
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return <div className="text-center py-20 text-xl font-semibold">Product not found</div>;
  }

  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */
      /*<div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        {/* Product Details */
    /*  <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
          <p className="text-sm text-gray-500">Slug: {product.slug.current}</p>
          
          {/* Price Section */
      /*  <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-green-600">
              ${product.discountPrice ? product.discountPrice : product.price}
            </p>
            {product.discountPrice && (
              <>
                <p className="text-xl line-through text-gray-500">${product.price}</p>
                <span className="text-sm text-red-500 font-semibold">Save {discountPercentage}%!</span>
              </>
            )}
          </div>

          {/* Reviews Section */
     /*   {product.reviews && product.reviews.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Customer Reviews</h3>
              <div className="mt-3 space-y-2">
                {product.reviews.map((review: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                    <Star className="text-yellow-500" />
                    <p className="text-gray-700">{review}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags Section */
      /*  {product.tags && product.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Tags</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */
      /*  <div className="mt-8">
            <button className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Star } from "lucide-react";
import { Product } from "../../../../scripts/types/type";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
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
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    return <div className="text-center py-20 text-xl font-semibold">Product not found</div>;
  }

  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
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
          {product.reviews && product.reviews.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Customer Reviews</h3>
              <div className="mt-3 space-y-3">
                {product.reviews.map((review: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-md"
                  >
                    <Star className="text-yellow-500" />
                    <p className="text-gray-700">{review}</p>
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
