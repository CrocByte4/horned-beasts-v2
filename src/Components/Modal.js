import React from "react";

export default function Modal({ handleModal }) {
  return (
    <div className="modal" onClick={handleModal}>
      <img
        src="https://user-images.githubusercontent.com/113071293/191797913-c49cd0d2-1ae9-40d8-bbcd-8e19da9f0cbd.jpg"
        alt="ultimate flag"
      />
    </div>
  );
}
