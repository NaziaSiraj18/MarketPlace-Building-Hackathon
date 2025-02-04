
    export  interface Product {
      tags: any;
      name: string;
      reviews: boolean;
      discountPrice: any;
      productName: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
        inventry: number;
        _id : string;
         FoodName : string;
         _type: "product";
         image?:  {
            asset: {
            _ref : string;
            _type : "image";
         }
        };
        
            price : number; 
            description? : string;
            slug : {
                _type: "slug"
                current: string;
            };
        }
    