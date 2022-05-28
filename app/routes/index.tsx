import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';

type Item = string;
type ProbabilityTableItems = [number, Item];

const PROBABILITY_TABLE: Array<ProbabilityTableItems> = [
  [0.5, 'Finish your drink'],
  [0.5, 'Kiss someone (on the cheeks, COVID safe)'],
];

const PROBABILITY_ROW = PROBABILITY_TABLE.reduce<Array<ProbabilityTableItems>>((prev, current) => {
  const prevProb = prev?.[0]?.[0] ?? 0;
  const currentProb = current[0];
  const currentItem = current[1];
  prev.push([prevProb + currentProb, currentItem]);
  return prev;
}, []);

const PROBABILITY_LOOKUP: {
  [key: number]: Item;
} = {};
PROBABILITY_ROW.forEach((item, index, items) => {
  PROBABILITY_LOOKUP[item[0]] = item[1];
});

// function getItem(random: number) {
//   let result: Item = PROBABILITY_TABLE[0][1];
//   PROBABILITY_ROW.forEach((item, index, items) => {
//     const prevItemProb = items[index - 1]?.[0] ?? 0;
//     const currentItemProb = item[0];

//     if (prevItemProb < random && random < currentItemProb) {
//       result = item[1];
//     }
//   });

//   return result;
// }

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getItem(): Item {
  const index = getRandomInt(0, PROBABILITY_TABLE.length - 1);
  return PROBABILITY_TABLE[index][1];
}

const Index = () => {
  function rollDice() {
    const probabilityItem = getItem();
    return probabilityItem;
  }

  const [item, setItem] = useState<string>();

  useEffect(() => {
    const randomItem = rollDice();
    setItem(randomItem as string);
  }, []);

  return (
    <div className="flex justify-start items-center pt-20 h-screen w-screen flex-col text-center">
      <h1 className="text-2xl">174's Cartoon Network Special</h1>

      <div className="grid items-center h-full pb-32 px-4">
        <div>
          <h2 className="text-2xl">
            You must: <br />
            <span className="text-5xl font-bold">{item}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Index;
