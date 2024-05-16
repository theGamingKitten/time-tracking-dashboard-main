import imgSrc from './assets/image-jeremy.png';
import CategoryCard from './components/CategoryCard';
import ProfileCard from './components/ProfileCard';
import Attribution from './components/Attribution';
import './output.css';
import data from './data.json';
import { useState } from 'react';

export default function App() {
  const [timeframe, setTimeframe] = useState("daily");
  
  return (
    <>
      <main className='grid gap-5 md:grid-flow-row md:grid-cols-4'>
        <ProfileCard
          imgSrc={imgSrc}
          fullName="Jeremy Robson"
          handleClick={setTimeframe}
          timeframe={timeframe}
        />        
        <CategoryCard
          category="Work"
          bgColor="bg-light-red-work"
          bgImage="bg-work"
          data={data[0]}
          timeframe={timeframe}
        />
        <CategoryCard
          category="Play"
          bgColor="bg-soft-blue-play"
          bgImage="bg-play"
          data={data[1]}
          timeframe={timeframe}
        />
        <CategoryCard
          category="Study"
          bgColor="bg-light-red-study"
          bgImage="bg-study"
          data={data[2]}
          timeframe={timeframe}
        />
        <CategoryCard
          category="Exercise"
          bgColor="bg-lime-green-exercise"
          bgImage="bg-exercise"
          data={data[3]}
          timeframe={timeframe}
        />
        <CategoryCard
          category="Social"
          bgColor="bg-violet-social"
          bgImage="bg-social"
          data={data[4]}
          timeframe={timeframe}
        />
        <CategoryCard
          category="Self Care"
          bgColor="bg-soft-orange-self-care"
          bgImage="bg-self-care"
          data={data[5]}
          timeframe={timeframe}
        />        
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  )
}