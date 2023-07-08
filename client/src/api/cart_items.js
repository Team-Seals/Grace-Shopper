export async function getCartItems() {
  try {
    const response = await fetch("/api/cart_items");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
