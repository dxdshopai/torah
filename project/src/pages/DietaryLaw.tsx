import React, { useState } from 'react';
import { Utensils, CheckCircle, XCircle, BookOpen, Info } from 'lucide-react';

const DietaryLaw: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cleanAnimals = [
    { name: 'Cattle (Beef)', category: 'land', description: 'Cows, bulls, oxen - chew cud and have split hooves' },
    { name: 'Sheep (Lamb/Mutton)', category: 'land', description: 'Sheep and lambs - chew cud and have split hooves' },
    { name: 'Goats', category: 'land', description: 'Goats - chew cud and have split hooves' },
    { name: 'Deer', category: 'land', description: 'Deer, gazelle, roe deer - chew cud and have split hooves' },
    { name: 'Salmon', category: 'water', description: 'Has both fins and scales' },
    { name: 'Trout', category: 'water', description: 'Has both fins and scales' },
    { name: 'Bass', category: 'water', description: 'Has both fins and scales' },
    { name: 'Cod', category: 'water', description: 'Has both fins and scales' },
    { name: 'Tuna', category: 'water', description: 'Has both fins and scales' },
    { name: 'Chicken', category: 'air', description: 'Clean bird according to Leviticus 11' },
    { name: 'Duck', category: 'air', description: 'Clean bird according to Leviticus 11' },
    { name: 'Goose', category: 'air', description: 'Clean bird according to Leviticus 11' },
    { name: 'Turkey', category: 'air', description: 'Clean bird according to Leviticus 11' },
    { name: 'Dove/Pigeon', category: 'air', description: 'Clean bird according to Leviticus 11' }
  ];

  const uncleanAnimals = [
    { name: 'Pork (Pig)', category: 'land', description: 'Has split hooves but does not chew cud' },
    { name: 'Rabbit', category: 'land', description: 'Chews cud but does not have split hooves' },
    { name: 'Camel', category: 'land', description: 'Chews cud but does not have split hooves' },
    { name: 'Horse', category: 'land', description: 'Neither chews cud nor has split hooves' },
    { name: 'Shellfish (Shrimp, Crab, Lobster)', category: 'water', description: 'No fins or scales' },
    { name: 'Catfish', category: 'water', description: 'No scales' },
    { name: 'Eel', category: 'water', description: 'No scales' },
    { name: 'Squid/Octopus', category: 'water', description: 'No fins or scales' },
    { name: 'Eagle', category: 'air', description: 'Bird of prey - unclean according to Leviticus 11' },
    { name: 'Vulture', category: 'air', description: 'Scavenger bird - unclean according to Leviticus 11' },
    { name: 'Owl', category: 'air', description: 'Bird of prey - unclean according to Leviticus 11' },
    { name: 'Hawk', category: 'air', description: 'Bird of prey - unclean according to Leviticus 11' },
    { name: 'Bat', category: 'air', description: 'Not a true bird - unclean according to Leviticus 11' }
  ];

  const categories = ['all', 'land', 'water', 'air'];

  const filteredClean = selectedCategory === 'all' ? cleanAnimals : cleanAnimals.filter(animal => animal.category === selectedCategory);
  const filteredUnclean = selectedCategory === 'all' ? uncleanAnimals : uncleanAnimals.filter(animal => animal.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
          <Utensils className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Clean & Unclean Food
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Dietary laws according to Leviticus 11
          </p>
        </div>
      </div>

      {/* Scripture Reference */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            YAHUAH's Instructions
          </h2>
        </div>
        <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
          "You are to distinguish between the unclean and the clean, between living creatures that may be eaten and those that may not be eaten."
        </blockquote>
        <cite className="text-blue-600 dark:text-blue-400 font-semibold">
          Leviticus 11:47
        </cite>
      </div>

      {/* Criteria */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          YAHUAH's Criteria for Clean Animals
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🐄</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Land Animals</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Must both chew cud AND have split hooves
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🐟</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Water Creatures</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Must have both fins AND scales
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🐔</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Birds</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Specific birds listed as clean (not birds of prey or scavengers)
            </p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by category:</span>
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                }`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Animals */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Clean Animals (Permitted)
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClean.map((animal, index) => (
            <div key={index} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{animal.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{animal.description}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">
                    {animal.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unclean Animals */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <XCircle className="w-8 h-8 text-red-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Unclean Animals (Forbidden)
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUnclean.map((animal, index) => (
            <div key={index} className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{animal.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{animal.description}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs">
                    {animal.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why These Laws */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <Info className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Why YAHUAH Gave These Laws
          </h3>
          <div className="max-w-3xl mx-auto space-y-4 text-left">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Holiness & Separation</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                "You are to be holy to me because I, YAHUAH, am holy, and I have set you apart from the nations to be my own." (Leviticus 20:26)
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Health & Wisdom</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                YAHUAH's laws often align with health principles - avoiding scavengers, bottom-feeders, and animals that carry disease.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Obedience & Trust</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Following YAHUAH's dietary laws demonstrates our trust in His wisdom and our commitment to obey His instructions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="text-center space-y-4">
          <Utensils className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Walking in YAHUAH's Dietary Laws
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These dietary laws are not burdensome restrictions but loving instructions from our Creator. They help us maintain physical health, spiritual purity, and demonstrate our obedience to YAHUAH's wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-medium">
              Study Leviticus 11
            </button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
              Download Food Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietaryLaw;