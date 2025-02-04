import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

// src/components/ui/Card.tsx
/*import React, { useState } from 'react';

interface FoodItem {
  id: number;
  name: string;
  price: number;
}

const FoodCard: React.FC<{ food: FoodItem, onAddToCart: (food: FoodItem) => void }> = ({ food, onAddToCart }) => {
  return (
    <div>
      <h3>{food.name}</h3>
      <p>${food.price}</p>
      <button onClick={() => onAddToCart(food)}>Add to Cart</button>
    </div>
  );
};

const Cart: React.FC = () => {
  const [cart, setCart] = useState<FoodItem[]>([]);

  const handleAddToCart = (food: FoodItem) => {
    setCart([...cart, food]);
  };

  const foods: FoodItem[] = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
  ];

  return (
    <div>
      <h2>Menu</h2>
      {foods.map(food => (
        <FoodCard key={food.id} food={food} onAddToCart={handleAddToCart} />
      ))}
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
*/