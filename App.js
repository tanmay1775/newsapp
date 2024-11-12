import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const pagesize = 5;
  const apikey = "9b2c0d298b7348f69325dc187ed1ce0a";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} />

        <Routes>
          {/* In the latest version, Switch is replaced by Routes */}
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pagesize={20}
                country="us"
                category="business"
                apikey={apikey}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pagesize={20}
                country="us"
                category="entertainment"
                apikey={apikey}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pagesize={20}
                country="us"
                category="health"
                apikey={apikey}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pagesize={20}
                country="us"
                category="science"
                apikey={apikey}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pagesize={20}
                country="us"
                category="sports"
                apikey={apikey}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pagesize={20}
                country="us"
                category="technology"
                apikey={apikey}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
