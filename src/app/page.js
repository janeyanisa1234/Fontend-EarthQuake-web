"use client";

import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSafetyMode, setIsSafetyMode] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    import('leaflet').then((L) => {
      const map = L.map('map', {
        scrollWheelZoom: false, 
      }).setView([15.8700, 100.9925], 6); 

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      
      map.on('focus', () => { map.scrollWheelZoom.enable(); });
      map.on('blur', () => { map.scrollWheelZoom.disable(); });

      return () => {
        map.remove();
      };
    });
  }, []);

  const handleDashboardClick = (e) => {
    e.preventDefault();
    console.log('Navigate to dashboard');
  };

  const handleSafetyClick = (e) => {
    e.preventDefault();
    setIsSafetyMode(!isSafetyMode);
    console.log('Safety mode:', !isSafetyMode);
  };

  const handleFilterClick = (e) => {
    e.preventDefault();
    setIsFilterOpen(!isFilterOpen);
    console.log('Filter panel:', !isFilterOpen);
  };

  const handleSidebarClick = (e) => {
    e.preventDefault();
    setIsSidebarOpen(!isSidebarOpen);
  };

 return (
  <div className="relative h-screen w-screen overflow-hidden font-sans">
    <Head>
      <title>Earthquake Risk Map</title>
      <meta name="description" content="Earthquake risk map using Next.js and Leaflet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* Header - Fixed and Modern */}
    <header className="fixed top-0 left-0 w-full bg-red-900 text-white px-4 py-2 flex justify-between items-center z-20 shadow-lg">
      <div className="flex items-center">
        <img src="/earthquake.svg" alt="Logo" className="h-6 mr-2" />
        <h1 className="text-lg font-bold tracking-tight">EARTHQUAKE RISK</h1>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleSidebarClick}
          className="p-2 hover:bg-red-800 rounded-full transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button
          onClick={handleDashboardClick}
          className="p-2 hover:bg-red-800 rounded-full transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
        <button
          onClick={handleSafetyClick}
          className="p-2 hover:bg-red-800 rounded-full transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </button>
        <button
          onClick={handleFilterClick}
          className="p-2 hover:bg-red-800 rounded-full transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v3.586a1 1 0 01-.293.707l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 01-.293-.707v-3.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </button>
      </div>
    </header>

    <div
      className={`absolute top-16 z-30 transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-[-24rem]' : 'translate-x-0'
      }`}
      style={{ right: '1.5rem' }}
    >
      <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-xl h-50 w-45">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">ระดับความเสี่ยง</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-600 mr-1 rounded"></div>
            <span className="text-gray-700 text-sm">สูงมาก</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-500 mr-2 rounded"></div>
            <span className="text-gray-700 text-sm">สูงปานกลาง</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 mr-2 rounded"></div>
            <span className="text-gray-700 text-sm">สูง</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-200 mr-2 rounded"></div>
            <span className="text-gray-700 text-sm">สูง</span>
          </div>
        </div>
      </div>
    </div>

    <div id="map" className="absolute top-12 left-0 h-[calc(100vh-3rem)] w-full z-0 overflow-hidden"></div>


    <aside
      className={`absolute top-13 right-0 h-[calc(100vh-3rem)] bg-white p-6 z-20 shadow-2xl transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: '24rem' }}
    >
      <div className="space-y-2">
        <div className="h-12 bg-gray-100 rounded-lg shadow-sm"></div>
        <div className="h-12 bg-gray-100 rounded-lg shadow-sm"></div>
        <div className="h-12 bg-gray-100 rounded-lg shadow-sm"></div>
        <div className="h-12 bg-gray-100 rounded-lg shadow-sm"></div>
      </div>
    </aside>


    <footer className="absolute bottom-4 left-4 z-10">
      <div className="w-[450px] bg-white border border-gray-200 p-6 rounded-xl bg-gray-50 shadow-xl">
        <p className="text-lg text-gray-600">สถานที่: ประเทศไทย</p>
        <p className="text-lg text-gray-600">ละติจูด: 15.8700</p>
        <p className="text-lg text-gray-600">ลองจิจูด: 100.9925</p>
        <p className="text-lg text-gray-600">วันที่: 14 พ.ค. 2568 เวลา: 15:45</p>
      </div>
    </footer>
  </div>
);
}