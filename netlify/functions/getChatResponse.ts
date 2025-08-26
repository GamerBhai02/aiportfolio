
import type { Handler } from "@netlify/functions";
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// --- START: Data and Types copied from src/ to make the function self-contained ---

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}

export interface Certification {
  title:string;
  issuer: string;
  date: string;
  skills: string[];
}

export const personalInfo = {
  name: "Abu Talha Ansari",
  title: "AI & ML Undergraduate",
  location: "Bengaluru, Karnataka, India",
  objective: "Energetic and adaptable AI & ML undergraduate with experience in end-to-end development of AI solutions, including e-commerce classification, financial NLP pipelines, and smart systems. Aiming to bring technical depth, creativity, and problem-solving skills to dynamic teams tackling next-gen challenges.",
  about: "I'm a curious and purpose-driven learner, currently pursuing my third year in Artificial Intelligence and Machine Learning. My interest in technology goes far beyond academic boundaries — I see AI not just as a tool, but as a bridge between logic and real-life impact. What defines me most is my ability to adapt quickly, learn independently, and apply what I know with clarity and creativity. Whether it's working on new ideas, simplifying complex concepts, or diving deep into problem-solving — I bring a balance of focus, creativity, and practicality. Over the last few years, I've developed a strong command over machine learning, deep learning, data analysis, and programming, constantly pushing myself to improve through hands-on experience. I'm equally comfortable collaborating with a team or building something on my own from scratch.",
  email: "scientificallystarabu@gmail.com",
  phone: "+918147598020",
  linkedin: "https://www.linkedin.com/in/gamerbhai02",
  github: "https://github.com/GamerBhai02",
  twitter: "https://www.x.com/gamerbhai02",
  resumeUrl: "/Abu_Talha_Ansari_Resume.pdf",
};

export const technicalSkills = [
  "Python", "C++", "SQL", "JavaScript",
  "React.js", "HTML", "CSS",
  "Machine Learning & Deep Learning",
  "Natural Language Processing",
  "TensorFlow", "Keras",
  "MySQL", "MongoDB", "SQLite",
  "Microsoft Power BI", "Excel"
];

export const softSkills = [
  "Problem Solving",
  "Communication & Teamwork",
  "Creativity & Adaptability",
  "Time Management",
  "Presentation Skills",
  "Critical Thinking"
];

export const experience: ExperienceItem[] = [
  {
    role: "Summer Intern (E-commerce Text Classification Project)",
    company: "AIQuantum Smart Solutions Private Limited",
    period: "Apr 2025 - May 2025",
    description: "Designed and implemented deep learning models (LSTM, BI-LSTM, GRU, CNN-LSTM, Attention LSTM) to classify product descriptions. Gained hands-on experience in AI/ML-driven problem solving and research-based implementation, achieving over 90% accuracy and improving category tagging reliability.",
    skills: ["Deep Learning", "Text Classification", "TensorFlow", "Keras", "NLP"]
  }
];

export const education: EducationItem[] = [
  {
    institution: "New Horizon College of Engineering",
    degree: "BE in AIML",
    period: "2023 - 2027",
    grade: "CGPA: 9.71"
  },
  {
    institution: "Cambridge PU College",
    degree: "PUC",
    period: "2021 - 2023",
    grade: "Percentage: 94.16"
  },
  {
    institution: "SJES Central School",
    degree: "SSLC (CBSE)",
    period: "Completed 2021",
    grade: "Percentage: 86.5"
  }
];

