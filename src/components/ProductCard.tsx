
"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

// Product Interface
interface Product {
  category: string;
  id: string;
  price: number;
  description: string;
  stockLevel: number;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  name: string;
  image: string | { asset: { _ref: string } }; // Update for image type
  tags?: string[];
  slug: {
    _type: "slug";
    current: string;
  };
}

// Image URL Builder for Sanity
const builder = imageUrlBuilder(client);
function urlFor(source: string | { asset: { _ref: string } }) {
  if (typeof source === "string") {
    return source;
  }
  return builder.image(source).url();
}

// Fetch Products from Sanity
async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "food"]{
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
  const products = await client.fetch(query);
  return products;
}

const ProductCard = () => {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [contact, setContact] = useState<string>('');

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to load products.");
        setLoading(false);
      });
  }, []);

  // Add product to cart with quantity 1
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.product.id === product.id);
      if (existingProduct) {
        alert(`${product.name} is already in your cart.`);
        return prevCart;
      }
      alert(`${product.name} has been added to your cart!`);
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  // Increment quantity of a product in the cart
  const incrementQuantity = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return updatedCart;
    });
  };

  // Decrement quantity of a product in the cart
  const decrementQuantity = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return updatedCart;
    });
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.product.id !== productId);
      return updatedCart;
    });
  };

  // Truncate description for better UI
  const truncateDescription = (description: string) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  // Proceed to Checkout
  const proceedToCheckout = () => {
    alert("Proceeding to checkout...");
  };

  // Place Order
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before placing an order.");
      return;
    }

    if (!name || !address || !contact) {
      alert("Please fill in all the order details.");
      return;
    }

    alert("Your order has been placed successfully! Thank you for shopping.");
    setCart([]); // Clear the cart after placing the order
    setName('');
    setAddress('');
    setContact('');
  };

  return (
    <div className="p-4 flex flex-wrap gap-8">
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Products from API&apos;s Data</h2>

        {/* Loading state */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <Link href={`/Product/${product.slug?.current || ""}`}>
                  <Image
                    src={urlFor(product.image) || "/default-image.png"} // Default image fallback
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </Link>

                <div className="mt-4">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-800">
                    {truncateDescription(product.description)}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-gray-600">Price: ${product.price}</p>
                      {product.discountPercentage > 0 && (
                        <p className="text-red-600">
                          Discount: {product.discountPercentage}% OFF
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {(product.tags || []).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-400 text-black rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-800 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-scale-110 transition-transform duration-300 ease-in-out"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Summary Section */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md mt-8 md:mt-0">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <div>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
                >
                  <div>
                    <p className="text-gray-900 font-medium">{item.product.name}</p>
                    <p className="text-sm text-blue-600">
                      ${item.product.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => incrementQuantity(item.product.id)}
                      className="px-2 py-1 bg-green-500 text-white rounded-md"
                    >
                      &#8593;
                    </button>
                    <span className="px-2 py-1">{item.quantity}</span> {/* Quantity Display */}
                    <button
                      onClick={() => decrementQuantity(item.product.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded-md"
                    >
                      &#8595;
                    </button>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="px-2 py-1 bg-gray-400 text-white rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Proceed to Checkout Button */}
            <button
              className="mt-2 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              onClick={proceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className="text-black text-center">Your cart is empty.</p>
        )}
      </div>

      {/* Place Order Form Section */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md mt-8 md:mt-0">
        <h3 className="text-lg font-bold">Place Order</h3>
        <div className="space-y-4 mt-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your contact number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={placeOrder}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
