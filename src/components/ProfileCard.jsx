export default function ProfileCard({ imgSrc, fullName, handleClick, timeframe }) {

    return (
        <>
            <div className='w-full rounded-xl md:row-span-2'>
            <div className='bg-blue px-5 py-7 rounded-xl flex flex-row items-center justify-around md:flex-col'>
            <img 
              src={imgSrc} 
              className='w-16 rounded-full border-4 border-white inline-block md:self-start md:mb-10'
            />
            <span className='font-light'>
              <span className='block text-base md:text-sm'>Report for</span>
              <span className='text-xl md:text-3xl'>{fullName}</span>
            </span>
          </div>
          <div className='px-7 py-5 text-lg text-desaturated-blue bg-dark-blue flex flex-row items-center justify-between md:flex-col md:items-start md:gap-3'>
            <button onClick={() => handleClick("daily")} className={`hover:cursor-pointer hover:text-white ${timeframe === "daily" ? "text-white": "text-desaturated-blue"}`}>Daily</button>
            <button onClick={() => handleClick("weekly")} className={`hover:cursor-pointer hover:text-white ${timeframe === "weekly" ? "text-white": "text-desaturated-blue"}`}>Weekly</button>
            <button onClick={() => handleClick("monthly")} className={`hover:cursor-pointer hover:text-white ${timeframe === "monthly" ? "text-white": "text-desaturated-blue"}`}>Monthly</button>
          </div>
        </div>
        </>
    )
}