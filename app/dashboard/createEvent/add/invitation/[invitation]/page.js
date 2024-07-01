"use client";
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { notFound, usePathname } from 'next/navigation';
import Star from '@/components/dashboard/Star';
import Link from 'next/link';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { CartContext } from '@/app/lib/CartContext';
import toast, { Toaster } from 'react-hot-toast';

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/invitation", { cache: "no-store" });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const SingleDecor = () => {
  const { addItemToCart } = useContext(CartContext);
  const pathname = usePathname();
  const invitationName = decodeURIComponent(pathname.split("/").pop().replaceAll("_", " "));

  const [invitationData, setinvitationData] = useState([]);
  const [invitationItems, setinvitationItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (!data) return notFound();

      const filteredInvitation = data.invitation.filter(v => v.title === invitationName);
      setinvitationData(filteredInvitation);

      const filteredinvitationItems = data.items.filter(item => item.title === invitationName);
      setinvitationItems(filteredinvitationItems);
    };

    fetchData();
  }, [invitationName]);

  if (invitationData.length === 0) {
    return <div className="text-[#321E1E] text-center text-2xl m-12">Invitations & Gifts not found</div>;
  }

  const addToCartHandler = (product) => {
    addItemToCart({
      id: product._id,
      category: product.category,
      title: product.title,
      address: product.address,
      stock: product.stock,
      price: product.price,
      package: product.package,
      quantity: 1
    });
    toast.success("Booking successful");
  };

  return (
    <>
      <Toaster />
      <Link href="/dashboard/createEvent/add/invitation" passHref>
        <div className='bg-[#321E1E] p-3 w-fit mt-4 rounded-full text-white hover:scale-105 cursor-pointer'>
          <MdOutlineArrowBackIosNew />
        </div>
      </Link>
      <form className='flex items-center justify-center flex-col m-8 gap-8'>
        {invitationData.map((v) => (
          <React.Fragment key={v.id}>
            <div className="top flex items-center justify-start flex-row gap-8 bg-[#321E1E] p-8 text-white rounded-lg">
              <div className="left rounded-lg">
                <Image src={v.img} width={1000} height={1000} alt={v.title} className='rounded-lg' />
              </div>
              <div className="right flex items-start justify-center flex-col gap-3 w-2/3">
                <span className='title text-3xl text-[#d4af37]'>{v.title}</span>
                <div className="flex flex-col">
                  <span className='text-[#d4af37] font-bold text-lg'>About Us</span>
                  <span>{v.about}</span>
                </div>
                <div className="flex flex-col">
                  <span className='text-[#d4af37] font-bold text-lg'>Location</span>
                  <span>{v.address}</span>
                </div>
                <div className="flex flex-col">
                  <span className='text-[#d4af37] font-bold text-lg'>Contact us</span>
                  <span>{v.contact}</span>
                  <span>{v.email}</span>
                </div>
                <Star stars={v.star} reviews={v.review} />
              </div>
            </div>

            <div className="bottom flex flex-row gap-8 text-white w-full">
              <div className='left bg-[#321E1E] rounded-lg p-8 flex flex-col gap-5 w-full'>
                <p className='text-[#d4af37] font-bold text-lg text-center'>Overview</p>

                <div className='flex flex-col gap-7'>
                  <div className="flex flex-col">
                    <span className='text-[#d4af37] font-bold'>Packages</span>
                    {Object.entries(v.packages)
                      .filter(([key]) => key !== '_id')
                      .map(([packageName, price], index) => (
                        <span key={index} className=''>
                          {packageName}: {price}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <div className="right bg-[#321E1E] rounded-lg p-8 flex flex-col gap-3 w-full">
                <p className='text-[#d4af37] font-bold text-lg'>Specifications</p>
                {v.specifications.map((specification, index) => (
                  <span key={index} className=''>{specification}</span>
                ))}
              </div>
            </div>


            <div className="bg-[#321E1E] rounded-lg p-8 flex flex-col gap-3 w-full text-white">
              <p className='text-[#d4af37] font-bold text-lg'>Book Your Choice</p>
              <div className="">
                <div className="flex flex-row gap-3">
                  <table className='table-fixed w-full text-left'>
                    <thead>
                      <tr>
                        <th className='p-2'>Package</th>
                        <th className='p-2'>Price</th>
                      </tr>
                    </thead>
                    {invitationItems.map((vi) => {
                      const inStock = vi.stock >= 1;
                      return (
                        <tbody key={vi.id}>
                          <tr>
                            <td className='p-2'>{vi.packages}</td>
                            <td className='p-2'>{vi.price}</td>
                            <td className='p-2 flex flex-row gap-2 items-center'>
                              <button
                                className="bg-[#d4af37] px-4 py-1 font-bold text-[#321E1E] hover:bg-[#e1ba43] hidden sm:block"
                                onClick={() => addToCartHandler(vi)}
                                disabled={!inStock}
                              >
                                Book
                              </button>
                              {inStock ? <span className='text-sm'>(Booking Open)</span> : <span className='text-sm'>(Booking Closed)</span>}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </form>
    </>
  );
};

export default SingleDecor;
