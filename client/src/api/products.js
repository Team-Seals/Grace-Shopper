export async function fetchAllProducts() {
  try {
    const response = await fetch("/api/products");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function viewPost(id) {
  try {
    const response = await fetch(`/api/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
