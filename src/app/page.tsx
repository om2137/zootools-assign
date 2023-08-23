"use client";
import Chart from "@/component/Chart";
import HorizontalBar from "@/component/HorizontalBar";
import { useState } from "react";

export default function Home() {

  const data = [30000, 20000, 10000, 5000, 3000, 2000];
  const trafficS = ["   Google","   Twitter","   Facebook","   Linkedin","   YouTube","   Other"];
  const locS = ["  🍔 United states","  🍕 Germany","  🍟 Netherlands","  🌭 India","  🥙 Japan","  🍳 Other"];
  const behaviourS= ["       United states","       Germany","       Netherlands","       India","       Japan","       Other"];
  const [time, setTime] = useState('30');
  console.log(time);
  return (
    <main className="flex w-min-screen h-screen flex-col items-center ">

      {/* header */}
      <div className='w-screen flex items-center justify-between px-40 py-14'>
        <div className='flex'>
          <h1 className="text-4xl font-semibold tracking-wide py-2">Summer referral competition</h1>
        </div>
        
        <div className='flex text-2xl justify-center border border-white rounded-lg shadow-md shadow-gray-400 py-1 px-2'>
          <a className={`text-gray-500 font-semibold my-1 mx-2 py-2 px-4 rounded-xl ${time === '1' ? 'bg-[#e2e3e8]' : 'bg-[#f8f9fa]'}`} onClick={() => setTime('1')}>
            1h 
          </a> 
          <a className={`text-gray-500 font-semibold my-1 mx-2 py-2 px-4 rounded-xl  ${time === '24' ? 'bg-[#e2e3e8]' : 'bg-[#f8f9fa]'}`} onClick={() => setTime('24')}>
            24h
          </a>
          <a className={`text-gray-500 font-semibold my-1 mx-2 py-2 px-4 rounded-xl  ${time === '30' ? 'bg-[#e2e3e8]' : 'bg-[#f8f9fa]'}`} onClick={() => setTime('30')}>
            30d 
          </a>
          <a className={`text-gray-500 font-semibold my-1 mx-2 py-2 px-4 rounded-xl  ${time === '60' ? 'bg-[#e2e3e8]' : 'bg-[#f8f9fa]'}`}  onClick={() => setTime('60')} >
            60d
          </a>
        </div>
      </div>
      
      {/* main graph */}
      <div className='flex w-screen px-40 mb-12'>
        <div className='w-screen shadow-lg rounded-xl p-12'>
          <div className='flex flex-col'>
            <span className='text-5xl font-semibold'>
              100,000
            </span>
            <span className='text-3xl p-2'>
              Participants
            </span>
            <div className="h-96">
              <Chart />
            </div>
            
          </div>
        </div>
        
      </div>

      {/* zootools insights */}
      <div className='flex w-screen px-40 mb-12'>
        <div className='shadow-md shadow-gray-300 rounded-xl w-screen p-12 mb-12'>
          <div className='flex flex-col'>
            <span className='text-5xl font-semibold'>ZooTools insights</span>
            <span className='text-2xl py-2'>
              Making analytics simple and actionable
            </span>
          </div>
          <div className='flex py-6'>
            <div className='w-1/2'>
              <span className='text-3xl font-semibold'>
                Summary
              </span>
              <div className='text-xl p-4'>
                <div className='flex p-4'>
                  <p className="font-semibold">Signups are slowing down.</p> 
                  <p>&nbsp;-5% new than last week</p>
                </div>
                <div className='flex p-4'>
                  <p className="font-semibold">80% </p> 
                  <p>&nbsp;of your signups were invited by other members.</p>
                </div>
                <div className='flex p-4'>
                  <p className="font-semibold">80% </p> 
                  <p>&nbsp;of your signups were invited by a friend</p>
                </div>
                <div className='flex p-4'>
                  <p className="font-semibold">80% </p> 
                  <p>&nbsp;of your signups were invited by a friend</p>
                </div>
              </div>
            </div>
            <div className='w-1/2'>
              <span className='text-3xl font-semibold'>
                Recommendation
              </span>
              <p className='text-xl font-semibold py-4'>
                Make sure to promote and share your form
              </p>
              <p className='text-xl font-semibold py-4'>
                Congrats! This is huge. keep giving rewards for your usrs
              </p>
            </div>
          </div>
        </div>
        
      </div>

      {/* user leaderboard and traffic graph */}
      <div className='flex w-screen px-40 mb-12'>
        {/* user leaderboard */}
        <div className='w-1/2 shadow-xl shadow-gray-300 rounded-xl w-screen p-12 mb-12 mr-16'>
          <div className="text-[2rem] font-semibold">User leaderboard</div>
          <div className="flex justify-between ">
            <div className="w-[50%] flex flex-col">
              <div className="text-2xl py-8">Email </div>
              <div className="text-[1.4rem]">
                <p className=" pb-8">paula.suarze@con...es</p>
                <p className=" pb-8">laura.kenet..3@yahoo.com</p>
                <p className=" pb-8">arron.michael@arg.org</p>
                <p className=" pb-8">jeremy.runner@aol.com</p>
                
              </div>
            </div>
            <div className="w-[30%] flex flex-col">
              <div className="text-2xl py-8">Friends invited</div>
              <div className="text-[1.4rem]">
                <p className=" pb-8">6,500</p>
                <p className=" pb-8">2,300</p>
                <p className=" pb-8">1,200</p>
                <p className=" pb-8">900</p>
              </div>
            </div>
            <div className="w-[20%] flex flex-col">
              <div className="text-2xl py-8">Country</div>
              <div className="text-[1.4rem]">
                <p className=" pb-8">USA</p>
                <p className=" pb-8">Monaco</p>
                <p className=" pb-8">Prague</p>
                <p className=" pb-8">China</p>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <a className="bg-gray-100 text-xl font-semibold rounded-lg py-2 px-4" href='/update'>See leaderboard</a>
          </div>
        </div>
        {/* traffic */}
        <div className='w-1/2 shadow-xl shadow-gray-300 rounded-xl w-screen px-12 py-10 mb-12 mr-4'>
          <div className="flex justify-between text-3xl ">
            <div className="font-semibold p-3">Traffic</div>
            <div className="flex">
              <p className="bg-slate-100 text-2xl rounded-lg px-4 py-3 font-semibold">Source</p>
              <p  className="hover:bg-slate-100 text-2xl rounded-lg px-4 py-3">City</p>
            </div>
          </div>
          <div className="flex flex-col pt-0 pb-2">
            < HorizontalBar datas={data} labels={trafficS}/>
          </div>
          <div className="py-1">
            <a className="bg-gray-100 text-xl font-semibold rounded-lg py-2 px-4" href='/update'>See leaderboard</a>
          </div>
        </div>
      </div>

      {/* signup location graph and behaviour graph*/}
      <div className='flex w-screen px-40 mb-12'>
        {/* signup location graph */}
          <div className='w-1/2 shadow-xl shadow-gray-300 rounded-xl w-screen px-12 py-10 mb-12 mr-16'>
            <div className="flex justify-between text-3xl ">
              <div className="font-semibold p-3">Signup location</div>
              <div className="flex">
                <p className="bg-slate-100 text-2xl rounded-lg px-4 py-3 font-semibold">Country</p>
                <p  className="hover:bg-slate-100 text-2xl rounded-lg px-4 py-3">City</p>
              </div>
            </div>
            <div className="flex flex-col pt-4 pb-2">
              < HorizontalBar datas={data} labels={locS}/>
            </div>
            <div className="py-1">
              <a className="bg-gray-100 text-xl font-semibold rounded-lg py-2 px-4" href='/update'>See all countries</a>
            </div>
          </div>
        {/* behaviour graph */}
        <div className='w-1/2 shadow-xl shadow-gray-300 rounded-xl w-screen px-12 py-10 mb-12 mr-4'>
            <div className="flex justify-between text-3xl ">
              <div className="font-semibold p-3">Signup location</div>
              <div className="flex">
                <p className="bg-slate-100 text-2xl rounded-lg px-4 py-3 font-semibold">Browsers</p>
                <p  className="hover:bg-slate-100 text-2xl rounded-lg px-4 py-3">Decides</p>
              </div>
            </div>
            <div className="flex flex-col pt-4 pb-2">
              < HorizontalBar datas={data} labels={behaviourS}/>
            </div>
            <div className="py-1">
              <a className="bg-gray-100 text-xl font-semibold rounded-lg py-2 px-4" href='/update'>See all countries</a>
            </div>
          </div>
      </div>
    </main>
  )
}
