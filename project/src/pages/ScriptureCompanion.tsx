import React, { useState, useRef, useEffect } from 'react';
import { Send, Book, Bot, User, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  citations?: string[];
}

const ScriptureCompanion: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Shalom! I\'m your 24/7 Torah, Prophecy & Yahusha\'s Gospel companion. I can help you understand Torah, explore prophecy, and learn about Yahusha\'s teachings. Ask me about the commandments, festivals, dietary laws, or any questions about walking in obedience to YAHUAH. What would you like to explore today?',
      timestamp: new Date(),
      citations: []
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `Thank you for your question about "${input}". According to Torah and Yahusha's teachings, we can find guidance in Scripture. For example, Yahusha said, "If you love Me, you will keep My commandments" (John 14:15). This shows us that true love for Yahusha is demonstrated through obedience to YAHUAH's law, including the Torah given through Moses.`,
        timestamp: new Date(),
        citations: ['John 14:15', 'Exodus 20:1-17', 'Matthew 5:17-19']
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const quickQuestions = [
    "What does it mean to love Yahusha?",
    "Did Yahusha come to do away with the Law of Moses?",
    "What is end-time revival?",
    "How do I keep the Sabbath?",
    "What are the clean and unclean foods?",
    "When are the festivals of YAHUAH?"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            24/7 Torah, Prophecy & Yahusha Companion
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore Torah, prophecy and the testimony of Yahusha with your personal companion
          </p>
        </div>
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInput(question)}
                className="text-left p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors text-sm text-gray-700 dark:text-gray-300"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl ${
                message.type === 'user' ? 'order-2' : 'order-1'
              }`}>
                <div className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-blue-600' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl p-4 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    
                    {message.citations && message.citations.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-600">
                        <div className="flex items-center space-x-2 mb-2">
                          <Book className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            Scripture References:
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {message.citations.map((citation, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                            >
                              {citation}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {message.type === 'bot' && (
                      <div className="flex items-center space-x-2 mt-3">
                        <button
                          onClick={() => copyToClipboard(message.content)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-green-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-red-600 transition-colors">
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Form */}
        <div className="border-t border-gray-200 dark:border-slate-700 p-4">
          <form onSubmit={handleSubmit} className="flex space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Torah, prophecy, or Yahusha's teachings..."
              className="flex-1 px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScriptureCompanion;