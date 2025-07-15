@@ .. @@
 import React, { useState } from 'react';
+import { Link } from 'react-router-dom';
 import { Utensils, CheckCircle, XCircle, BookOpen, Info } from 'lucide-react';
 
@@ .. @@
           <div className="flex flex-col sm:flex-row gap-3 justify-center">
-            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-medium">
-              Study Leviticus 11
-            </button>
+            <Link
+              to="/bible-study"
+              className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-medium text-center"
+            >
+              Study Leviticus 11
+            </Link>
             <button className="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors font-medium">
               Download Food Guide
             </button>