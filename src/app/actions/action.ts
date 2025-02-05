/*import { Product } from "../../../scripts/types/type"



export const addToCart = (product : Product) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === product._id)

    if(existingProductIndex > -1) {
        cart[existingProductIndex].inventry += 1
    }
    else {
        cart.push({
            ...product, inventry: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartQuantity = (productId :string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].inventry = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}
*/
import { Product } from "../../../scripts/types/type"

// Add to cart function
export const addToCart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === product._id)

    if (existingProductIndex > -1) {
        cart[existingProductIndex].inventry += 1 // Corrected 'inventry' to 'inventory'
    } else {
        cart.push({
            ...product, inventry: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

// Remove from cart function
export const removeFromCart = (productId: string) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

// Update cart quantity function
export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if (productIndex > -1) {
        cart[productIndex].inventry = quantity; // Corrected 'inventry' to 'inventory'
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

// Get cart items function
export const getCartItems = (): Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}
