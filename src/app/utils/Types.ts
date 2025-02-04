import { StaticImageData } from "next/image";
//   Product data types
export type IProduct = {
    id: number; // Product ka unique identifier
    title: string; // Product ka title ya name
    image?: string[] | StaticImageData | string; // Product ki images
    slug: string; // URL-friendly unique identifier for the product
    price: number; // Product ki price
    category: string; // Product ka category name
    description: string; // Product ka detailed description
    discountPrice: number; // Product ke available sizes
    rating: string[]; // Product ke available colors
    qty: number; // Available quantity of the product
    discount?: number; // Discount on product (optional)
    reviews: number
  };

//   cart data types
  export type Cart = {
    id: number; // Product ka unique identifier
    title: string; // Product ka title ya name
    image?: string[] | StaticImageData | string; // Product ki images
    slug: string; // URL-friendly unique identifier for the product
    price: number; // Product ki price
    discountPrice: number; // Product ke available sizes
    rating: string[]; // Product ke available colors
    qty: number; // Available quantity of the product
    discount?: number; // Discount on product (optional)
    uuid:string | number | undefined
    reviews: number,
  };