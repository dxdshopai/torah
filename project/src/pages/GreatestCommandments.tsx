import React from 'react';
import { Star, Heart, Users, BookOpen, ArrowRight } from 'lucide-react';

const GreatestCommandments: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
          <Star className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            The Two Greatest Commandments
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The Matrix of Love - Matthew 22:37-40
          </p>
        </div>
      </div>

      {/* Scripture Context */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Yahusha's Teaching
          </h2>
        </div>
        <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
          "Teacher, which is the greatest commandment in the Law?" Jesus replied: "Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment. And the second is like it: Love your neighbor as yourself. All the Law and the Prophets hang on these two commandments."
        </blockquote>
        <cite className="text-blue-600 dark:text-blue-400 font-semibold">
          Matthew 22:36-40
        </cite>
      </div>

      {/* The Matrix */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          The Love Matrix
        </h2>
        
        {/* First Commandment */}
        <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-8 text-white">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">First & Greatest Commandment</h3>
              <p className="text-xl font-semibold mb-4">
                "Love YAHUAH your God with all your heart, soul, and mind"
              </p>
              <p className="text-pink-100 max-w-2xl mx-auto">
                This is the foundation of all righteousness. Complete devotion to YAHUAH with every aspect of our being - emotions, spirit, and intellect.
              </p>
            </div>
          </div>
        </div>

        {/* Connection Arrow */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
            <ArrowRight className="w-6 h-6" />
            <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>

        {/* Second Commandment */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Second Commandment</h3>
              <p className="text-xl font-semibold mb-4">
                "Love your neighbor as yourself"
              </p>
              <p className="text-purple-100 max-w-2xl mx-auto">
                Our love for YAHUAH naturally flows into love for others. We treat others with the same care and respect we desire for ourselves.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How They Connect */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          How These Commandments Work Together
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
              <Heart className="w-5 h-5 mr-2 text-pink-600" />
              Loving YAHUAH First
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Worship Him alone (no idols)</li>
              <li>• Honor His name</li>
              <li>• Keep His Sabbath</li>
              <li>• Obey His commandments</li>
              <li>• Trust in His provision</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-600" />
              Loving Others
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Honor parents</li>
              <li>• Protect life (no murder)</li>
              <li>• Maintain purity (no adultery)</li>
              <li>• Respect property (no stealing)</li>
              <li>• Speak truth (no false witness)</li>
              <li>• Be content (no coveting)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Foundation */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            "All the Law and the Prophets Hang on These Two"
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Yahusha revealed that every commandment in Torah, every teaching of the prophets, and every principle of righteous living can be understood through the lens of love - love for YAHUAH and love for others. When we walk in this love, we fulfill the heart of the law.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Heart</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Our emotions and desires aligned with YAHUAH
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Soul</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Our spiritual life and relationship with YAHUAH
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mind</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Our thoughts and understanding submitted to YAHUAH
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="text-center space-y-4">
          <Star className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Living the Greatest Commandments
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These two commandments are not separate from the Ten Commandments or Torah - they are the heart that gives life to all of YAHUAH's instructions. When we love Him completely and love others genuinely, we naturally walk in His ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-xl hover:from-pink-700 hover:to-red-700 transition-all duration-200 font-medium">
              Study the Ten Commandments
            </button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
              Learn About Torah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatestCommandments;