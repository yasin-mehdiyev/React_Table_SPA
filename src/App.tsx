import React, { Fragment, lazy, Suspense } from 'react';

// React Routing Dom Library
import { Route, Routes } from "react-router-dom";

// Include App.css
import './App.css';

// Dashboard Page
import HomePage from './pages/Home/Users';

// Dynamic İmports(Code Splittings)
const SelectedUserRowsPage = lazy(() => import("./pages/SelectUserRow/SelectUserRow"));
const NotFoundPage = lazy(() => import("./pages/404/NotFound"));

const App: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<><p>Loading....</p></>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selectedUsers" element={<SelectedUserRowsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Fragment>
  )
}

export default App;