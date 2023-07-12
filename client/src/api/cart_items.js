export async function getCartItems() {
  try {
    const response = await fetch("/api/cart_items");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCartItem(id) {
  try {
    const response = await fetch(`/api/cart_items/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function addItemToCart(order_id, product_id, quantity, price) {
  try {
    const response = await fetch("/api/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order_id, product_id, quantity, price }),
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
