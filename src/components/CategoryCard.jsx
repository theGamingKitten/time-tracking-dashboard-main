import dotsSvg from '../assets/icon-ellipsis.svg';

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
        <div className={`${bgColor} ${bgImage} pt-8 bg-no-repeat bg-right-top flex flex-col justify-end rounded-lg h-13 hover:cursor-pointer`}>                          
            <div className='bg-dark-blue hover:brightness-150 rounded-lg grid grid-cols-2 grid-rows-2 p-6 gap-x-8 items-center justify-between'>
                <span className='font-normal'>{category}</span>
                <img className='justify-self-end hover:cursor-pointer' src={dotsSvg}/>
                <span className='text-3xl font-light'>{currentValue}hrs</span>
                <span className='text-pale-blue text-xs justify-self-end'>Last Week - {previousValue}hrs</span>
            </div>
        </div>
        </>
    )
}