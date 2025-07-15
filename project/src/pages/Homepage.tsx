import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { MessageCircle, Scroll, Calendar, Utensils, Clock, Star, HelpCircle, Users, ArrowRight, BookOpen, Crown } from 'lucide-react';

const Homepage: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: MessageCircle,
      title: '24/7 Torah, Prophecy & Yahusha Companion',
      description: 'Explore Torah, prophecy and the testimony of Yahusha',
      link: '/scripture-companion',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Scroll,
      title: 'Ten Commandments',
      description: 'The foundation of YAHUAH\'s law (Exodus 20, Deuteronomy 5)',
      link: '/commandments',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Star,
      title: 'Greatest Commandments Matrix',
      description: 'Love YAHUAH and love your neighbor (Matthew 22:37-40)',
      link: '/greatest-commandments',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Utensils,
      title: 'Clean & Unclean Food',
      description: 'Dietary laws according to Leviticus 11',
      link: '/dietary-law',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: 'True Sabbath Day',
      description: 'Seventh day - Saturday, the sacred day of rest',
      link: '/sabbath',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Calendar,
      title: 'Seven Festivals of YAHUAH',
      description: 'The appointed times according to Leviticus 23',
      link: '/festivals',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: HelpCircle,
      title: 'Questions & Answers',
      description: 'Understanding revival, law, and Yahusha\'s teachings',
      link: '/qa',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Mentors & Teachers',
      description: 'Learn from anointed teachers and revival ministers',
      link: '/mentors',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            {' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TORAH, Prophecy & YAHUSHA'S Gospel
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the Kingdom of Peace, Eternal Life & the Testimony of Torah and Yahusha
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="space-y-3 text-left">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Purpose:</strong> Establish our Creator's Kingdom of Peace (Daniel 2:44)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Eternal life:</strong> Knowing the only true God and Jesus Christ (John 17:3)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Truth:</strong> You cannot know the Son without knowing the Father (John 6:44-45)
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Essential:</strong> Obedience to the Law of Moses is essential to truly know Yahusha/Jesus (John 5:46-47)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/scripture-companion"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Start Torah Companion</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {!user && (
            <Link
              to="/login"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700"
            >
              <span className="font-semibold">Join Community</span>
            </Link>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Powerful Tools & Resources
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Know the truth that sets you free through Torah, prophecy, and Yahusha's testimony
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                to={feature.link}
                className="group block p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Teacher Q&A Highlight */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Ask Bible Teachers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Submit your questions and get thoughtful, Scripture-based answers from experienced Bible teachers
            </p>
          </div>
          <Link
            to="/teacher-qa"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            <Crown className="w-5 h-5" />
            <span className="font-semibold">Visit Teacher Q&A</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
            <div className="text-gray-600 dark:text-gray-300">Bible Questions Answered</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Video Teachings</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">25K+</div>
            <div className="text-gray-600 dark:text-gray-300">Community Members</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Ready to grow in faith?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join thousands of believers on their journey of spiritual growth and biblical understanding
        </p>
        {!user && (
          <Link
            to="/login"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            <span className="font-semibold">Join Free Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </section>
    </div>
  );
};

export default Homepage;