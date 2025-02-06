
export interface Product {
    productName: string;
    inventry: number;
    _id: string;
    FoodName: string;
    _type: "product";
    price: number;
    discountPrice?: number; 
    tags: string[]; 
    reviews?: Review[]; 
    name: string | React.ReactNode; 
    description?: string;
  
    image?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
  
    slug: {
      _type: "slug";
      current: string;
    };
  }
  
  export interface Review {
    user: string;
    rating: number; // 1 to 5
    comment?: string;
  }
  