'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Image from 'next/image';

export default function MyPage() {
    const EarthRisk = useMemo(() => dynamic(
        () => import('@/components/map'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      ), [])

  return (
    <>
    <div className=" h-screen w-full">
      <EarthRisk />
      <button className="absolute top-[80px] left-[12px] z-[1000] bg-white text-black  border-1 border-grey-400 rounded-md  hover:bg-grey-700">
        <Image src = "/picture/earthfilter.png" width={30} height={30} alt='earthfilter'/>
      </button>
      <div className="absolute bottom-4 left-4 z-[1000] max-w-sm bg-white p-4 rounded-xl shadow-lg border-1 border-grey-400  hover:bg-gray-200">
          <h2 className="text-lg font-semibold mb-2">แผนที่ประเทศไทย</h2>
          <p className="text-sm text-gray-700">
            <strong>วันที่:</strong> 21 เม.ย. 2025<br />
          </p>
      </div>
      <div className='absolute top-[10px] right-[12px] z-[1000] max-w-sm bg-white p-5 rounded-xl shadow-lg border-1 border-grey-400  hover:bg-gray-200'>
         <h2 className="text-lg font-semibold ">รายละเอียด</h2>

         <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
            <p className="text-sm text-red-600 ">พื้นที่เสี่ยงมาก</p>
         </div>

         <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 bg-orange-600 rounded-sm"></span>
            <p className="text-sm text-orange-600 ">พื้นที่เสี่ยงปานกลาง</p>
         </div>
         
         <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 bg-yellow-500 rounded-sm"></span>
            <p className="text-sm text-yellow-500 ">พื้นที่เสี่ยงน้อย</p>
         </div>

      </div>
    </div>
    </>
  );
}
