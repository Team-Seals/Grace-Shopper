export async function getCartItems() {
  try {
    const response = await fetch("/api/cart_items");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCartItem(product_id, order_id) {
  try {
    const response = await fetch(`/api/cart_items/${product_id}/${order_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function addItemToCart(product_id, quantity) {
  try {
    const response = await fetch("/api/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id, quantity }),
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
