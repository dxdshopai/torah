@@ .. @@
 import Festivals from './pages/Festivals';
 import QAndA from './pages/QAndA';
 import Mentors from './pages/Mentors';
+import BibleStudy from './pages/BibleStudy';
+import Kids from './pages/Kids';
 import Profile from './pages/Profile';
@@ .. @@
                 <Route path="/festivals" element={<Festivals />} />
-                <Route path="/qa" element={<QAndA />} />
+                <Route path="/qa" element={<QAndA />} />
+                <Route path="/bible-study" element={<BibleStudy />} />
+                <Route path="/kids" element={<Kids />} />
                 <Route path="/mentors" element={<Mentors />} />