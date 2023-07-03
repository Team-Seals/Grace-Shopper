export async function fetchAllCategories() {
  try {
    const response = await fetch("/api/categories");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
