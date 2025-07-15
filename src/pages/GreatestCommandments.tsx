@@ .. @@
 import React from 'react';
+import { Link } from 'react-router-dom';
 import { Star, Heart, Users, BookOpen, ArrowRight } from 'lucide-react';
 
@@ .. @@
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
-            <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-xl hover:from-pink-700 hover:to-red-700 transition-all duration-200 font-medium">
-              Study the Ten Commandments
-            </button>
-            <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
-              Learn About Torah
-            </button>
+            <Link
+              to="/bible-study"
+              className="px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-xl hover:from-pink-700 hover:to-red-700 transition-all duration-200 font-medium text-center"
+            >
+              Study the Ten Commandments
+            </Link>
+            <Link
+              to="/bible-study"
+              className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium text-center"
+            >
+              Learn About Torah
+            </Link>
           </div>