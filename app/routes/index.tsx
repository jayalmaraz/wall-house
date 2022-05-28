import { useEffect, useState } from 'react';
import Logo from '~/components/Logo';

// const PROBABILITY_ROW = PROBABILITY_TABLE.reduce<Array<ProbabilityTableItems>>((prev, current) => {
//   const prevProb = prev?.[0]?.[0] ?? 0;
//   const currentProb = current[0];
//   const currentItem = current[1];
//   prev.push([prevProb + currentProb, currentItem]);
//   return prev;
// }, []);

// const PROBABILITY_LOOKUP: {
//   [key: number]: Item;
// } = {};
// PROBABILITY_ROW.forEach((item, index, items) => {
//   PROBABILITY_LOOKUP[item[0]] = item[1];
// });

type Item = string;
type ProbabilityTableItems = [number, Item];

const PROBABILITY_TABLE: Array<ProbabilityTableItems> = [
  [0.5, 'Finish your drink'],
  [0.5, 'Kiss the person to your left'],
  [0.5, 'Kiss the person to your right'],
  [0.5, 'Do a funnel'],
  [0.5, 'Have a celebrity shot'],
  [0.5, 'Spell ICUP'],
  [0.5, 'Yell the first word that comes to mind'],
  [0.5, 'Get yourself a cup of punch'],
  [0.5, 'Post something to the Facebook event'],
  [0.5, 'Get a photo with a Spongebob character'],
  // [0.5, 'karen-1'],
  // [0.5, 'karen-2'],
  // [0.5, 'karen-3'],
];

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
      <Logo className="bg-white h-20" />

      <div className="grid h-full pb-32 px-4 pt-16">
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
