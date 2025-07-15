@@ .. @@
 import React from 'react';
 import { Link } from 'react-router-dom';
 import { useAuth } from '../contexts/AuthContext';
-import { MessageCircle, Scroll, Calendar, Utensils, Clock, Star, HelpCircle, Users, ArrowRight, BookOpen, Crown } from 'lucide-react';
+import { MessageCircle, Scroll, Calendar, Utensils, Clock, Star, HelpCircle, Users, ArrowRight, BookOpen, Crown, Baby } from 'lucide-react';
 
@@ .. @@
   const features = [
     {
       icon: MessageCircle,
       title: '24/7 Torah, Prophecy & Yahusha Companion',
       description: 'Explore Torah, prophecy and the testimony of Yahusha',
       link: '/scripture-companion',
       color: 'from-blue-500 to-blue-600'
     },
+    {
+      icon: BookOpen,
+      title: 'Bible Study Center',
+      description: 'Deepen your understanding with comprehensive studies',
+      link: '/bible-study',
+      color: 'from-blue-500 to-purple-500'
+    },
     {
       icon: Scroll,
       title: 'Ten Commandments',
       description: 'The foundation of YAHUAH\'s law (Exodus 20, Deuteronomy 5)',
       link: '/commandments',
       color: 'from-purple-500 to-purple-600'
     },
@@ .. @@
     {
       icon: Users,
       title: 'Mentors & Teachers',
       description: 'Learn from anointed teachers and revival ministers',
       link: '/mentors',
       color: 'from-red-500 to-red-600'
+    },
+    {
+      icon: Baby,
+      title: 'Kids Corner',
+      description: 'Fun ways for children to learn about YAHUAH',
+      link: '/kids',
+      color: 'from-pink-500 to-purple-500'
     }
   ];