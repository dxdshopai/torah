import React, { useState } from 'react';
import { BookOpen, Search, Clock, Users, Star, Play, Download, ExternalLink } from 'lucide-react';

const BibleStudy: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const studyTopics = [
    {
      id: 1,
      title: 'Understanding Torah and Gospel',
      category: 'Torah',
      description: 'Explore how Torah and the Gospel work together in YAHUAH\'s plan of redemption',
      duration: '45 min',
      difficulty: 'Beginner',
      lessons: 8,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'The Seven Festivals Deep Dive',
      category: 'Festivals',
      description: 'Comprehensive study of YAHUAH\'s appointed times and their prophetic significance',
      duration: '60 min',
      difficulty: 'Intermediate',
      lessons: 12,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      title: 'Walking in the Ten Commandments',
      category: 'Commandments',
      description: 'Practical application of YAHUAH\'s moral law in daily life',
      duration: '30 min',
      difficulty: 'Beginner',
      lessons: 10,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Sabbath: Rest and Worship',
      category: 'Sabbath',
      description: 'Understanding the true Sabbath and how to honor YAHUAH\'s day of rest',
      duration: '40 min',
      difficulty: 'Beginner',
      lessons: 6,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 5,
      title: 'Clean and Unclean: Dietary Laws',
      category: 'Dietary',
      description: 'Biblical principles of clean eating according to Leviticus 11',
      duration: '35 min',
      difficulty: 'Beginner',
      lessons: 5,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 6,
      title: 'End-Time Revival and Restoration',
      category: 'Prophecy',
      description: 'Understanding the end-time revival and return to YAHUAH\'s ways',
      duration: '50 min',
      difficulty: 'Advanced',
      lessons: 15,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 7,
      title: 'Yahusha in the Torah',
      category: 'Messiah',
      description: 'Discovering Yahusha throughout the Old Testament scriptures',
      duration: '55 min',
      difficulty: 'Intermediate',
      lessons: 20,
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 8,
      title: 'Prayer and Worship in Hebrew Roots',
      category: 'Worship',
      description: 'Biblical patterns of prayer and worship according to Scripture',
      duration: '40 min',
      difficulty: 'Intermediate',
      lessons: 8,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const categories = ['all', 'Torah', 'Festivals', 'Commandments', 'Sabbath', 'Dietary', 'Prophecy', 'Messiah', 'Worship'];

  const filteredTopics = selectedCategory === 'all' 
    ? studyTopics 
    : studyTopics.filter(topic => topic.category === selectedCategory);

  const featuredStudies = [
    {
      title: 'Torah 101: Foundation Course',
      description: 'Perfect starting point for understanding YAHUAH\'s law',
      image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      duration: '2 hours'
    },
    {
      title: 'Festivals of YAHUAH Explained',
      description: 'Complete guide to the seven appointed times',
      image: 'https://images.pexels.com/photos/1089549/pexels-photo-1089549.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      duration: '3 hours'
    },
    {
      title: 'Living the Sabbath Life',
      description: 'Practical guide to Sabbath observance',
      image: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
      duration: '1.5 hours'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Bible Study Center
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Deepen your understanding of Torah, prophecy, and Yahusha's teachings
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Bible studies, topics, or scriptures..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Featured Studies */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Featured Studies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStudies.map((study, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {study.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {study.description}
                </p>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
                  <Play className="w-4 h-4" />
                  <span>Start Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Study Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              {category === 'all' ? 'All Studies' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Study Topics Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          All Bible Studies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <div key={topic.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${topic.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                    {topic.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {topic.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{topic.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{topic.lessons} lessons</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${
                    topic.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                    topic.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                    'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                  }`}>
                    {topic.difficulty}
                  </span>
                  <button className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Start Study</span>
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Resources */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Study Resources & Tools
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Access additional resources to enhance your Bible study experience, including study guides, reference materials, and interactive tools.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Study Guides</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Reference Tools</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              <Users className="w-4 h-4" />
              <span>Study Groups</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleStudy;