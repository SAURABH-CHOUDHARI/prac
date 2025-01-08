import Main from './components/Main'
import { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const App = () => {
  const [resulti, setResulti] = useState('')

  
  const getdata = async (imageUrl , prompti) => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyCXLs92vZm5egmwcNXPFgF2Sga_rY8PQt4");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      if (!imageUrl) return;

      // For CDN images, we need to fetch them first
      const response = await fetch(imageUrl);
      const imageBlob = await response.blob();

      // Convert blob to base64
      const base64data = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(imageBlob);
      });

      const imagePart = {
        inlineData: {
          data: base64data,
          mimeType: imageBlob.type // This will automatically detect the correct mime type
        }
      };
      
      const prompt = prompti;       
      
      const result = await model.generateContent([prompt, imagePart]);
      setResulti(result.response.text());
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };


  useEffect(() => {
    getdata();
  }, []);

  const getPrompt = (path,prompti) => {
      getdata(path ,prompti);
  }
  

  return (
    <div className='h-screen w-screen bg-gray-100 flex items-center flex-col p-10'>
      <Main getPrompt={getPrompt} result={resulti}  />
    </div>
  );
};

export default App;