"use client";

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Safety({ onClose }) {
  return (
    <div className="fixed inset-0 bg-red-900 z-50 overflow-y-auto">
      
      <header className="flex items-center justify-between p-4">
        <button onClick={onClose} className="flex items-center text-white">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-lg font-semibold">GO BACK</span>
        </button>
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold">SAFETY EARTHQUACK RISK</h1>
          <p className="text-lg">What to do during an earthquake</p>
        </div>
        <div className="w-24" /> {/* Spacer for alignment */}
      </header>

      {/* Content Sections */}
      <div className="p-6 space-y-6">
        {/* Section 1: หลบภัย */}
        <div className="flex items-start bg-[#FFE4E1] p-4 rounded-lg">
          <svg className="w-12 h-12 mr-4 text-[#5A1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <div>
            <h2 className="text-xl font-semibold text-[#5A1C1C]">หลบภัย</h2>
            <p className="text-[#5A1C1C]">
              ให้รีบหลบไปอยู่ในที่แข็งแรงและปลอดภัย เช่น ใต้โต๊ะที่มีโครงสร้างแข็งแรง<br />
              หลีกเลี่ยงการเข้าไปในลิฟต์ และให้หลบอยู่ในที่แข็งแรงจนกว่าการสั่นสะเทือนจะหยุดลง
            </p>
          </div>
        </div>

        {/* Section 2: สำรวจสถานที่โดยใช้ D-S-G และหลีกเลี่ยงอันตราย */}
        <div className="flex items-start bg-[#FFE4E1] p-4 rounded-lg">
          <svg className="w-12 h-12 mr-4 text-[#5A1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4"
            />
          </svg>
          <div>
            <h2 className="text-xl font-semibold text-[#5A1C1C]">
              สำรวจสถานที่โดยใช้ D-S-G และหลีกเลี่ยงอันตราย
            </h2>
            <p className="text-[#5A1C1C]">
              หากอยู่ในอาคาร ให้ใช้หลัก D-S-G (Drop-Cover-Hold on) ในการหลบภัย เช่น<br />
              หมอบลง คลุมศีรษะ-คอ และยึดเกาะกับสิ่งของที่แข็งแรง หลีกเลี่ยงการวิ่งหนี<br />
              หรือกระโดดออกจากหน้าต่าง เพื่อป้องกันอันตรายจากสิ่งของที่อาจตกลงมา
            </p>
          </div>
        </div>

        {/* Section 3: ป้องกันอันตรายเพิ่มเติม */}
        <div className="flex items-start bg-[#FFE4E1] p-4 rounded-lg">
          <svg className="w-12 h-12 mr-4 text-[#5A1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div>
            <h2 className="text-xl font-semibold text-[#5A1C1C]">ป้องกันอันตรายเพิ่มเติม</h2>
            <p className="text-[#5A1C1C]">
              ระวังอันตรายจากสิ่งของที่อาจตกลงมา เช่น เศษกระจก เศษปูน หรือของหนัก<br />
              ให้สวมรองเท้าที่แข็งแรงเพื่อป้องกันเท้าจากการบาดเจ็บ<br />
              และระวังอันตรายจากไฟไหม้ แก๊สรั่ว หรือสายไฟที่อาจเกิดขึ้นหลังแผ่นดินไหว
            </p>
          </div>
        </div>

        {/* Section 4: อพยพอย่างปลอดภัย */}
        <div className="flex items-start bg-[#FFE4E1] p-4 rounded-lg">
          <svg className="w-12 h-12 mr-4 text-[#5A1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 12v-1a2 2 0 00-2-2H7m-3 7h16m-5-7v6m-6-6v6m-3-6v1a2 2 0 002 2h3"
            />
          </svg>
          <div>
            <h2 className="text-xl font-semibold text-[#5A1C1C]">อพยพอย่างปลอดภัย</h2>
            <p className="text-[#5A1C1C]">
              หลังจากแผ่นดินไหวหยุดลง ให้รีบอพยพไปยังที่โล่งแจ้ง<br />
              หลีกเลี่ยงการใช้ลิฟต์ ให้ใช้บันไดฉุกเฉินแทน<br />
              และระวังอาฟเตอร์ช็อกที่อาจเกิดขึ้นตามมา
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

