import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { personalInfo, technicalSkills, softSkills, experience, education, projects, certifications, interests, languages } from '../constants';

// IMPORTANT: The API key must be set in the environment variables.
// Do not hardcode the API key in the code.
const apiKey = process.env.API_KEY;
if (!apiKey) {
    console.error("API_KEY environment variable not set.");
}
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

const portfolioDataString = `
  Name: ${personalInfo.name}
  Title: ${personalInfo.title}
  Objective: ${personalInfo.objective}
  About: ${personalInfo.about}
  Technical Skills: ${technicalSkills.join(', ')}
  Soft Skills: ${softSkills.join(', ')}
  Experience: ${experience.map(exp => `${exp.role} at ${exp.company} (${exp.period}): ${exp.description}`).join('\n')}
  Education: ${education.map(edu => `${edu.degree} from ${edu.institution} (${edu.period}, ${edu.grade})`).join('\n')}
  Projects: ${projects.map(proj => `${proj.title}: ${proj.description}`).join('\n')}
  Certifications: ${certifications.map(cert => `${cert.title} from ${cert.issuer}`).join('\n')}
  Interests: ${interests.join(', ')}
  Languages: ${languages.join(', ')}
  Contact Email: ${personalInfo.email}
  LinkedIn: ${personalInfo.linkedin}
  GitHub: ${personalInfo.github}
`;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my connection to my brain is not configured correctly. The site owner needs to set up the API key.";
  }

  const prompt = `
    You are a helpful, friendly, and professional AI assistant for Abu Talha Ansari, an AI/ML student and enthusiast. 
    Your goal is to answer questions about his skills, experience, and projects.
    First, try to answer based *only* on the information provided below. 
    If the information is not available in the context (e.g., recent activities, specific project details not listed, or general knowledge questions), you can use your search capabilities to find the answer from the web, particularly from his public LinkedIn and GitHub profiles.
    Do not invent any information or discuss your own nature as an AI. 
    If you still cannot find the answer, politely say that you were unable to find information on that topic.
    Keep your answers concise and informative. Format your responses with markdown for readability (e.g., use bullet points for lists).

    Here is the information about Abu Talha Ansari:
    ---
    ${portfolioDataString}
    ---

    Now, please answer the following question from a visitor to his portfolio website: "${userMessage}"
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{googleSearch: {}}],
      },
    });
    
    let responseText = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;

    if (groundingChunks && groundingChunks.length > 0) {
      const uniqueSources = new Map<string, string>();
      groundingChunks.forEach((chunk: any) => {
        if (chunk.web && chunk.web.uri && chunk.web.title) {
          uniqueSources.set(chunk.web.uri, chunk.web.title);
        }
      });

      if (uniqueSources.size > 0) {
        let sourcesHtml = '<br /><br /><strong>Sources:</strong><ul>';
        uniqueSources.forEach((title, uri) => {
          sourcesHtml += `<li><a href="${uri}" target="_blank" rel="noopener noreferrer" style="color: #a78bfa; text-decoration: underline;">${title}</a></li>`;
        });
        sourcesHtml += '</ul>';
        // The response text is markdown, so we need to add the HTML part to it.
        // It will be rendered via dangerouslySetInnerHTML in the component.
        responseText += sourcesHtml;
      }
    }

    return responseText;

  } catch (error) {
    console.error("Error getting response from Gemini API:", error);
    return "I'm sorry, I encountered an error while processing your request. Please try again later.";
  }
};