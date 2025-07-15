@@ .. @@
 import React, { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
 import { useAuth } from '../contexts/AuthContext';
 import { useTheme } from '../contexts/ThemeContext';
-import { Menu, X, Home, MessageCircle, Scroll, Calendar, Utensils, Clock, Star, HelpCircle, Users, User, Moon, Sun, LogOut, BookOpen } from 'lucide-react';
+import { Menu, X, Home, MessageCircle, Scroll, Calendar, Utensils, Clock, Star, HelpCircle, Users, User, Moon, Sun, LogOut, BookOpen, Baby } from 'lucide-react';
 
@@ .. @@
   const navItems = [
     { path: '/', icon: Home, label: 'Home' },
     { path: '/scripture-companion', icon: MessageCircle, label: '24/7 Torah Companion' },
+    { path: '/bible-study', icon: BookOpen, label: 'Bible Study' },
     { path: '/commandments', icon: Scroll, label: 'Ten Commandments' },
     { path: '/greatest-commandments', icon: Star, label: 'Greatest Commandments' },
     { path: '/dietary-law', icon: Utensils, label: 'Dietary Law' },
     { path: '/sabbath', icon: Clock, label: 'Sabbath' },
     { path: '/festivals', icon: Calendar, label: 'Seven Festivals' },
     { path: '/qa', icon: HelpCircle, label: 'Q&A' },
+    { path: '/kids', icon: Baby, label: 'Kids Corner' },
     { path: '/mentors', icon: Users, label: 'Mentors' },
   ];