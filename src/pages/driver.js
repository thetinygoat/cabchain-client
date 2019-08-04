import React, { useState } from "react";
import controller from "../controller";
import web3 from "../web3";
const Driver = () => {
  const [rate, setRate] = useState(0);
  const [account, setAccount] = useState("");
  (async () => {
    const acc = await web3.eth.getAccounts();
    setAccount(acc[0]);
  })();
  const handleClick = async e => {
    controller.methods
      .updateDriverRate(rate)
      .send({ from: account })
      .then(resp => {
        console.log(resp);
      });
  };
  return (
    <React.Fragment>
      <h1 className="text-center font-bold text-5xl text-gray-700 m-4">
        Update Price
      </h1>
      <div className="w-full max-w-sm mx-auto border shadow p-4">
        <input
          className="w-full border shadow p-2"
          value={rate}
          onChange={e => setRate(e.target.value)}
        />
        <button
          className="block w-full mx-auto bg-blue-500 rounded p-2 font-bold text-white mt-2"
          onClick={handleClick}
        >
          Update Price
        </button>
      </div>
    </React.Fragment>
  );
};

export default Driver;
