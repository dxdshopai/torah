@@ .. @@
 import React from 'react';
+import { Link } from 'react-router-dom';
 import { Clock, Sun, Moon, BookOpen, Heart, Star } from 'lucide-react';
 
@@ .. @@
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
-            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium">
-              Learn More About Sabbath
-            </button>
+            <Link
+              to="/bible-study"
+              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium text-center"
+            >
+              Learn More About Sabbath
+            </Link>
             <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
               Download Sabbath Guide
             </button>