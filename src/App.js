import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        Welcome to Oolai!
      </h1>
      <p className="text-gray-700 mb-4">Count is: {count}</p>
      <button
        className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}