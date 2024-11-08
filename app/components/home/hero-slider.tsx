'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const topmost = [
    {
        featureImage: '/images/bs-img1-1.jpg',
        postDate: 'Oct 28, 2020',
        category: 'Mobile Accessories',
        title: 'Insure your Company’s Assets',
        descp: 'An incredible new way of havin',
        link: '/#',
    },
    {
        featureImage: '/images/bs-img2-1.jpg',
        postDate: 'Oct 28, 2020',
        category: 'Mobile Accessories',
        title: 'Cyber insurance for company',
        descp: 'Time to connect with other link',
        link: '/#',
    },
    {
        featureImage: '/images/bs-img3-1.jpg',
        postDate: 'Oct 28, 2020',
        category: 'Mobile Accessories',
        title: 'Cyber Security of Today’s Market',
        descp: 'The most amazing digital and w',
        link: '/#',
    },
    {
        featureImage: '/images/bs-img1-1.jpg',
        postDate: 'Oct 28, 2020',
        category: 'Mobile Accessories',
        title: 'Insure your Company’s Assets',
        descp: 'An incredible new way of havin',
        link: '/#',
    },
    {
        featureImage: '/images/bs-img2-1.jpg',
        postDate: 'Oct 28, 2020',
        category: 'Mobile Accessories',
        title: 'Cyber insurance for company',
        descp: 'Time to connect with other link',
        link: '/#',
    },
    {
        featureImage: '/images/bs-img3-1.jpg',
        postDate: 'Oct 28, 2020',
        category: 'Mobile Accessories',
        title: 'Cyber Security of Today’s Market',
        descp: 'The most amazing digital and w',
        link: '/#',
    },
]


function Heroslider() {
    const animation = {
        hide: { y: 10, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

  return (
    <div className='relative'>
    <Swiper loop={true} slidesPerView={1.35} modules={[Pagination]} centeredSlides={true} spaceBetween={30}
        pagination={{
            clickable: true,
            el: ".pagination",
            renderBullet: function (index, className) {
                return '<span class="cursor-pointer !w-3 !h-10 flex justify-center !bg-transparent !opacity-100 relative after:!w-px after:!h-5 after:!bg-white after:absolute after:left-50 after:bottom-0 [&.swiper-pagination-bullet-active]:after:!h-10 hover:after:!h-10 after:ease-in-out after:duration-200 ' + className + '"><span class="invisible">' + (index + 1) + '</span></span>';
            },
        }}
        className="mySwiper bg-gray-50">
        {topmost.map((item, index) =>
            <SwiperSlide key={index}>
                <div className='relative max-h-[750px]'>
                    <Image src={item.featureImage} alt="" width={1920} height={650} className='w-full h-auto ' />
                    <div className='absolute inset-0 flex items-stretch'>
                        <div className='max-w-7xl mx-auto flex justify-center items-center'>
                            <div className='flex flex-col gap-2 max-w-sm'>
                                <motion.p
                                    initial={animation.hide}
                                    whileInView={animation.show}
                                    transition={{ delay: 0.3 }} className='text-white uppercase text-xs text-center gap-1 inline-flex justify-center tracking-wider'><span>{item.postDate}</span><span>{item.category}</span></motion.p>
                                <motion.h2 initial={animation.hide}
                                    whileInView={animation.show}
                                    transition={{ delay: 0.45 }} className='text-3xl uppercase text-white font-semibold font-rajdhani text-center tracking-widest'>{item.title}</motion.h2>
                                <motion.p initial={animation.hide}
                                    whileInView={animation.show}
                                    transition={{ delay: 0.55 }} className='text-center text-white tracking-wider'>{item.descp}</motion.p>
                                <motion.div initial={animation.hide}
                                    whileInView={animation.show}
                                    transition={{ delay: 0.65 }} className='flex justify-center pt-5'>
                                    <Link href={item.link} className='border border-white font-rajdhani font-semibold uppercase tracking-widest text-white hover:text-brand-500 hover:bg-white px-5 pb-2 pt-2.5 ease-in-out duration-200'>Read More</Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )}
    </Swiper>
    <div className="pagination flex justify-center gap-1 absolute bottom-0 inset-x-0 p-3 md:p-5 z-10" />
</div>
  )
}

export default Heroslider