export const projects: Project[] = [
  {
    title: "Smart Power Grid Theft Detection Using AI",
    description: "Developed an AI-based anomaly detection system using smart meter data to identify patterns of electricity theft, increasing detection accuracy by 35% compared to traditional methods.",
    tags: ["Python", "Scikit-learn", "Isolation Forest", "Time Series Analysis"],
    repoUrl: "https://github.com/GamerBhai02/Smart-Power-Grid-Theft-Detection-Using-AI",
  },
  {
    title: "NewsSense: Why Is My Fund Down?",
    description: "Built a system to analyze mutual fund drops by linking financial data to real-world news using NLP and semantic search. Finalist among top submissions in the hackathon.",
    tags: ["Python", "Alpha Vantage API", "Sentence Transformers", "FAISS"],
    repoUrl: "https://github.com/GamerBhai02/NewsSense-Why-Is-My-Fund-Down",
  },
  {
    title: "AI-Powered Travel Packing Assistant (PackPal)",
    description: "Created an AI assistant that recommends packing lists based on destination, weather, and duration, improving packing efficiency by 40% in user tests.",
    tags: ["Python", "Streamlit", "OpenAI API", "Weather API"],
    liveUrl: "https://packpal-ai.streamlit.app/",
    repoUrl: "https://github.com/GamerBhai02/PackPal",
  },
  {
    title: "Fish-Schooling-Inspired Traffic Simulation",
    description: "Simulated real-time traffic behavior using fish schooling algorithms to optimize vehicular flow, demonstrating a 25% decrease in congestion.",
    tags: ["Python", "Pygame", "NumPy"],
    repoUrl: "https://github.com/GamerBhai02/Fish-Schooling-Inspired-Traffic-Simulation",
  },
  {
    title: "E-commerce Text Classification",
    description: "Implemented deep learning models (LSTM, BI-LSTM, etc.) to classify product descriptions, achieving over 90% accuracy with optimized architectures.",
    tags: ["Python", "TensorFlow", "Keras", "NLP", "FastText"],
    repoUrl: "https://github.com/GamerBhai02/E-commerce-Text-Classification",
  },
  {
    title: "AI-Enhanced Retail Experience",
    description: "Led development of an AI-powered demo for personal shopping, auto product videos, and eco-score evaluation. Delivered a fully functional prototype.",
    tags: ["Python", "React", "NLP", "OpenAI", "FFMPEG"],
    repoUrl: "https://github.com/GamerBhai02",
  }
];

export const certifications: Certification[] = [
    { title: "Gen AI Academy Completion Certificate", issuer: "Hack2skill", date: "Aug 2025", skills: ["Google Gemini", "Generative AI", "Google Cloud Platform (GCP)"] },
    { title: "Agents & Agentic AI Fundamentals", issuer: "Intel Corporation", date: "Jul 2025", skills: ["AI Agents", "Agentic AI"] },
    { title: "Build Real World AI Applications with Gemini and Imagen Skill Badge", issuer: "Google", date: "Jul 2025", skills: ["Gemini", "Imagen", "AI Development"] },
    { title: "Develop GenAI Apps with Gemini and Streamlit Skill Badge", issuer: "Google", date: "Jul 2025", skills: ["Natural Language Processing (NLP)", "Gemini", "Streamlit"] },
    { title: "Problem Solving and Ideation", issuer: "Institutions Innovation Council", date: "Nov 2024", skills: ["Problem Solving", "Creative Thinking"] },
    { title: "Python Course for Beginners: Mastering the Essentials", issuer: "Scaler", date: "May 2025", skills: ["Python"] },
];

export const interests = [
    "Exploring advancements in Artificial Intelligence and emerging tech",
    "Surfing through the internet for learning and research purposes",
    "Participating in community events and team-building activities",
    "Playing outdoor sports like cricket and badminton",
    "Volunteering and contributing to social causes",
    "Reading tech blogs and following AI research trends"
];

export const languages = ["English", "Hindi", "Kannada", "Urdu"];

// --- END: Data and Types ---


const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY environment variable not set in Netlify.");
    return {
      statusCode: 500,
      body: JSON.stringify({ response: "I'm sorry, my connection to my brain is not configured correctly. The site owner needs to set up the API key." }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const userMessage = body.message;

    if (!userMessage) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Bad Request: Missing message in request body.' }),
      };
    }

    const ai = new GoogleGenAI({ apiKey });

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

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
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
        responseText += sourcesHtml;
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ response: responseText }),
    };

  } catch (error) {
    console.error("Error in serverless function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ response: "I'm sorry, I encountered an error while processing your request. Please try again later." }),
    };
  }
};

export { handler };
