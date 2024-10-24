import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Amazing Features</div>
      <div className="title-small">of</div>
      <div className="title-small">
        E-Voting System Using a BlockChain
      </div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutability" icon={<MdLock />} align="right">
            <p>
            This property guarantees that no one can able to change the data stored on the blockchain. All the nodes that are part of network stored the data. An eavesdropper alters or deletes the data on the blockchain if and only if an eavesdropper has more than 51% control in the system.
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="/aibot-unscreen.gif" />
        </div>

        <div>
          <Feature title="Enhanced Security" icon={<MdGppGood />} align="left">
            <p>
              The voting system shall able to preserve the privacy of the voting information, means it shall not disclose the information that who has casted a vote to which candidate. The voting system shall able to preserve the privacy of ownership of ballot means it shall not disclose the identity of voter associated to a particular ballot. This is also known as anonymity of voters.
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized" icon={<MdShare />} align="right">
            <p>
            The single-point failure, collapse the whole centralized system leads to the decentralization of the data. In this, data is not controlled by a single entity. As, it forms trustworthy platforms, no need of a third party or inter-mediator when performing transactions with unknown parties.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Distributed Ledger"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
            Traditional ledgers are used in business for keeping day-to-day accounting information, the same way in blockchain distributed ledgers store all the transactions in all the peers that are part of the network. Any alteration in the ledger leads to an update in all the consecutive nodes. Voter’s information, votes cast by voters are recorded and replicated on every ledger.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
