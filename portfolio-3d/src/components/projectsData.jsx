// src/data/projectsData.js
export const projects = [
  {
    id: "newsai",
    title: "NewsAI",
    description:"gemini-1.5-flash is best for fast, lightweight tasks like categorizing news, while gemini-1.5-pro is suited for deeper reasoning and high-quality text summarization",
    image: "/public/News-AI.png",
    tech: ["HTML5", "CSS3", "JavaScript (Vanilla)","Bootstrap / TailwindCSS","Python","Google Gemini 1.5","Django","BeautifulSoup4"],
    gradient: "from-purple-500/20 via-pink-500/20 to-blue-500/20",
    details: "🔹 1. Gemini 1.5 FlashBest for:Fast responsesLightweight tasksCost-efficient usageWhen to use in your project:Categorizing News Articles (Politics, Tech, Health, etc.)Quick filtering suggestionsKeyword extraction✅ Advantage: Runs faster and cheaper, so you can process many news articles quickly.🔹 2. Gemini 1.5 ProBest for:Complex reasoningHigher accuracyRich summarizationWhen to use in your project:Generating news summaries (detailed, accurate, well-structured summaries from scraped articles)Content analysis (like sentiment analysis, tone detection if you extend the project later)✅ Advantage: Produces high-quality text output, closer to human-like summaries.⚡ Suggested Usage in Your ProjectUse gemini-1.5-flash for:Categorizing scraped articlesExtracting tags/keywordsUse gemini-1.5-pro for:Summarizing full news articlesGenerating more refined descriptions for your news cards"  }, 
    {
      id: "IQtest",
      title: "IQ-Test",
      description:"A smart and engaging platform to challenge and measure your intelligence.",
      image: "/public/IQ-test.png",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-orange-500/20 via-yellow-500/20 to-red-500/20",
    details: "This project is a web-based IQ Test platform designed with HTML, CSS, and JavaScript. It features a clean and responsive layout, a navigation bar for easy access to different sections, and a visually appealing hero section with a background image.✨ Key FeaturesFixed Navigation Bar: Provides quick access to sections like FAQ, History, The Test, IQ TuneUps, and Contact Us.Hero Section: Full-screen background image with a bold tagline and a call-to-action “Take the Test” button.Responsive Design: Works seamlessly across desktop, tablet, and mobile devices.Interactive Test Section (extendable): Supports multiple-choice IQ test questions with scoring functionality.Clean Typography and Styling: Modern fonts and layout for a professional look."
  },
  {
    id: "RealEstate",
    title: "RealEstate ",
    description:"Real Estate Web Application that allows users to browse, save, and manage properties while enabling admins to add, edit, and update listings.",
    image: "/public/Real-estate.png",
    tech: ["React", "Axios","JWT (JSON Web Token)","Bootstrap", "MongoDB", "ExpressJS", "Tailwind CSS", "Framer Motion"],
    gradient: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
    details: "The Real Estate Web Application is a full-stack platform designed to simplify property management and enhance the property searching experience. It allows users to explore, view details, save favorite properties, and contact agents, while admins can add, edit, and manage property listings seamlessly.🔹 Key FeaturesUser FeaturesBrowse available properties with images and details.Save properties to profile for future reference.View property details with image carousel and pricing information.Contact agents directly through the platform.Secure login and authentication.Admin FeaturesAdd, edit, and delete property listings.Upload and manage multiple property images.Manage categories like Houses, Villas, Apartments, and Plots.Secure admin access with role-based authentication."
  }
]
