import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import CreateVotes from "./CreateVotes";
import Votes from "./Votes";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="create-vote" element={<CreateVotes />} />
          <Route path="votes" element={<Votes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
