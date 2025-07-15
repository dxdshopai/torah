import React from 'react';
import { Clock, Sun, Moon, BookOpen, Heart, Star } from 'lucide-react';

const Sabbath: React.FC = () => {
  const sabbathActivities = [
    { category: 'Rest', items: ['Cease from work', 'Rest your body', 'Let servants and animals rest', 'Peaceful activities'] },
    { category: 'Worship', items: ['Gather for assembly', 'Read Scripture', 'Sing praises', 'Prayer and meditation'] },
    { category: 'Family', items: ['Spend time with family', 'Teach children Torah', 'Share meals together', 'Fellowship with believers'] },
    { category: 'Study', items: ['Study Torah', 'Discuss YAHUAH\'s word', 'Learn about His ways', 'Reflect on His goodness'] }
  ];

  const sabbathBlessings = [
    'Physical rest and restoration',
    'Spiritual renewal and connection with YAHUAH',
    'Family bonding and unity',
    'Freedom from worldly concerns',
    'Time for reflection and gratitude',
    'Community fellowship and worship'
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
          <Clock className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            The True Sabbath Day
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Seventh Day - Saturday, the sacred day of rest
          </p>
        </div>
      </div>

      {/* Creation Foundation */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Foundation in Creation
          </h2>
        </div>
        <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
          "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done."
        </blockquote>
        <cite className="text-blue-600 dark:text-blue-400 font-semibold">
          Genesis 2:2-3
        </cite>
      </div>

      {/* Sabbath Timeline */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          When is the Sabbath?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto">
              <Sun className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Friday Evening</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Sabbath begins at sunset on Friday (6th day evening)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              "There was evening, and there was morning—the first day" (Genesis 1:5)
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
              <Moon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Saturday Evening</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Sabbath ends at sunset on Saturday (7th day evening)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              24-hour period from evening to evening
            </p>
          </div>
        </div>
      </div>

      {/* The Fourth Commandment */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
            <Star className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">The Fourth Commandment</h3>
            <blockquote className="text-xl font-semibold mb-4">
              "Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to YAHUAH your God. On it you shall not do any work, neither you, nor your son or daughter, nor your male or female servant, nor your animals, nor any foreigner residing in your towns."
            </blockquote>
            <cite className="text-indigo-100">
              Exodus 20:8-10
            </cite>
          </div>
        </div>
      </div>

      {/* Sabbath Activities */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          How to Keep the Sabbath Holy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sabbathActivities.map((activity, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {activity.category}
              </h3>
              <ul className="space-y-2">
                {activity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sabbath Blessings */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
        <div className="text-center space-y-6">
          <Heart className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Blessings of the Sabbath
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {sabbathBlessings.map((blessing, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {blessing}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yahusha and the Sabbath */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Yahusha and the Sabbath
        </h3>
        
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <blockquote className="text-gray-700 dark:text-gray-300 italic mb-2">
              "The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath."
            </blockquote>
            <cite className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
              Mark 2:27-28
            </cite>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
            <blockquote className="text-gray-700 dark:text-gray-300 italic mb-2">
              "As was his custom, he went into the synagogue on the Sabbath day, and stood up to read."
            </blockquote>
            <cite className="text-green-600 dark:text-green-400 font-semibold text-sm">
              Luke 4:16
            </cite>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Yahusha kept the Sabbath and taught that it was made for our benefit. He is Lord of the Sabbath, showing us how to properly honor this holy day.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="text-center space-y-4">
          <Clock className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Enter His Rest
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The Sabbath is YAHUAH's gift to us - a weekly reminder of His creation, His provision, and His love. It's a time to step away from the busyness of life and focus on what truly matters: our relationship with Him and our loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium">
              Learn More About Sabbath
            </button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
              Download Sabbath Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sabbath;