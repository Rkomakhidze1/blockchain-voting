import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "./contract";
import Navbar from "./Navbar";
import CreateVotes from "./CreateVotes";
import Votes from "./Votes";

function App() {
  const [isMember, setIsMember] = useState(false);
  const [contract, setContract] = useState(null);
  const [connected, setConnected] = useState(false);

  const connectCallback = async () => {
    const { contract } = await connect();
    setContract(contract);
    if (contract) {
      setConnected(true);
    }
  };

  const becomeMember = async () => {
    if (!contract) {
      alert("Please connect to metamask.");
      return;
    }

    try {
      await contract.join();
      alert("Joined");
      setIsMember(true);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Router>
      <Navbar
        connect={connectCallback}
        connected={connected}
        becomeMember={becomeMember}
        isMember={isMember}
      />
      <div className="container">
        <Routes>
          <Route
            path="create-vote"
            element={<CreateVotes contract={contract} />}
          />
          <Route path="votes" element={<Votes contract={contract} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
