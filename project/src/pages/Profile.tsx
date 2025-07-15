import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  BookOpen, 
  Heart, 
  Calendar,
  Award,
  Edit3,
  Save,
  X
} from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Passionate about growing in faith and learning God\'s Word.',
    favoriteVerse: 'Philippians 4:13',
    joinDate: 'January 2024',
    notifications: {
      devotionals: true,
      prayerRequests: true,
      teacherUpdates: true,
      weeklyDigest: false
    }
  });

  const stats = [
    { label: 'Devotionals Read', value: '45', icon: BookOpen },
    { label: 'Prayers Offered', value: '23', icon: Heart },
    { label: 'Days Active', value: '12', icon: Calendar },
    { label: 'Badges Earned', value: '3', icon: Award }
  ];

  const recentActivity = [
    { type: 'devotional', title: 'Walking by Faith, Not by Sight', date: '2 hours ago' },
    { type: 'prayer', title: 'Prayed for healing request', date: '1 day ago' },
    { type: 'teacher', title: 'Watched "God\'s Perfect Timing"', date: '2 days ago' },
    { type: 'verse', title: 'Saved verse: Romans 8:28', date: '3 days ago' }
  ];

  const handleSave = () => {
    // Here you would typically save to your backend
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setProfileData({
      name: user?.name || '',
      email: user?.email || '',
      bio: 'Passionate about growing in faith and learning God\'s Word.',
      favoriteVerse: 'Philippians 4:13',
      joinDate: 'January 2024',
      notifications: {
        devotionals: true,
        prayerRequests: true,
        teacherUpdates: true,
        weeklyDigest: false
      }
    });
    setIsEditing(false);
  };

  const updateNotification = (key: string, value: boolean) => {
    setProfileData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value
      }
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <User className="w-12 h-12 text-white" />
          )}
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Profile
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Manage your account and preferences
          </p>
        </div>
      </div>

      {/* Profile Information */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Profile Information
            </h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              <span className="text-sm font-medium">Edit Profile</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{profileData.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{profileData.email}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bio
              </label>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white resize-none"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{profileData.bio}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Favorite Verse
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.favoriteVerse}
                  onChange={(e) => setProfileData({ ...profileData, favoriteVerse: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{profileData.favoriteVerse}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Member Since
              </label>
              <p className="text-gray-900 dark:text-white">{profileData.joinDate}</p>
            </div>
          </div>

          {isEditing && (
            <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium"
              >
                <X className="w-4 h-4" />
                <span>Cancel</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Notification Settings */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Notification Settings
            </h2>
          </div>

          <div className="space-y-4">
            {Object.entries(profileData.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-slate-700 last:border-b-0">
                <div>
                  <label className="text-gray-900 dark:text-white font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {key === 'devotionals' && 'Receive daily devotional notifications'}
                    {key === 'prayerRequests' && 'Get notified about new prayer requests'}
                    {key === 'teacherUpdates' && 'Updates from teachers you follow'}
                    {key === 'weeklyDigest' && 'Weekly summary of your activity'}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => updateNotification(key, e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h2>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  {activity.type === 'devotional' && <BookOpen className="w-5 h-5 text-white" />}
                  {activity.type === 'prayer' && <Heart className="w-5 h-5 text-white" />}
                  {activity.type === 'teacher' && <User className="w-5 h-5 text-white" />}
                  {activity.type === 'verse' && <BookOpen className="w-5 h-5 text-white" />}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;