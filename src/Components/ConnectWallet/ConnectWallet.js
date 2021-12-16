import React, { useState, useRef } from "react";
import { StoicIdentity } from "ic-stoic-identity";
import "./ConnectWallet.scss";
import Button from "../Button/Button";
function ConnectWallet({}) {
  const [showModal, setShowModal] = useState(false);
  const [userAddress, setUserAddress] = useState(null);
  const connectPlugWallet = async () => {
    const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";
    const whitelist = [nnsCanisterId];
    if (window.ic?.plug) {
      try {
        const isConnected = await window.ic.plug.requestConnect({
          whitelist,
        });
        console.log(isConnected);
        if (isConnected) {
          const principalId = await window.ic.plug.agent.getPrincipal();
          setUserAddress(principalId.toText());
          setShowModal(false);
          console.log("hola", `Plug's user principal Id is ${principalId}`);
        }
      } catch (error) {
        window.alert("connection was refused");
      }
    } else {
      window.alert("Plug Wallet not installed.");
    }
  };

  const connectStoicWallet = async () => {
    await StoicIdentity.load();
    try {
      let identity = await StoicIdentity.connect();
      if (identity) {
        setUserAddress(identity.getPrincipal().toText());
        console.log("hola", identity.getPrincipal().toText());
      }
    } catch (error) {
      window.alert("connection was refused");
    }
  };

  const eventCallback = (resolve) => {
    if (window.earth) {
      resolve(window.earth);
      window.removeEventListener("load", eventCallback(resolve));
    } else {
      window.alert("Earth Wallet not installed.");
      window.removeEventListener("load", eventCallback);
    }
  };

  const injectEarth = () => {
    return new Promise((resolve, reject) => {
      window.addEventListener("load", eventCallback(resolve));
      const event = new Event("load");
      window.dispatchEvent(event);
    });
  };

  const connectEarthWallet = async () => {
    await injectEarth();
    let account = await window.earth.enable();
    if (account) {
      console.log("hola", "Successfully connected to Earth Wallet 🌍", account);
      setUserAddress(account);
    } else {
      window.alert("connection was refused");
    }
  };
  return (
    <div className="ConnectWallet">
      <Button
        onClick={() => {
          !userAddress ? setShowModal(true) : setUserAddress("");
        }}
        type="filled"
      >
        <span className="">
          {!userAddress
            ? `Connect Wallet`
            : `${userAddress.slice(0, 8)}...${userAddress.slice(-6)}`}
        </span>
        <img alt="Sign In" src="/assets/icons/login.svg" />
      </Button>

      <div
        onClick={() => {
          setShowModal(false);
        }}
        className={`ConnectWallet__backdrop ${showModal ? "show" : ""}`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`ConnectWallet__modal `}
        >
          <p className="heading">Choose Wallet to connect</p>
          <Button onClick={connectPlugWallet}>
            <img className="icon-logo" src="/assets/wallets/plug-logo.png" />{" "}
            Connect with Plug
          </Button>
          <div className="spacer" />
          <Button onClick={connectStoicWallet}>
            <img className="icon-logo" src="/assets/wallets/stoic-logo.png" />{" "}
            Connect with Stoic
          </Button>
          <div className="spacer" />
          <Button onClick={connectEarthWallet}>
            <img className="icon-logo" src="/assets/wallets/earth-logo.png" />{" "}
            Connect with Earth
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
