import React from "react";

export default function SendTransaction() {
  return (
    <div className="transaction-container">
      <div className="transaction">
        <div className="container__header">
          <span>Send Coins</span>
        </div>
        <div className="transaction__body">
          <div className="transaction__form">
            <div className="transaction__row form__content">
              <label className="form__content__label">My Address</label>
              <input
                type="text"
                className="form__content__input"
                placeholder="0xABC123..."
              />
            </div>
            <div className="transaction__row group-double">
              <div className="form__content group-double__2">
                <label className="form__content__label">Amount</label>
                <input
                  type="number"
                  placeholder="0"
                  className="form__content__input"
                />
              </div>
            </div>
            <div className="transaction__row form__content">
              <label className="form__content__label">To Address</label>
              <input
                type="text"
                className="form__content__input"
                placeholder="0xDEF456..."
              />
            </div>
          </div>
        </div>
        <div className="transaction__footer">
          <button className="btn btn-disabled">Send</button>
          <p className="btn-clear">Clear All</p>
        </div>
      </div>
    </div>
  );
}
