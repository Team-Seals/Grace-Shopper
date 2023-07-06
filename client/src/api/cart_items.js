export async function getCartItems() {
    try {
      const response = await fetch("/api/categories");
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  