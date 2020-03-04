import React from "react";
import "./styles.css";

import Tier from "./components/Tier";
import { KataProvider } from "./KataContext";
import kata from "./kata/toRoman";

const TIER_LEVELS = {
  1: [
    {
      input: 1,
      output: "I"
    },
    {
      input: 2,
      output: "II"
    },
    {
      input: 3,
      output: "III"
    }
  ],
  2: [
    {
      input: 5,
      output: "V"
    },
    {
      input: 10,
      output: "X"
    },
    {
      input: 15,
      output: "XV"
    },
    {
      input: 50,
      output: "L"
    },
    {
      input: 100,
      output: "C"
    },
    {
      input: 500,
      output: "D"
    },
    {
      input: 1000,
      output: "M"
    }
  ],
  3: [
    {
      input: 99,
      output: "XCIX"
    },
    {
      input: 146,
      output: "CXLVI"
    },
    {
      input: 1984,
      output: "MCMLXXXIV"
    },
    {
      input: 2398,
      output: "MMCCCXCVIII"
    }
  ]
};
const TIER_SUBTITLES = {
  1: "Parse simple numbers using the same symbol",
  2: "Parse every rounded number and combine them",
  3: "Parse subtracted numbers"
};

export default function App() {
  return (
    <KataProvider kata={kata}>
      <div className="App">
        <h1>
          <span className="App__logo">[Spotahome]</span> Code Kata
        </h1>
        <p>
          Implement the code to make this tests pass. You will find the source
          code in the <i>kata</i> folder
        </p>
        <Tier
          level={1}
          subtitle={TIER_SUBTITLES[1]}
          useCases={TIER_LEVELS[1]}
        />
        <Tier
          level={2}
          subtitle={TIER_SUBTITLES[2]}
          useCases={TIER_LEVELS[2]}
        />
        <Tier
          level={3}
          subtitle={TIER_SUBTITLES[3]}
          useCases={TIER_LEVELS[3]}
        />
      </div>
    </KataProvider>
  );
}
