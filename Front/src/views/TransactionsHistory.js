import React, { useState } from "react";
import Table from "react-bootstrap/Table";

export default function TransactionsHistory() {
  const [address, setAddress] = useState();
  const getTransaction = () => {};
  return (
    <div className="history-container">
      <div className="container__header">
        <span>Transitions History</span>
      </div>
      <div className="form__content form__content--row">
        <label className="form__content__label form__content__label--row">
          My Address
        </label>
        <input
          type="text"
          placeholder="0xABC123..."
          onChange={(e) => setAddress(e.target.value)}
          className="form__content__input form__content__input--row"
        />
      </div>

      <div className="history__btn">
        <button onClick={getTransaction}>Get Transaction</button>
      </div>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th className="col-hash">Txn Hash</th>
            <th className="col-age">Time</th>
            <th className="col-from">From</th>
            <th className="col-to">To</th>
            <th className="col-val">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col-hash">
              0x1ac5db5c2bf02f2bbaae207ee9b884cf53c7e2213fd1393cfdc9b93365548ff4
            </td>
            <td className="col-age">10000 min ago</td>
            <td className="col-from">
              0x6850a0e5accebac765acfd78391421bfdb97c72b
            </td>
            <td className="col-to">
              0x6850a0e5accebac765acfd78391421bfdb97c72c
            </td>
            <td className="col-val">10</td>
          </tr>
          <tr>
            <td className="col-hash">
              0x1ac5db5c2bf02f2bbaae207ee9b884cf53c7e2213fd1393cfdc9b93365548ff4
            </td>
            <td className="col-age">1 min ago</td>
            <td className="col-from">
              0x6850a0e5accebac765acfd78391421bfdb97c72b
            </td>
            <td className="col-to">
              0x6850a0e5accebac765acfd78391421bfdb97c72c
            </td>
            <td className="col-val">10</td>
          </tr>
          <tr>
            <td className="col-hash">
              0x1ac5db5c2bf02f2bbaae207ee9b884cf53c7e2213fd1393cfdc9b93365548ff4
            </td>
            <td className="col-age">1 min ago</td>
            <td className="col-from">
              0x6850a0e5accebac765acfd78391421bfdb97c72b
            </td>
            <td className="col-to">
              0x6850a0e5accebac765acfd78391421bfdb97c72c
            </td>
            <td className="col-val">10</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
