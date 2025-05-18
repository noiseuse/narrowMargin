const API_BASE_URL = "https://narrowmargin.onrender.com";

export async function fetchIssueData(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/issue/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ slug }),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error searching songs:", error);
    return { error: "Failed to fetch search results." };
  }
}
