
export const getChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch('/.netlify/functions/getChatResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      // Try to get a meaningful error from the function's response body
      const errorData = await response.json();
      throw new Error(errorData.response || `Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;

  } catch (error) {
    console.error("Error getting response from backend function:", error);
    if (error instanceof Error) {
        return error.message;
    }
    return "I'm sorry, I encountered a network error while processing your request. Please check your connection and try again.";
  }
};