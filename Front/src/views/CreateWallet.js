import React, { useState, useEffect } from "react";
import "styles/create-wallet.scss";
import logo from "assets/logo-create.svg";

export default function CreateWallet() {
  const create = () => {};
  return (
    <div className="create-wallet">
      <div className="create-wallet__wrapper">
        <div className="container__header">
          <span>Wallet</span>
        </div>
        <div className="create-wallet__icon">
          <img src={logo} alt="" />
        </div>
        <button className="create-wallet__btn" onClick={create}>
          CREATE
        </button>
      </div>
    </div>
  );
}
