import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './components/Layouts';

// Import your pages
import ActiveProjects from './pages/ActiveProjects';
import Marketplace from './pages/Marketplace';
import Memory from './pages/Memory';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PARENT ROUTE: The Layout Frame */}
        <Route path="/" element={<Layouts />}>
          
          {/* CHILD ROUTES: These load INSIDE the <Outlet /> of Layout */}
          <Route index element={<ActiveProjects />} />  {/* Default Page */}
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="memory" element={<Memory />} />
          <Route path="profile" element={<div className="text-2xl">Profile Page Content</div>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;