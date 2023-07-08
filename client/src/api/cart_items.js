export async function getCartItems() {
    try {
      const response = await fetch("/api/categories");
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  export function deleteCartItem()
   try{
    const response = await fetch("/api/cartitems/:cartItemId");
    const result = await response.json();
    return result;
   } catch (error) {console.error(error)};
   