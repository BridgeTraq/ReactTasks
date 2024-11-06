import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Navigation/Layout';
import Home from './Components/Contents/Home'
import Bookmarks from './Components/Contents/Bookmarks';
import Courses from './Components/Contents/Courses';
import Tutorials from './Components/Contents/Tutorials';
import BestPractices from './Components/Contents/BestPractices';
import Certifications from './Components/Contents/Certifications';
import Resources from './Components/Contents/Resources';
import Events from './Components/Contents/Events';
import Community from './Components/Contents/Community';
import Setting from './Components/Contents/Setting';
import Help from './Components/Contents/Help';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="courses" element={<Courses />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="best" element={<BestPractices />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="resources" element={<Resources />} />
          <Route path="events" element={<Events />} />
          <Route path="community" element={<Community />} />
          <Route path='setting' element={<Setting />} />
          <Route path='help' element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
