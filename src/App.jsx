import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen bg-red-600">
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default App;
