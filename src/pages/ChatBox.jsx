import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { MdChat } from 'react-icons/md';

const FloatingChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const [steps, setSteps] = useState([
    { id: '1', message: '¡Hola! ¿En qué puedo ayudarte hoy?', trigger: '2' },
    { id: '2', options: [
      { value: 'option1', label: 'Cuéntame sobre tus servicios', trigger: '3' },
      { value: 'option2', label: '¿Cómo puedo contactarte?', trigger: '4' },
    ] },
    { id: '3', message: 'Ofrecemos una variedad de servicios, incluyendo...', end: true },
    { id: '4', message: 'Puedes contactarnos en soporte@ejemplo.com', end: true },
  ]);

  return (
    <ThemeProvider theme={{ 
      background: '#f5f8fb', 
      fontFamily: 'Arial, sans-serif', 
      headerBgColor: '#00883e', 
      headerFontColor: '#fff', 
      headerFontSize: '12px', 
      botBubbleColor: '#23262d', 
      botFontColor: '#fff', 
      userBubbleColor: '#fff', 
      userFontColor: '#4a4a4a',
    }}>
      <div style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 1000 }}>
        {isChatOpen ? (
          <ChatBot 
            steps={steps}
            width="250px"
            height="350px"
          />
        ) : (
          <MdChat onClick={handleToggleChat} style={{ fontSize: '30px', color: '#00883e', cursor: 'pointer' }} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default FloatingChatBox;
