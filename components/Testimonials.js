"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className='mt-16 text-[#321E1E] mb-16' id='testimonials'>
      <h2 className='text-center text-4xl'>Testimonials</h2>
      <p className='text-center mt-3'>
        Heartfelt testimonials from our satisfied clients highlight the exceptional quality and impact of our services
      </p>
      <div className='w-3/4 m-auto'>
        <div className="mt-12">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className='bg-[#321E1E] h-[500px] text-black rounded-xl'>
                <div className='h-56 bg-[#d4af37] flex justify-center items-center rounded-t-xl'>
                  <img src={d.img} alt={d.name} className='h-52 w-52 rounded-full'/>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 p-4'>
                  <p className='text-xl font-semibold text-white'>{d.name}</p>
                  <p className='text-white'>{d.event}</p>
                  <p className='text-center text-[#d4af37]'>{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: 'Anitha and Ankit Srinivasan',
    img: '/images/Anitha-Ankit.png',
    event: 'Wedding',
    review: 'We had the dreamiest destination wedding planned by our event planner with the help of Eventzia. An absolute amazing website that led to a smooth flow of events and within the budget !'
  },
  {
    name: 'Rahul Sharma and Riya',
    img: '/images/Rahul-Riya.png',
    event: 'Baby Shower',
    review: 'Thank to Eventzia, we could plan our baby shower with ease right from the comfort of our homes by choosing among the vast choice of vendors. We could achieve what we wanted and all the guests loved the event - the food, the decorations, everything !'
  },
  {
    name: 'Rita Allen',
    img: '/images/rita.png',
    event: 'Birthday Celebration',
    review: 'I moved into a new place and had absolutely no clue about how I could find stuff for my 25th birthday. I came to know about this one stop website to manage all the events from my friends at the office. From then on, there is no going back 😊.'
  },
  {
    name: 'Elvish Bhai',
    img: '/images/Elvish-Bhai.png',
    event: 'Wedding Anniversary',
    review: 'I organised my parents 50th wedding anniversary with Eventzia without having to waste time for finding the right vendors. I was able to do it with so much ease that my parents had no clue that a surprise awaited them. '
  },
  {
    name: 'Rupal Agarwal',
    img: '/images/Rupal-Agarwal.png',
    event: 'House Warming',
    review: 'Absolutely love Eventzia ! I was able to find the best pandit ji and the best fresh flower decorations in my budget. The guests appreciated the food so much. I was overjoyed. Eventzia is going to be my constant for event plannings.'
  },
  {
    name: 'Ben Adams',
    img: '/images/Ben-Adams.png',
    event: 'Funeral',
    review: 'Recently my father passed away and we were too stunned. This was a painful period and I wanted his favourite flowers in his coffin. I wanted all that he liked to be present in his remembrance. I could manage all this through Eventzia. Thank you loads.'
  }
];

export default Testimonials;
