import React from "react";
import HornedBeast from "./HornedBeast";

export default function Main() {
  return (
    <main>
      <HornedBeast
        title="Smaug"
        imageUrl="https://qph.cf2.quoracdn.net/main-qimg-d7cceaac6251d5e158e25165e380e606-lq"
        description="Smaug be stealin"
      />
      <HornedBeast
        title="Rhino"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cMNXrgI3kVcdIYiFa8lBZKkFDikdTgm_oDUuJ9n6eiRTxSRHOEJcDjIi2F3HrI1tPzM&usqp=CAU"
        description="Endangered boi lookin' suave"
      />
    </main>
  );
}
