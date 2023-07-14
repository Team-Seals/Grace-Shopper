export async function loginUser(username, password) {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();

    if (response.ok) {
      //successful login
      return result;
    } else {
      //login failed
      throw new Error(result.error);
    }
  } catch (error) {
    console.error(error);
    next;
  }
}

export async function fetchMe() {
  try {
    const response = await fetch("/api/users/me");
    const result = await response.json();
    console.log("RESULT FROM IN FETCH ME", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function logout() {
  try {
    console.log("click");
    const response = await fetch("/api/auth/logout");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
