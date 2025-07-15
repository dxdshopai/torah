import React, { useState } from 'react';
import { Baby, Heart, Star, BookOpen, Music, Palette, Play, Download } from 'lucide-react';

const Kids: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState('all');

  const kidsActivities = [
    {
      id: 1,
      title: 'Ten Commandments for Kids',
      ageGroup: '6-12',
      description: 'Learn YAHUAH\'s ten special rules in a fun and easy way',
      type: 'Interactive Story',
      duration: '15 min',
      color: 'from-purple-400 to-purple-500',
      icon: Star
    },
    {
      id: 2,
      title: 'Noah\'s Ark Adventure',
      ageGroup: '3-8',
      description: 'Discover clean and unclean animals with Noah',
      type: 'Story & Game',
      duration: '20 min',
      color: 'from-blue-400 to-blue-500',
      icon: Heart
    },
    {
      id: 3,
      title: 'Sabbath Day Fun',
      ageGroup: '4-10',
      description: 'Learn why Saturday is YAHUAH\'s special day of rest',
      type: 'Activity Book',
      duration: '25 min',
      color: 'from-green-400 to-green-500',
      icon: BookOpen
    },
    {
      id: 4,
      title: 'Festival Celebrations',
      ageGroup: '5-12',
      description: 'Explore YAHUAH\'s seven special celebrations',
      type: 'Interactive Guide',
      duration: '30 min',
      color: 'from-orange-400 to-orange-500',
      icon: Music
    },
    {
      id: 5,
      title: 'David and Goliath',
      ageGroup: '4-10',
      description: 'How a young boy trusted YAHUAH and won',
      type: 'Animated Story',
      duration: '18 min',
      color: 'from-red-400 to-red-500',
      icon: Star
    },
    {
      id: 6,
      title: 'Moses and the Burning Bush',
      ageGroup: '5-11',
      description: 'When YAHUAH called Moses to lead His people',
      type: 'Interactive Story',
      duration: '22 min',
      color: 'from-yellow-400 to-yellow-500',
      icon: BookOpen
    }
  ];

  const ageGroups = ['all', '3-5', '6-8', '9-12'];

  const filteredActivities = selectedAge === 'all' 
    ? kidsActivities 
    : kidsActivities.filter(activity => {
        const [min, max] = activity.ageGroup.split('-').map(Number);
        const [selectedMin, selectedMax] = selectedAge.split('-').map(Number);
        return min <= selectedMax && max >= selectedMin;
      });

  const featuredContent = [
    {
      title: 'Bible Heroes Collection',
      description: 'Meet amazing people who loved YAHUAH',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      type: 'Story Series'
    },
    {
      title: 'Songs of Praise',
      description: 'Sing beautiful songs to YAHUAH',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      type: 'Music & Songs'
    },
    {
      title: 'Coloring & Crafts',
      description: 'Creative activities about Bible stories',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      type: 'Arts & Crafts'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
          <Baby className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Kids Corner
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Fun ways for children to learn about YAHUAH and His Word
          </p>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-6">
        <div className="text-center space-y-4">
          <Heart className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Welcome, Little Ones!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            YAHUAH loves children very much! Here you can learn about His wonderful stories, His special days, and how much He cares for you. Everything here is made just for kids like you!
          </p>
        </div>
      </div>

      {/* Featured Content */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Popular with Kids
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {content.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {content.description}
                </p>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-200 font-medium">
                  <Play className="w-4 h-4" />
                  <span>Let's Play!</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Age Filter */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Choose Your Age Group
        </h3>
        <div className="flex flex-wrap gap-3">
          {ageGroups.map(age => (
            <button
              key={age}
              onClick={() => setSelectedAge(age)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedAge === age
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              {age === 'all' ? 'All Ages' : `Ages ${age}`}
            </button>
          ))}
        </div>
      </div>

      {/* Activities Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Fun Activities & Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-1 rounded-full">
                        Ages {activity.ageGroup}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {activity.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                      {activity.type}
                    </span>
                    <span>{activity.duration}</span>
                  </div>
                  
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-200 font-medium">
                    <Play className="w-4 h-4" />
                    <span>Start Fun!</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Parent Resources */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            For Parents & Teachers
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Help your children grow in their love for YAHUAH with these resources designed to support family worship and learning at home.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Family Guides</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              <Palette className="w-4 h-4" />
              <span>Printables</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              <Music className="w-4 h-4" />
              <span>Songs & Music</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bible Verse for Kids */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="text-center space-y-4">
          <Star className="w-12 h-12 text-yellow-500 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Special Verse for Kids
          </h3>
          <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic">
            "Children, obey your parents in everything, for this pleases the Lord."
          </blockquote>
          <cite className="text-blue-600 dark:text-blue-400 font-semibold">
            Colossians 3:20
          </cite>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            YAHUAH wants children to listen to their parents and learn His ways. When we obey and love Him, it makes His heart happy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kids;