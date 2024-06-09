import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const pd = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
 });

export default function Home() {
  return (
    <div className={pd.className}>
      <div className="relative w-full h-96 lg:h-screen">
        <img src="png/wedding-bg.png" className="w-full h-full object-cover absolute z-0" />
        <div className="absolute inset-0 bg-black opacity-50 z-10 h-full"></div>
        <div className="p-8 md:p-16 lg:p-32 relative z-20 mx-auto flex justify-center flex-col items-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold text-center my-8 md:my-5 lg:my-7">Eventzia - Make Your Events Memorable!</h1>
          <h2 className="text-base md:text-xl lg:text-2xl text-[#d4af37] text-center w-full md:w-3/4 lg:w-1/2">Be it your big wedding day, birthday party, anniversary dates, office party or retirement - we transform life milestones into unforgettable memories.</h2>
          <button type="button" className="bg-[#d4af37] px-4 py-1 md:px-8 md:py-2 my-4 md:my-6 lg:my-8 rounded-full font-bold text-[#321E1E] hover:bg-[#e1ba43] border border-white">Know More</button>
        </div>
      </div>
    </div>
  );
}
