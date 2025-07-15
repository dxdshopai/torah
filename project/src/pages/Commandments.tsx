import React from 'react';
import { Scroll, BookOpen, Heart, Shield } from 'lucide-react';

const Commandments: React.FC = () => {
  const commandments = [
    {
      number: 1,
      text: "You shall have no other gods before Me.",
      explanation: "YAHUAH alone is to be worshipped and served. No idols, false gods, or anything should take His place in our hearts."
    },
    {
      number: 2,
      text: "You shall not make idols or worship them.",
      explanation: "We must not create images to worship or bow down to any created thing instead of the Creator."
    },
    {
      number: 3,
      text: "You shall not take the name of YAHUAH your God in vain.",
      explanation: "The sacred name of YAHUAH must be treated with reverence and not used carelessly or in false oaths."
    },
    {
      number: 4,
      text: "Remember the Sabbath day, to keep it holy.",
      explanation: "The seventh day (Saturday) is set apart for rest and worship, following YAHUAH's example in creation."
    },
    {
      number: 5,
      text: "Honor your father and your mother.",
      explanation: "Respect and care for parents is fundamental to a righteous society and pleasing to YAHUAH."
    },
    {
      number: 6,
      text: "You shall not murder.",
      explanation: "Human life is sacred, created in YAHUAH's image, and must be protected and valued."
    },
    {
      number: 7,
      text: "You shall not commit adultery.",
      explanation: "Marriage covenant is sacred and sexual purity must be maintained according to YAHUAH's design."
    },
    {
      number: 8,
      text: "You shall not steal.",
      explanation: "Respect for others' property and honest dealings in all transactions are required."
    },
    {
      number: 9,
      text: "You shall not bear false witness against your neighbor.",
      explanation: "Truth-telling and honest testimony are essential for justice and community trust."
    },
    {
      number: 10,
      text: "You shall not covet.",
      explanation: "Contentment with what YAHUAH provides and not desiring what belongs to others leads to peace."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
          <Scroll className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            The Ten Commandments
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The foundation of YAHUAH's law given to Moses
          </p>
        </div>
      </div>

      {/* Scripture References */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Scripture References
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Exodus 20:1-17</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              The original giving of the Ten Commandments at Mount Sinai
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Deuteronomy 5:6-21</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Moses recounts the commandments to the new generation
            </p>
          </div>
        </div>
      </div>

      {/* Commandments List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          The Ten Commandments
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
          {commandments.map((commandment) => (
            <div key={commandment.number} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{commandment.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {commandment.text}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {commandment.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yahusha's Teaching */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Yahusha's Teaching on the Law
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic">
              "Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them. For truly I tell you, until heaven and earth disappear, not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law until everything is accomplished."
            </blockquote>
            <cite className="text-blue-600 dark:text-blue-400 font-semibold">
              Matthew 5:17-18
            </cite>
            <p className="text-gray-600 dark:text-gray-300">
              Yahusha came not to destroy the law but to show us how to walk in it perfectly. The Ten Commandments remain the foundation of righteous living for all who follow YAHUAH.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="text-center space-y-4">
          <Shield className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Walking in Obedience
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The Ten Commandments are not burdensome rules but loving instructions from our Creator. They show us how to love YAHUAH and love our neighbors, leading to life, peace, and blessing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium">
              Study More Scripture
            </button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
              Download Study Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commandments;