export async function createOrder(user_id, status) {
  try {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application.jscon",
      },
      body: JSON.stringify(user_id, status),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserCart() {
  try {
    const response = await fetch("/api/orders/cart");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
