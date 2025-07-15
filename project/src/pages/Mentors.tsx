import React from 'react';
import { Users, Youtube, ExternalLink, Play, Star, Calendar } from 'lucide-react';

const Mentors: React.FC = () => {
  const mentors = [
    {
      name: "Ruco Mwangi",
      title: "Revival Minister & Torah Teacher",
      description: "Passionate teacher of Torah and end-time revival, helping believers understand the importance of returning to YAHUAH's laws while walking in Yahusha's testimony.",
      link: "https://www.youtube.com/@rucomwangikenyarevivalregu6752",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      specialties: ["End-time Revival", "Torah Teaching", "Prophecy"],
      subscribers: "25K+",
      videos: "200+",
      featured: true
    },
    {
      name: "Davies Njoroge",
      title: "Biblical Teacher & Minister",
      description: "Dedicated to teaching the whole counsel of YAHUAH's Word, emphasizing the harmony between Torah and the Gospel message.",
      link: "https://www.youtube.com/@DaviesNjoroge",
      avatar: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      specialties: ["Biblical Teaching", "Torah & Gospel", "Discipleship"],
      subscribers: "18K+",
      videos: "150+",
      featured: true
    },
    {
      name: "Kariithi wa Njenga",
      title: "Prophetic Voice & Teacher",
      description: "Prophetic minister calling believers back to the ancient paths and YAHUAH's original design for His people.",
      link: "https://www.youtube.com/@wathoniguomuoyo",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      specialties: ["Prophetic Ministry", "Ancient Paths", "Restoration"],
      subscribers: "12K+",
      videos: "100+",
      featured: false
    },
    {
      name: "FIFTH KINGDOM FM",
      title: "Revival Media Ministry",
      description: "Media ministry focused on spreading the message of YAHUAH's kingdom and the importance of Torah observance in the end times.",
      link: "https://www.youtube.com/@swiftmessengersmedia",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      specialties: ["Kingdom Message", "End-time Prophecy", "Media Ministry"],
      subscribers: "30K+",
      videos: "300+",
      featured: true
    },
    {
      name: "Joyce (Daughter of Zion)",
      title: "Women's Ministry & Torah Teacher",
      description: "Anointed teacher focusing on women's role in the kingdom and the importance of Torah observance for families.",
      link: "https://www.youtube.com/@JoyceakaDaughterofZion",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      specialties: ["Women's Ministry", "Family Torah", "Kingdom Living"],
      subscribers: "15K+",
      videos: "120+",
      featured: false
    },
    {
      name: "Wairimu Hebrew Woman",
      title: "Hebrew Roots Teacher",
      description: "Teaching the Hebrew roots of faith and helping believers understand their identity as part of YAHUAH's covenant people.",
      link: "https://www.youtube.com/@WairimuHebrewWoman",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      specialties: ["Hebrew Roots", "Covenant Identity", "Cultural Context"],
      subscribers: "22K+",
      videos: "180+",
      featured: true
    }
  ];

  const featuredMentors = mentors.filter(mentor => mentor.featured);
  const allMentors = mentors;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
          <Users className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Mentors & Teachers
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Learn from anointed teachers and revival ministers
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Anointed Voices for End-Time Revival
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These are faithful servants of YAHUAH who are teaching the importance of returning to His laws while maintaining faith in Yahusha. They are part of the end-time revival movement, calling believers back to the ancient paths and the whole counsel of YAHUAH's Word.
          </p>
        </div>
      </div>

      {/* Featured Mentors */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Featured Teachers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredMentors.map((mentor, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {mentor.title}
                    </p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Featured Teacher
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {mentor.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {mentor.subscribers}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {mentor.videos}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Videos</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {mentor.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <a
                  href={mentor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 font-medium"
                >
                  <Youtube className="w-5 h-5" />
                  <span>Visit Channel</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Mentors */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          All Teachers & Mentors
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMentors.map((mentor, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {mentor.title}
                    </p>
                  </div>
                  {mentor.featured && (
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {mentor.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {mentor.specialties.slice(0, 2).map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                  {mentor.specialties.length > 2 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      +{mentor.specialties.length - 2} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{mentor.subscribers} subscribers</span>
                  <span>{mentor.videos} videos</span>
                </div>

                <a
                  href={mentor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Visit Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-8">
        <div className="text-center space-y-4">
          <Users className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Join the Revival Movement
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            These teachers are part of a growing movement of believers who are returning to the ancient paths while maintaining faith in Yahusha. They teach the importance of Torah observance, the festivals of YAHUAH, and preparing for His kingdom. We encourage you to learn from their teachings and test everything against Scripture.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-200 font-medium">
              Explore More Teachers
            </button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
              Submit a Teacher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;