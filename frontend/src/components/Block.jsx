import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Transaction from "./subComponents/Transaction";

export default function Block(props) {
  console.log("Blocks is running");
  const [displayTransaction, setDisplayTransaction] = useState(false);
  const { timestamp, hash } = props.block;
  //   const hashDisplay = `${hash.substring(0, 15)}...`;

  const toggleTransaction = () => {
    setDisplayTransaction(!displayTransaction);
  };

  const transaction = () => {
    const { data } = props;
    const stringifiedData = JSON.stringify(data);
    const dataDisplay =
      stringifiedData.length > 35
        ? `${stringifiedData.substring(0, 35)}...`
        : stringifiedData;

    if (displayTransaction) {
      return (
        <div>
          {data.map((transaction) => (
            <div key={transaction.id}>
              <hr />
              <Transaction transaction={transaction} />
            </div>
          ))}
          <br />
          <Button
            bsstyle="danger"
            bssize="small"
            onClick={() => toggleTransaction}
          >
            Show Less
          </Button>
        </div>
      );
    }

    return (
      <div>
        <div>Data: {dataDisplay}</div>
        <Button
          bsstyle="danger"
          bssize="small"
          onClick={this.toggleTransaction}
        >
          Show More
        </Button>
      </div>
    );
  };
  const hashDisplay = `${hash.substring(0, 15)}...`;
  return (
    <div className="Block">
      <div>Hash: {hashDisplay}</div>
      <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
      {transaction()}
    </div>
  );
}
