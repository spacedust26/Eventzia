import React from 'react'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
import Link from 'next/link'

const RightBar = () => {
  return (
    <div className='container text-white'>
      <div className="item relative bg-gradient-to-tr from-[#321E1E] to-[#503C3C] p-[20px] rounded-lg mb-[20px]">
        <div className="bgContainer absolute bottom-0 right-0 w-[50%] h-[50%]">
          <Image src="/gif/plant.gif" alt="eco-wedding" fill className='bg object-contain opacity-50' />
        </div>
        <div className="texts flex flex-col gap-2">
          <span className='notification font-bold text-sm'>🔥 Trending Now</span>
          <h3 className='title font-semibold text-lg text-gray-200'>How to organise a sustainable wedding ?</h3>
          <span className='subtitle text-sm'>Know in 10 minutes</span>
          <p className='desc text-sm'>Tie the knot with nature in mind: exchange vows under a canopy of local blooms, and let your digital invites whisper love through the ether. Celebrate your union with eco-chic flair, where every detail—from upcycled decor to plantable favors—leaves a lighter footprint on the earth.</p>
          <Link href="https://www.youtube.com/watch?v=AuE8nDr1jis"><button className='button p-[10px] flex items-center gap-2 bg-[#d4af37] border-none rounded-lg cursor-pointer max-w-max'><MdPlayCircleFilled /> Watch</button></Link>
        </div>
      </div>

      <div className="item relative bg-gradient-to-tr from-[#321E1E] to-[#503C3C] p-[20px] rounded-lg mb-[20px]">
        <div className="bgContainer absolute bottom-0 right-0 w-[50%] h-[50%]">
          <Image src="/gif/disco.gif" alt="eco-wedding" fill className='bg object-contain opacity-50' />
        </div>
        <div className="texts flex flex-col gap-2">
          <span className='notification font-bold text-sm'>🚀 Coming soon</span>
          <h3 className='title font-semibold text-lg text-gray-200'>Throw a grand party in a budget !</h3>
          <span className='subtitle text-sm'>Read for 5 minutes</span>
          <p className='desc text-sm'>
          Transform your space with DIY decor and creative lighting, making every corner shimmer with charm and personality. Serve up a feast of potluck delights and signature homemade drinks, turning your low-budget bash into a grand celebration of community and creativity</p>
          <Link href="https://www.ramseysolutions.com/budgeting/birthday-party-ideas"><button className='button p-[10px] flex items-center gap-2 bg-[#d4af37] border-none rounded-lg cursor-pointer max-w-max'><MdReadMore /> Learn</button></Link>
        </div>
      </div>
    </div>
  )
}

export default RightBar
