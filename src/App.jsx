import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Group from "./pages/Group";
import GroupCreate from "./pages/GroupCreate";
import GroupNon from "./pages/GroupNon";
import GroupDetail from "./pages/GroupDetail";
import PostCreate from "./pages/PostCreate";
import PostNon from "./pages/PostNon";
import PostDetail from "./pages/PostDetail";
import NonPg from "./pages/NonPg";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 그룹 페이지 */}
        <Route exact path="/" element={<Group />} />
        <Route exact path="/create" element={<GroupCreate />} />
        <Route exact path="/non" element={<GroupNon />} />
        {/* 그룹 상세 페이지 */}
        <Route exact path="/:id" element={<GroupDetail />} />
        <Route exact path="/:id/create" element={<PostCreate />} />
        <Route exact path="/:id/non" element={<PostNon />} />
        <Route exact path="/:id/:id" element={<PostDetail />} />
        {/* 404 페이지 */}
        <Route exact path="/*" element={<NonPg />} />
      </Routes>
    </div>
  );
}

export default App;
