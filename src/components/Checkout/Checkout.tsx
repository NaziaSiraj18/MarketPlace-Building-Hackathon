"use client";
import Image from "next/image";

export default function Checkout() {
  // Event handler function to show alerts
  const handleEvent = (eventName: string) => {
    alert(`${eventName} event triggered`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1">
        {/* Left Column - Forms */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    onClick={() => handleEvent('First Name')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    onClick={() => handleEvent('Last Name')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    onClick={() => handleEvent('Email Address')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    onClick={() => handleEvent('Phone Number')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    onClick={() => handleEvent('Company')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    onClick={() => handleEvent('Country')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  >
                    <option value="">Choose country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    onClick={() => handleEvent('City')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                    placeholder="Choose city"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    onClick={() => handleEvent('Zip Code')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address1"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  onClick={() => handleEvent('Address 1')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                />
              </div>

              <div>
                <label
                  htmlFor="address2"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  onClick={() => handleEvent('Address 2')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] focus:border-[#FF9F0D]"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sameAsShipping"
                onClick={() => handleEvent('Same as Shipping')}
                className="h-4 w-4 rounded border-gray-300 text-[#FF9F0D] focus:ring-[#FF9F0D]"
              />
              <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                Same as shipping address
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between pt-4 space-y-4 md:space-y-0">
            <button
              onClick={() => handleEvent('Back to Cart')}
              className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D] w-full md:w-72 h-12 px-3"
            >
              Back to cart
            </button>
            <button
              onClick={() => handleEvent('Proceed to Shipping')}
              className="px-6 py-2 bg-[#FF9F0D] text-white rounded-md shadow-sm text-sm font-medium hover:bg-[#FF9F0D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D] w-full md:w-72 h-12"
            >
              Proceed to shipping
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="p-6 rounded-lg border-2 border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <Image
                    src="/checkoutpic.png"
                    alt="Chicken Tikka Kebab"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Chicken Tikka Kebab</h3>
                  <p className="text-sm text-gray-500">{150} gm net</p>
                  <p className="text-sm text-gray-500">{50}$</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{130}$</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium">{25}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">{54.76}$</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{432.65}$</span>
            </div>
          </div>

          <button
            onClick={() => handleEvent('Place an Order')}
            className="w-full mt-6 px-6 py-3 bg-[#FF9F0D] text-white rounded-md shadow-sm text-sm font-medium hover:bg-[#FF9F0D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D]"
          >
            Place an order
          </button>
        </div>
      </div>
    </div>
  );
}
