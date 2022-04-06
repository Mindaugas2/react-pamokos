import { Route, Routes } from "react-router-dom";
import User from "./components/User";
import Users from "./components/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path=":username" element={<User />} />
    </Routes>
  );
}

export default App;
