import React, { useState } from 'react';
import { Calendar, BookOpen, Star, Clock, Wheat, Music, Home } from 'lucide-react';

const Festivals: React.FC = () => {
  const [selectedFestival, setSelectedFestival] = useState<number | null>(null);

  const festivals = [
    {
      id: 1,
      name: 'Sabbath',
      reference: 'Leviticus 23:3',
      description: 'A sacred day of rest and assembly—no work.',
      icon: Clock,
      color: 'from-purple-500 to-indigo-500',
      details: {
        timing: 'Every seventh day (Friday evening to Saturday evening)',
        significance: 'Weekly reminder of YAHUAH\'s creation and rest',
        observance: 'Complete rest from work, holy assembly, family time',
        prophetic: 'Points to the eternal rest in YAHUAH\'s kingdom'
      }
    },
    {
      id: 2,
      name: 'Passover & Unleavened Bread',
      reference: 'Leviticus 23:4-8',
      description: 'Commemorates Egypt\'s liberation; salvation & redemption.',
      icon: Star,
      color: 'from-red-500 to-pink-500',
      details: {
        timing: '14th day of first month (Nissan) for 7 days',
        significance: 'Remembers deliverance from Egypt, points to Yahusha\'s sacrifice',
        observance: 'Remove leaven, eat unleavened bread, Passover meal',
        prophetic: 'Yahusha as the Passover Lamb who takes away sin'
      }
    },
    {
      id: 3,
      name: 'First Fruits (Yom HaBikkurim)',
      reference: 'Leviticus 23:9-14',
      description: 'Barley harvest celebration; foreshadows Yahusha\'s resurrection.',
      icon: Wheat,
      color: 'from-green-500 to-emerald-500',
      details: {
        timing: 'Day after the Sabbath during Unleavened Bread',
        significance: 'First fruits of barley harvest offered to YAHUAH',
        observance: 'Wave offering of first fruits, no work',
        prophetic: 'Yahusha\'s resurrection as first fruits from the dead'
      }
    },
    {
      id: 4,
      name: 'Pentecost (Shavuot)',
      reference: 'Leviticus 23:15-22',
      description: 'Law given to Moses; Spirit given to the Church.',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      details: {
        timing: '50 days after First Fruits (late spring)',
        significance: 'Wheat harvest, giving of Torah at Sinai',
        observance: 'Wave offering of two loaves, holy assembly',
        prophetic: 'Outpouring of Holy Spirit, birth of the church'
      }
    },
    {
      id: 5,
      name: 'Trumpets (Yom Teruah)',
      reference: 'Leviticus 23:23-25',
      description: 'Day of trumpet blasts; call to repentance, God\'s sovereignty.',
      icon: Music,
      color: 'from-yellow-500 to-orange-500',
      details: {
        timing: '1st day of seventh month (Tishrei)',
        significance: 'Day of blowing trumpets, awakening call',
        observance: 'Trumpet blasts, holy assembly, no work',
        prophetic: 'Yahusha\'s return, resurrection of the dead'
      }
    },
    {
      id: 6,
      name: 'Atonement (Yom Kippur)',
      reference: 'Leviticus 23:26-32',
      description: 'Fasting and repentance; cleansing from sin.',
      icon: Star,
      color: 'from-indigo-500 to-purple-500',
      details: {
        timing: '10th day of seventh month (Tishrei)',
        significance: 'Day of atonement for sin, holiest day',
        observance: 'Complete fast, afflict souls, no work',
        prophetic: 'Yahusha\'s atoning sacrifice, final judgment'
      }
    },
    {
      id: 7,
      name: 'Tabernacles (Sukkot)',
      reference: 'Leviticus 23:33-44',
      description: 'Harvest festival anticipating God dwelling with us.',
      icon: Home,
      color: 'from-green-500 to-teal-500',
      details: {
        timing: '15th-21st day of seventh month (Tishrei)',
        significance: 'Final harvest, dwelling in temporary shelters',
        observance: 'Live in booths, wave four species, rejoice',
        prophetic: 'YAHUAH dwelling with His people, millennial kingdom'
      }
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Seven Festivals of YAHUAH
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The appointed times according to Leviticus 23
          </p>
        </div>
      </div>

      {/* Scripture Foundation */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            YAHUAH's Appointed Times
          </h2>
        </div>
        <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
          "These are YAHUAH's appointed festivals, the sacred assemblies you are to proclaim at their appointed times."
        </blockquote>
        <cite className="text-blue-600 dark:text-blue-400 font-semibold">
          Leviticus 23:4
        </cite>
      </div>

      {/* Festivals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivals.map((festival) => {
          const Icon = festival.icon;
          const isSelected = selectedFestival === festival.id;
          
          return (
            <div key={festival.id} className="space-y-4">
              <div 
                className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 cursor-pointer transition-all duration-300 ${
                  isSelected ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedFestival(isSelected ? null : festival.id)}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${festival.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {festival.name}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        {festival.reference}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {festival.description}
                  </p>
                  
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    {isSelected ? 'Hide Details' : 'Learn More'}
                  </button>
                </div>
              </div>

              {/* Detailed Information */}
              {isSelected && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Festival Details
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-1">Timing</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {festival.details.timing}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-1">Significance</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {festival.details.significance}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-1">Observance</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {festival.details.observance}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-1">Prophetic Meaning</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {festival.details.prophetic}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Prophetic Timeline */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Prophetic Timeline of the Festivals
        </h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white text-center">
                Spring Festivals (Fulfilled)
              </h4>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <p className="font-medium text-gray-900 dark:text-white">Passover</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Yahusha's crucifixion</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <p className="font-medium text-gray-900 dark:text-white">Unleavened Bread</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Yahusha's sinless life</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <p className="font-medium text-gray-900 dark:text-white">First Fruits</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Yahusha's resurrection</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <p className="font-medium text-gray-900 dark:text-white">Pentecost</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Holy Spirit outpouring</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white text-center">
                Fall Festivals (Future)
              </h4>
              <div className="space-y-3">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                  <p className="font-medium text-gray-900 dark:text-white">Trumpets</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Yahusha's return</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                  <p className="font-medium text-gray-900 dark:text-white">Atonement</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Final judgment</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                  <p className="font-medium text-gray-900 dark:text-white">Tabernacles</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Millennial kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <Calendar className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Celebrating YAHUAH's Appointed Times
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            These festivals are not just historical commemorations but prophetic rehearsals of YAHUAH's plan of redemption. They reveal His heart, His timing, and His promises. As we observe these appointed times, we align ourselves with His calendar and participate in His eternal purposes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-200 font-medium">
              Study Leviticus 23
            </button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
              Download Festival Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festivals;