import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

const Votes = ({ contract }) => {
  const gateway = "https://gateway.pinata.cloud/";
  const [votes, setVotes] = useState([]);

  return (
    <div>
      {votes.map((vote) => (
        <Card key={vote.id} className="my-2">
          <Card.Header>{vote.description}</Card.Header>
          <Card.Body>
            {vote.options.map((option, idx) => (
              <div className="mt-1" key={Math.random() + idx}>
                <p>
                  {option}:{" "}
                  {(vote.votes[idx] / Math.max(1, vote.totalVotes)) * 100}%
                </p>
                <div className="d-flex w-100 align-items-center">
                  <ProgressBar
                    now={(vote.votes[idx] / Math.max(1, vote.totalVotes)) * 100}
                    label={`${vote.votes[idx]}`}
                    className="w-100 me-2"
                  />
                  <Button size="sm" variant="dark">
                    Vote
                  </Button>
                </div>
              </div>
            ))}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Votes;
