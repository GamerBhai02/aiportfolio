
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Send, Bot, User, Loader } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import type { ChatMessage } from '../types';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot = ({ isOpen, onClose }: ChatbotProps): JSX.Element => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: "Hello! I'm Abu Talha's AI assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
        setTimeout(() => scrollToBottom(), 100);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponseText = await getChatResponse(input);
      const botMessage: ChatMessage = { sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'bot', text: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-4 sm:right-6 w-[calc(100%-2rem)] sm:w-full max-w-sm h-[70vh] max-h-[600px] bg-brand-dark border border-gray-700 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-700 flex-shrink-0">
            <div className="flex items-center space-x-2">
                <Bot className="text-brand-primary" />
                <h3 className="font-bold text-white">AI Assistant</h3>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close chat">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center flex-shrink-0"><Bot size={18} /></div>}
                <div className={`max-w-xs md:max-w-sm rounded-xl px-4 py-2 ${msg.sender === 'user' ? 'bg-brand-primary text-white rounded-br-none' : 'bg-gray-800 text-gray-200 rounded-bl-none'}`}>
                  <div className="text-sm prose prose-invert prose-p:my-0" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
                </div>
                 {msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0"><User size={18} /></div>}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center flex-shrink-0"><Bot size={18} /></div>
                  <div className="max-w-xs md:max-w-sm rounded-xl px-4 py-2 bg-gray-800 text-gray-200 rounded-bl-none">
                      <Loader className="animate-spin text-white" size={20} />
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-gray-900 border-t border-gray-700 flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question..."
                className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 pl-4 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-primary rounded-full text-white hover:bg-brand-secondary disabled:bg-gray-600 transition-colors" aria-label="Send message">
                <Send size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;