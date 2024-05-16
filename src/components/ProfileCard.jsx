export default function ProfileCard({ imgSrc, fullName, handleClick, timeframe }) {

    return (
        <>
            <div className='w-full rounded-lg md:row-span-2'>
            <div className='bg-blue p-5 rounded-lg flex flex-row items-center justify-around md:flex-col'>
            <img 
              src={imgSrc} 
              className='w-16 rounded-full border border-white inline-block md:self-start'
            />
            <span className='font-light'>
              <span className='block text-sm'>Report for</span>
              <span className='text-lg'>{fullName}</span>
            </span>
          </div>
          <div className='px-7 py-5 text-sm text-desaturated-blue bg-dark-blue flex flex-row items-center justify-between md:flex-col md:items-start md:gap-3'>
            <button onClick={() => handleClick("daily")} className={`hover:cursor-pointer hover:text-white ${timeframe === "daily" ? "text-white": "text-desaturated-blue"}`}>Daily</button>
            <button onClick={() => handleClick("weekly")} className={`hover:cursor-pointer hover:text-white ${timeframe === "weekly" ? "text-white": "text-desaturated-blue"}`}>Weekly</button>
            <button onClick={() => handleClick("monthly")} className={`hover:cursor-pointer hover:text-white ${timeframe === "monthly" ? "text-white": "text-desaturated-blue"}`}>Monthly</button>
          </div>
        </div>
        </>
    )
}