import imgSrc from './assets/image-jeremy.png';
import dotsSvg from './assets/icon-ellipsis.svg';

export default function App() {
  return (
    <>
      <main className='grid grid-flow-row gap-5'>
        <div id="hero-card"
        className='w-full rounded-lg'>
          <div 
            className='bg-blue p-5 rounded-lg flex flex-row items-center justify-around'
            id="hero-card-top">
            <img 
              src={imgSrc} 
              className='w-16 rounded-full border border-white inline-block'
            />
            <span className='font-light'>
              <span className='block text-sm'>Report for</span>
              <span className='text-lg'>Jeremy Robson</span>
            </span>
          </div>
          <div 
            className='px-7 py-5 text-sm text-desaturated-blue bg-dark-blue flex flex-row items-center justify-between'
            id="hero-card-bottom">
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
          </div>
        </div>
        <div id="work-card"
          className='pt-8 bg-work bg-no-repeat bg-right-top bg-light-red-work flex flex-col justify-end rounded-lg h-13'>                          
            <div id="work-card-bottom"
              className='bg-dark-blue rounded-lg grid grid-cols-2 grid-rows-2 p-6 gap-x-8 items-center justify-between'>
                <span className='font-normal'>Work</span>
                <img className='justify-self-end' src={dotsSvg}/>
                <span className='text-3xl font-light'>32hrs</span>
                <span className='text-pale-blue text-xs justify-self-end'>Last Week - 36hrs</span>
            </div>
        </div>
        <div id="play-card"
          className='pt-8 bg-play bg-no-repeat bg-right-top bg-soft-blue-play flex flex-col justify-end rounded-lg h-13'>                          
            <div id="play-card-bottom"
              className='bg-dark-blue rounded-lg grid grid-cols-2 grid-rows-2 gap-x-5 p-7 items-center justify-between'>
                <span className='font-normal'>Play</span>
                <img className='justify-self-end' src={dotsSvg}/>
                <span className='text-3xl font-light'>10hrs</span>
                <span className='text-pale-blue text-xs justify-self-end'>Last Week - 8hrs</span>
            </div>
        </div>
        <div id="study-card"
          className='pt-8 bg-study bg-no-repeat bg-right-top bg-light-red-study flex flex-col justify-end rounded-lg h-13'>                          
            <div id="study-card-bottom"
              className='bg-dark-blue rounded-lg grid grid-cols-2 grid-rows-2 gap-x-5 p-5 items-center justify-between'>
                <span className='font-normal'>Study</span>
                <img className='justify-self-end' src={dotsSvg}/>
                <span className='text-3xl font-light'>10hrs</span>
                <span className='text-pale-blue text-xs justify-self-end'>Last Week - 8hrs</span>
            </div>
        </div>
        <div id="exercise-card"
          className='pt-8 bg-exercise bg-no-repeat bg-right-top bg-lime-green-exercise flex flex-col justify-end rounded-lg h-13'>                          
            <div id="exercise-card-bottom"
              className='bg-dark-blue rounded-lg grid grid-cols-2 grid-rows-2 gap-x-5 p-5 items-center justify-between'>
                <span className='font-normal'>Exercise</span>
                <img className='justify-self-end' src={dotsSvg}/>
                <span className='text-3xl font-light'>10hrs</span>
                <span className='text-pale-blue text-xs justify-self-end'>Last Week - 8hrs</span>
            </div>
        </div>
        <div id="social-card"
          className='pt-8 bg-social bg-no-repeat bg-right-top bg-violet-social flex flex-col justify-end rounded-lg h-13'>                          
            <div id="social-card-bottom"
              className='bg-dark-blue rounded-lg grid grid-cols-2 grid-rows-2 gap-x-5 p-5 items-center justify-between'>
                <span className='font-normal'>Social</span>
                <img className='justify-self-end' src={dotsSvg}/>
                <span className='text-3xl font-light'>10hrs</span>
                <span className='text-pale-blue text-xs justify-self-end'>Last Week - 8hrs</span>
            </div>
        </div>
        <div id="self-care-card"
          className='pt-8 bg-self-care bg-no-repeat bg-right-top bg-soft-orange-self-care flex flex-col justify-end rounded-lg h-13'>                          
            <div id="self-care-card-bottom"
              className='bg-dark-blue rounded-lg grid grid-cols-2 grid-rows-2 gap-x-5 p-5 items-center justify-between'>
                <span className='font-normal'>Self Care</span>
                <img className='justify-self-end' src={dotsSvg}/>
                <span className='text-3xl font-light'>10hrs</span>
                <span className='text-pale-blue text-xs justify-self-end'>Last Week - 8hrs</span>
            </div>
        </div>
        
      </main>
    </>
  )
}