import dotsSvg from '../assets/icon-ellipsis.svg';
import CountUp from 'react-countup';

export default function CategoryCard({category, bgColor, bgImage, data, timeframe }) {
    let currentValue = data.timeframes.daily.current;
    let previousValue = data.timeframes.daily.previous;

    if (timeframe === "daily") {
        currentValue = data.timeframes.daily.current;
        previousValue = data.timeframes.daily.previous;
      } else if (timeframe === "weekly") {
        currentValue = data.timeframes.weekly.current;
        previousValue = data.timeframes.weekly.previous;
      } else if (timeframe === "monthly") {
        currentValue = data.timeframes.monthly.current;
        previousValue = data.timeframes.monthly.previous;
      }
    return (
        <>
        <div className={`${bgColor} ${bgImage} pt-8 bg-no-repeat bg-right-top flex flex-col justify-end rounded-xl h-13 hover:cursor-pointer`}>                          
            <div className='bg-dark-blue hover:brightness-150 rounded-xl grid grid-cols-2 grid-rows-2 p-6 gap-x-12 justify-between md:grid-cols-1 md:grid-rows-3'>
                <span className='font-normal md:mb-3 md:text-sm'>{category}</span>
                <span className='hover:cursor-pointer justify-self-end md:row-start-1 md:row-span-3'><img src={dotsSvg}/></span>
                <span className='text-3xl font-light md:text-4xl'><CountUp end={currentValue} suffix="hrs"/></span>
                <span className='text-pale-blue text-base font-light whitespace-nowrap self-center md:text-sm'><CountUp end={previousValue} prefix="Last Week - " suffix="hrs"/></span>
            </div>
        </div>
        </>
    )
}