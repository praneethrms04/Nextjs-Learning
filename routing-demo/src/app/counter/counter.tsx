"use client";
import React, { useState } from "react";

export const metadata ={
    title : `Counter`
}

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter - {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
