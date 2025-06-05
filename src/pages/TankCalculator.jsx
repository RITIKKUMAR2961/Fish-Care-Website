import React, { useState } from "react";
import fishData from "../assets/fishData";

const TankCalculator = () => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [selectedFish, setSelectedFish] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(width);
    const l = parseFloat(length);

    if (isNaN(h) || isNaN(w) || isNaN(l)) {
      setSuggestion("Please enter valid tank dimensions.");
      return;
    }

    const volumeCm3 = h * w * l;
    const gallons = volumeCm3 / 3785.41;

    const fish = fishData.find((f) => f.name === selectedFish);
    if (!fish) {
      setSuggestion("Please select a fish species.");
      return;
    }

    const minTankMatch = fish.tankSize.match(/(\d+(\.\d+)?)/);
    if (!minTankMatch) {
      setSuggestion("Invalid tank size data for selected fish.");
      return;
    }
    const minTank = parseFloat(minTankMatch[1]);

    const numberOfFish = Math.floor(gallons / minTank);

    setSuggestion(
      `Tank volume: ${gallons.toFixed(
        2
      )} gallons. You can keep about ${numberOfFish} ${fish.name}${
        numberOfFish !== 1 ? "s" : ""
      }.`
    );
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body, html, #root {
          margin: 0; padding: 0; height: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #a8edea, #fed6e3);
          color: #333;
        }
        .tank-calculator-container {
          display: flex;
          flex-direction: column;
          max-width: 600px;    /* Increased width */
          margin: auto;
          height: 100vh;
          padding: 2rem;
          background: white;
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
          border-radius: 12px;
          justify-content: center;
          gap: 1.25rem;
        }
        h2 {
          margin-bottom: 1rem;
          text-align: center;
          color: #2c3e50;
        }
        label {
          font-weight: 600;
          margin-bottom: 0.25rem;
          display: block;
        }
        select, input {
          width: 100%;
          padding: 0.6rem 0.75rem;
          font-size: 1rem;
          border: 2px solid #ddd;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }
        select:focus, input:focus {
          outline: none;
          border-color: #ff6f91;
          box-shadow: 0 0 8px #ff6f91aa;
        }
        button {
          margin-top: 1rem;
          width: 100%;
          padding: 0.75rem;
          background: #ff6f91;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #ee3e62;
        }
        p {
          margin-top: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #34495e;
          text-align: center;
        }
        /* Responsive adjustments */
        @media (max-width: 480px) {
          .tank-calculator-container {
            margin: 1rem;
            max-width: 100%;
            padding: 1.5rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          button {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="tank-calculator-container">
        <h2>Tank Size Calculator</h2>

        <label htmlFor="fish-select">Select a fish species:</label>
        <select
          id="fish-select"
          value={selectedFish}
          onChange={(e) => setSelectedFish(e.target.value)}
        >
          <option value="">-- Select Fish --</option>
          {fishData.map((fish) => (
            <option key={fish.id} value={fish.name}>
              {fish.name}
            </option>
          ))}
        </select>

        <label htmlFor="height-input">Height (cm):</label>
        <input
          id="height-input"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height in cm"
          min="0"
        />

        <label htmlFor="width-input">Width (cm):</label>
        <input
          id="width-input"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="Width in cm"
          min="0"
        />

        <label htmlFor="length-input">Length (cm):</label>
        <input
          id="length-input"
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Length in cm"
          min="0"
        />

        <button onClick={handleCalculate}>Calculate</button>

        {suggestion && <p>{suggestion}</p>}
      </div>
    </>
  );
};

export default TankCalculator;
