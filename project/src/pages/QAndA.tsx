import React, { useState } from 'react';
import { HelpCircle, BookOpen, Heart, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

const QAndA: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "What does 'revival' mean?",
      answer: "Revival means reawakening or restoring something that was once alive but has become neglected, forgotten, or dormant. In a spiritual context, revival is the restoration of spiritual life, passion, and obedience to YAHUAH that may have grown cold or been abandoned.",
      category: "Revival",
      icon: Heart
    },
    {
      id: 2,
      question: "What is 'end-time revival'?",
      answer: "End-time revival refers to the restoration that must take place among believers in YAHUAH before His kingdom is fully established. This revival involves believers returning to His laws, commandments, and appointed times while continuing in the testimony of Yahusha. It's a restoration of the whole counsel of YAHUAH - both Torah and the Gospel.",
      category: "Revival",
      icon: Lightbulb
    },
    {
      id: 3,
      question: "Did Yahusha come to do away with the Law of Moses?",
      answer: "No, Yahusha explicitly stated: 'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them. For truly I tell you, until heaven and earth disappear, not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law until everything is accomplished' (Matthew 5:17-18). Yahusha came to show us how to properly walk in the Law through love and the power of the Holy Spirit.",
      category: "Law & Gospel",
      icon: BookOpen
    },
    {
      id: 4,
      question: "What does it mean to love Yahusha (Jesus)?",
      answer: "Yahusha Himself answered this question: 'If you love Me, you will keep My commandments' (John 14:15). Love for Yahusha is demonstrated through obedience to His commands, which include the commandments given through Moses. True love is not just emotional feeling but active obedience to YAHUAH's instructions.",
      category: "Love & Obedience",
      icon: Heart
    },
    {
      id: 5,
      question: "Did the Law start with Moses?",
      answer: "No, the Law existed before Moses. We see evidence of YAHUAH's laws from the beginning: Cain knew murder was wrong, Noah understood clean and unclean animals, Abraham kept YAHUAH's commandments and laws (Genesis 26:5), and the Sabbath was established at creation (Genesis 2:2-3). Moses was given the written form of laws that already existed in YAHUAH's heart and had been partially revealed to the patriarchs.",
      category: "Law & History",
      icon: BookOpen
    },
    {
      id: 6,
      question: "Why should we keep the festivals of YAHUAH?",
      answer: "The festivals are YAHUAH's appointed times (Leviticus 23:4) that reveal His plan of redemption and His character. They are prophetic rehearsals that teach us about Yahusha's first and second coming. They are called 'forever' statutes and help us align with YAHUAH's calendar rather than man-made traditions. Yahusha Himself observed these festivals.",
      category: "Festivals",
      icon: BookOpen
    },
    {
      id: 7,
      question: "What about the dietary laws - are they still relevant?",
      answer: "Yes, the dietary laws in Leviticus 11 remain relevant. YAHUAH declared certain animals clean and unclean for food, and these distinctions are based on His wisdom for our health and holiness. Yahusha never changed these laws, and the vision Peter received in Acts 10 was about accepting Gentiles into the faith, not about changing food laws (as the context clearly shows).",
      category: "Dietary Laws",
      icon: BookOpen
    },
    {
      id: 8,
      question: "How do we balance grace and law?",
      answer: "Grace and law are not opposites but work together. Grace gives us the power to obey YAHUAH's law through the Holy Spirit, while the law shows us how to live in a way that pleases Him. Grace doesn't eliminate the need for obedience; it enables obedience. As Paul said, 'Do we then make void the law through faith? Certainly not! On the contrary, we establish the law' (Romans 3:31).",
      category: "Grace & Law",
      icon: Heart
    }
  ];

  const categories = ['All', 'Revival', 'Law & Gospel', 'Love & Obedience', 'Law & History', 'Festivals', 'Dietary Laws', 'Grace & Law'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredQuestions = selectedCategory === 'All' 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Questions & Answers
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Understanding revival, law, and Yahusha's teachings
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Seeking Truth in Scripture
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          These questions and answers are designed to help you understand the relationship between Torah (Law) and the Gospel, the meaning of true revival, and how to walk in obedience to YAHUAH while following Yahusha. All answers are grounded in Scripture and seek to present the whole counsel of YAHUAH's Word.
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {filteredQuestions.map((qa) => {
          const Icon = qa.icon;
          const isOpen = openQuestion === qa.id;
          
          return (
            <div key={qa.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
              <button
                onClick={() => toggleQuestion(qa.id)}
                className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {qa.question}
                      </h3>
                      <span className="text-sm text-teal-600 dark:text-teal-400">
                        {qa.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              
              {isOpen && (
                <div className="px-6 pb-6">
                  <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 ml-14">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {qa.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Call to Study */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <BookOpen className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Continue Your Study
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            These questions are just the beginning. We encourage you to search the Scriptures daily, like the noble Bereans (Acts 17:11), to see if these things are true. Study both Torah and the Gospel, for they work together to reveal YAHUAH's complete plan of redemption.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-200 font-medium">
              Ask a Question
            </button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
              Study Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAndA;