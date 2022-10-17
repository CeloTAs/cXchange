import Head from 'next/head'
import Image from 'next/image'
import UploadIcon from '../components/icons/UploadIcon'
import WithdrawalIcon from '../components/icons/WithdrawalIcon'
import Layout from '../components/Layout/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const title = 'cXchange | Dashboard'
  const content = 'cXchange Dashboard'


  const [openDeposit, setOpenDeposit] = useState();

  const handleToggleDeposit = () =>{
    setOpenDeposit(!openDeposit)
  }
  return (
    <>
    
     <Layout title={title} content={content}>
        <div className="main-box max-w-6xl mx-auto container px-2 sm:px-3 md:px-8 relative">

            <button className="block lg:hidden absolute top-3 right-6 md:right-20 p-3 bg-[#EDEEEFA3] text-[#292D32] rounded-full">
              <WithdrawalIcon/>
            </button>
            <main className="h-full pb-24 px-4 md:px-12 py-12">
                      <div className="w-full flex items-center justify-between pb-4 mb-3 flex-wrap relative">
                        <div className='grow py-4'> 
                          <h1 className="text-3xl font-bold text-gray-800 mb-3 ">
                            Welcome back, Anna
                            </h1>
                            <h2 className="text-md text-gray-400">
                              Swap, stake and transfer your crptocurrencies.
                            </h2>
                        </div>

                        <button className=" items-center mt-4 lg:mt-0 px-14 py-2 rounded h-12  bg-[#45CD85]  hover:bg-[#45CD85]/80 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md justify-center  " onClick={handleToggleDeposit}>
                
                            Deposit
                            
                        </button>

                      </div>
                    
                      <div className="flex my-6 items-stretch w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                          <div className="w-full md:w-7/12 flex-col flex-1 md:space-y-4 h-full">
                              <div className="shadow w-full bg-white relative px-6 py-6 rounded">
                                <div className='flex items-end justify-between  py-4'>
                                  <div className="flex items-center lg:items-start justify-center lg:justify-between flex-col gap-3 w-full">
                                      <h5>Total Balance </h5>
                                      <h3 className="text-neutral800 text-4xl	">$40,000.64</h3>
                                  </div>
                                  <div className='hidden lg:block'>
                                    <button className='text-sm text-[#45CD85] flex items-center gap-2'>
                                      <span>
                                        <UploadIcon />
                                      </span>
                                      withdraw
                                    </button>
                                    
                                  </div>
                                </div>
                                  
                              </div>
                              <div className="shadow w-full bg-white mt-3 md:mt-0  relative overflow-hidden rounded">
                                <div className="px-3 md:px-6 py-6 w-full relative">
                                    
                                  <div className="flex items-center justify-between flex-row w-full">
                                      <h5 className="text-gray-400 mb-3">Available Balances</h5>
                                      <button className="text-gray-400 text-xs">Hide</button>
                                  </div>


                                    <div className=" flex flex-col">
                                        <div className="flex items-center py-4 mb-2 text-sm w-full border-b border-gray-200">
                                            <div className="flex items-start gap-3 w-full">
                                                <span>
                                                <svg className='h-12 w-12' viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="24" cy="24.5" r="24" fill="#E7EFF3"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 27.4474C10 33.5514 14.9486 38.5 21.0526 38.5C27.1566 38.5 32.1053 33.5514 32.1053 27.4474C32.1053 21.3434 27.1566 16.3948 21.0526 16.3948C14.9486 16.3948 10 21.3434 10 27.4474ZM29.1579 27.4474C29.1579 31.9245 25.5297 35.5527 21.0526 35.5527C16.5756 35.5527 12.9474 31.9245 12.9474 27.4474C12.9474 22.9704 16.5756 19.3421 21.0526 19.3421C25.5297 19.3421 29.1579 22.9704 29.1579 27.4474Z" fill="#FBCC5C"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.8945 21.5526C15.8945 27.6566 20.8432 32.6053 26.9472 32.6053C33.0512 32.6053 37.9998 27.6566 37.9998 21.5526C37.9998 15.4486 33.0512 10.5 26.9472 10.5C20.8432 10.5 15.8945 15.4486 15.8945 21.5526ZM35.0524 21.5526C35.0524 26.0297 31.4242 29.6579 26.9472 29.6579C22.4701 29.6579 18.8419 26.0297 18.8419 21.5526C18.8419 17.0756 22.4701 13.4474 26.9472 13.4474C31.4242 13.4474 35.0524 17.0756 35.0524 21.5526Z" fill="#35D07F"/>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.8945 21.1872C16.8259 20.4209 17.9135 19.8727 19.0806 19.5809C19.3724 18.4108 19.9206 17.3232 20.687 16.3948C19.3371 16.439 18.0019 16.7308 16.7552 17.2554C16.2276 18.5021 15.9358 19.8344 15.8945 21.1872ZM28.919 29.4192C28.6272 30.5893 28.079 31.6769 27.3126 32.6053C28.6655 32.564 29.9977 32.2722 31.2444 31.7476C31.772 30.4979 32.0638 29.1657 32.1051 27.8129C31.1737 28.5792 30.0861 29.1274 28.919 29.4192Z" fill="#5EA33B"/>
                                                    </svg>
                                                </span>
                                                <div  className='w-full'>
                                                  <div className="flex gap-1 flex-row w-full items-end">
                                                      <p className="text-lg text-[#5B5B5B] font-semibold">Celo</p>
                                                  </div>
                                                  <div className="flex gap-1 items-center flex-row justify-between w-full">
                                                      <p className="text-xs font-normal">celo coin</p>
                                                      <p className="text-lg text-[#5B5B5B] font-semibold">$10,000.12</p>
                                                  </div>
                                                  <div className="flex gap-1 flex-row justify-between items-center w-full">
                                                      <p className="text-xs font-normal">Available</p>
                                                      <p className="text-sm text-[#5B5B5B]">CELO 10,000.12</p>
                                                  </div>
                                                  <div className="flex gap-1 flex-row justify-between items-end w-full">
                                                      <p className="text-sm">323</p>
                                                  </div>
                                                
                                                </div>
                                                
                                                
                                            </div>
                                        </div>

                                        <div className="flex items-center py-4 mb-2 text-sm w-full border-b border-gray-200">
                                            <div className="flex items-start gap-3 w-full">
                                                <span>
                                                    <svg className='h-12 w-12' viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24 48.5C37.2548 48.5 48 37.7548 48 24.5C48 11.2452 37.2548 0.5 24 0.5C10.7452 0.5 0 11.2452 0 24.5C0 37.7548 10.7452 48.5 24 48.5Z" fill="#45CD85"/>
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M27.466 27.6859H29.3733V26.1882C32.1865 25.85 33.9984 24.2074 33.9984 21.985C33.9984 18.893 31.5667 18.2166 29.2779 17.7818V13.6752C30.3746 13.7719 31.5667 14.11 32.6633 14.6415V12.2259C31.6143 11.8394 30.47 11.5978 29.3733 11.5495V10.1001H27.466V11.5495C24.5574 11.8877 22.8885 13.5303 22.8885 15.6077C22.8885 18.7481 25.2726 19.4727 27.5614 19.9076V24.0141C26.1786 23.8209 24.7004 23.2411 22.9839 22.3232V24.8838C24.462 25.6084 25.9878 26.0916 27.466 26.1882V27.6859ZM33.2355 30.0532C31.7574 34.2564 27.7998 37.3001 23.1269 37.3001C17.2143 37.3001 12.3984 32.4205 12.3984 26.4298C12.3984 21.6951 15.4024 17.6852 19.5508 16.1875V19.1346C16.8806 20.439 15.0686 23.2411 15.0686 26.4298C15.0686 30.9228 18.6925 34.5946 23.1269 34.5946C26.2739 34.5946 29.0395 32.7587 30.3269 30.0532H33.2355ZM29.2779 20.0525V24.0141C30.7561 23.8209 31.662 23.0479 31.662 21.985C31.662 20.8255 30.613 20.3907 29.2779 20.0525ZM25.2249 15.6077C25.2249 16.8156 26.2263 17.2987 27.5614 17.5886V13.6752C26.0832 13.8202 25.2249 14.4965 25.2249 15.6077Z" fill="white"/>
                                                        </svg>
                                                </span>
                                                <div  className='w-full'>
                                                  <div className="flex gap-1 flex-row w-full items-end">
                                                      <p className="text-lg text-[#5B5B5B] font-semibold ">cUSD</p>
                                                  </div>
                                                  <div className="flex gap-1 items-center flex-row justify-between w-full">
                                                      <p className="text-xs font-normal">Celo US Dollar</p>
                                                      <p className="text-lg text-[#5B5B5B] font-semibold">$10,000.12</p>
                                                  </div>
                                                  <div className="flex gap-1 flex-row justify-between items-center w-full">
                                                      <p className="text-xs font-normal">Available</p>
                                                      <p className="text-sm text-[#5B5B5B]">cUSD 10,000.12</p>
                                                  </div>
                                                  <div className="flex gap-1 flex-row justify-between items-end w-full">
                                                      <p className="text-sm">323</p>
                                                  </div>
                                                
                                                </div>
                                                
                                                
                                            </div>
                                        </div>


                                        <div className="flex items-center py-4 mb-2 text-sm w-full border-b border-gray-200">
                                            <div className="flex items-start gap-3 w-full">
                                                <span>
                                                <svg className='h-12 w-12' viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_1248_13586)">
                                                        <path d="M24 48.5C37.2548 48.5 48 37.7548 48 24.5C48 11.2452 37.2548 0.5 24 0.5C10.7452 0.5 0 11.2452 0 24.5C0 37.7548 10.7452 48.5 24 48.5Z" fill="#45CD85"/>
                                                        <path d="M21.3586 37.94C26.0626 37.94 30.0466 34.916 31.5346 30.74H28.6066C27.3106 33.428 24.5266 35.252 21.3586 35.252C16.8946 35.252 13.2466 31.604 13.2466 27.14C13.2466 23.972 15.0706 21.188 17.7586 19.892V16.964C13.5826 18.452 10.5586 22.436 10.5586 27.14C10.5586 33.092 15.4066 37.94 21.3586 37.94ZM30.3826 27.62C31.9666 27.62 33.4546 27.188 34.7026 26.42V23.924C33.5026 24.836 32.0626 25.412 30.4306 25.412C28.1266 25.412 26.3026 24.308 25.4386 22.484H31.8226L32.3986 20.564H24.8626C24.8146 20.276 24.8146 20.036 24.8146 19.748C24.8146 19.46 24.8146 19.172 24.8626 18.884H32.9266L33.5026 16.964H25.3906C26.2546 15.092 28.0306 13.988 30.4306 13.988C31.7266 13.988 32.9746 14.324 34.1266 14.948L34.7986 12.788C33.5026 12.116 31.9666 11.78 30.4306 11.78C26.8306 11.78 23.9986 13.844 22.9426 16.916H20.8306L20.2546 18.74H22.5586C22.5106 19.076 22.5106 19.412 22.5106 19.748C22.5106 20.084 22.5106 20.372 22.5586 20.708H20.8306L20.2546 22.532H22.9906C23.9986 25.604 26.7826 27.62 30.3826 27.62Z" fill="white"/>
                                                    </g>
                                                        <defs>
                                                            <clipPath id="clip0_1248_13586">
                                                                <rect width="48" height="48" fill="white" transform="translate(0 0.5)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <div  className='w-full'>
                                                  <div className="flex gap-1 flex-row w-full items-end">
                                                      <p className="text-lg text-[#5B5B5B] font-semibold">cEUR</p>
                                                  </div>
                                                  <div className="flex gap-1 items-center flex-row justify-between w-full">
                                                      <p className="text-xs font-normal">Celo Euro</p>
                                                      <p className="text-lg text-[#5B5B5B] font-semibold">€10,000.12</p>
                                                  </div>
                                                  <div className="flex gap-1 flex-row justify-between items-center w-full">
                                                      <p className="text-xs font-normal">Available</p>
                                                      <p className="text-sm text-[#5B5B5B]">cEUR 10,000.12</p>
                                                  </div>
                                                  <div className="flex gap-1 flex-row justify-between items-end w-full">
                                                      <p className="text-sm">323</p>
                                                  </div>
                                                
                                                </div>
                                                
                                                
                                            </div>
                                        </div>



                                        <div className="flex items-center py-4 mb-2 text-sm w-full">
                                            <div className="flex items-start gap-3 w-full">
                                                <span>
                                                    
                                                    <svg className='h-12 w-12' viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_10_21578)">
                                                    <path d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z" fill="#45CD85"/>
                                                    <path d="M20.0102 35.834C24.5182 35.834 28.3362 32.936 29.7622 28.934H26.9562C25.7142 31.51 23.0462 33.258 20.0102 33.258C15.7322 33.258 12.2362 29.762 12.2362 25.484C12.2362 22.448 13.9842 19.78 16.5602 18.538V15.732C12.5582 17.158 9.66016 20.976 9.66016 25.484C9.66016 31.188 14.3062 35.834 20.0102 35.834ZM19.3202 25.622H21.6202V19.872H21.8042C22.1262 19.872 22.4942 19.826 22.7702 19.826L24.7022 25.622H27.2322L24.6562 19.228C25.8522 18.584 26.7262 17.112 26.7262 15.272C26.7262 12.558 25.0242 11.086 21.7582 11.086H19.3202V25.622ZM21.6202 17.94V13.064H21.9882C23.6902 13.064 24.4262 13.8 24.4262 15.502C24.4262 17.158 23.6902 17.94 21.9882 17.94H21.6202ZM31.5562 23.368L32.0162 19.642C32.7522 20.01 33.2122 20.562 33.2122 21.436C33.2122 22.494 32.6602 23.276 31.5562 23.368ZM29.7622 26.956H31.3262L31.5102 25.392C33.7182 25.254 35.2362 23.552 35.2362 21.298C35.2362 19.596 34.4082 18.17 32.3842 17.434L32.8442 13.432C33.3962 13.57 33.9942 13.846 34.5922 14.26V11.96C34.1322 11.684 33.6262 11.5 33.1202 11.408L33.3502 9.75195H31.7862L31.6482 11.316C29.4402 11.5 28.0602 13.11 28.0602 15.318C28.0602 17.48 29.3482 18.722 30.7742 19.274L30.3142 23.184C29.6702 23 28.9342 22.678 28.1062 22.172V24.518C28.7502 24.84 29.3942 25.116 29.9922 25.254L29.7622 26.956ZM31.1422 17.02C30.4062 16.652 30.0842 16.054 30.0842 15.226C30.0842 14.122 30.5902 13.432 31.6022 13.294L31.1422 17.02Z" fill="white"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_10_21578">
                                                    <rect width="46" height="46" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                    </svg>

                                                </span>
                                                <div  className='w-full'>
                                                  <div className="flex gap-1 flex-row w-full items-end">
                                                      <p className="text-lg text-[#5B5B5B] font-semibold">cReal</p>
                                                  </div>
                                                  <div className="flex gap-1 items-center flex-row justify-between w-full">
                                                      <p className="text-xs font-normal">Celo Real</p>
                                                      <p className="text-lg text-[#5B5B5B] font-semibold">R$10,000.12</p>
                                                  </div>
                                                  <div className="flex gap-1 flex-row justify-between items-center w-full">
                                                      <p className="text-xs font-normal">Available</p>
                                                      <p className="text-sm text-[#5B5B5B]">cReal 10,000.12</p>
                                                  </div>
                                                  <div className="flex gap-1 flex-row justify-between items-end w-full">
                                                      <p className="text-sm">323</p>
                                                  </div>
                                                
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                          </div>
                          <div className="w-full md:w-5/12 space-x-4 rounded h-full shadow px-4 py-6 bg-white">
                              <div className="  relative">
                                  <div className="w-full  flex items-center justify-between pb-2">
                                      <h4 className="text-md  text-[#5B5B5B]   font-normal	 ">
                                        Recent Transactions
                                      </h4>

                                  </div>
                                  <div className='h-full flex-1 grow'>
                                    <div className='flex items-center justify-center h-full flex-col gap-9 py-14'>
                                      <div>
                                        <img src='/images/pic.svg'/>
                                      </div>
                                      <div>No recent transactions</div>
                                      
                                    </div>
                                      
                                  </div>
                              </div>
                          </div>
                      </div>
                      
            </main>


            <div  className={`modal ${openDeposit ? 'show' : ''}`}>
                <div className="modal-wrapper shadow-lg rounded-md">
        
                <div className="flex items-start justify-between mb-5">

                    <div className="grow">
                        <h1 className="text-xl font-semibold">Deposit</h1>
                    </div>

                    
                    <button className="btn btn-sm btn-label-brand btn-bold flex items-start" onClick={()=>setOpenDeposit(false)}>
                           <span className="pointer-events-none">
                               <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 5L5 15M5 5L15 15" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                           </span>             
                        
                    </button>

                </div>
                    
                    <div>
                        
                    {/* // border-l border-[#E6E3E3] border-r */}

                        <Tabs>
                            <TabList className='flex md:flex-row flex-col items-center justify-between w-full tabs-header rounded-md gap-2'>
                                <Tab className='w-full py-4 rounded-l-md text-sm outline-none focus-within:border-0 focus:border-0'>Fiat Connect</Tab>
                                <Tab className='w-full py-4   text-sm outline-none focus-within:border-0 focus:border-0'>Crypto address</Tab>
                                <Tab className='w-full py-4 rounded-r-md text-sm outline-none focus-within:border-0 focus:border-0'>Debit Card</Tab>
                            </TabList>

                        <div className='mt-3 py-6'>
                            <TabPanel>
                                <div  className='fade-in'>

                                </div>

                            </TabPanel>
                            <TabPanel>
                                <div  className='fade-in'>
                                    <div className="flex md:flex-row flex-col items-start md:items-center gap-4 flex-wrap">
                                            <label className="text-gray-700 font-medium  " htmlFor="cello_address">Celo Address</label>
                                            <div className='h-12 w-full relative flex-1'>
                                                <span className='absolute inset-y-0 right-0 px-3 flex items-center cursor-pointer h-full text-[#45CD85]  '>
                                                    copy
                                                </span>
                                                <input id="cello_address" type="text" className=" block w-full h-full pl-4 pr-14 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="cello_address" defaultValue='0xGI5678vviu9755iNFTDXVH55787'/>
                                            </div>
                                            
                                            
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel >
                            <div className='fade-in'>
                                    <h4 className='mb-3 font-semibold'>Add your Card</h4>

                                    <div className="mb-6 flex md:flex-row flex-col items-start md:items-center gap-4 flex-wrap">
                                        <label className="text-gray-700 font-medium w-full md:w-1/5 " htmlFor="cello_address">Card number</label>
                                        <div className='h-12 w-full relative flex-1'>
                                            <input id="cello_address" type="text" className=" block w-full h-full px-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="cello_address" defaultValue='0xGI5678vviu9755iNFTDXVH55787'/>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex md:flex-row flex-col items-start md:items-center gap-4 flex-wrap">
                                        <label className="text-gray-700 font-medium md:w-1/5 " htmlFor="cello_address">Name on Card</label>
                                        <div className='h-12 w-full  relative flex-1'>
                                            <input id="cello_address" type="text" className=" block w-full h-full px-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="cello_address" defaultValue='0xGI5678vviu9755iNFTDXVH55787'/>
                                        </div>
                                    </div>

                                    <div className='flex md:gap-6 flex-col md:flex-row'>
                                        <div className="mb-6 flex md:flex-row flex-col items-start md:items-center gap-4 flex-wrap w-full md:w-1/2">
                                            <label className="text-gray-700 font-medium  " htmlFor="expiry_date">Expiry date</label>
                                            <div className='h-12 w-full relative flex-1'>
                                                <input id="expiry_date" type="text" className=" block w-full h-full px-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="expiry_date" defaultValue=''/>
                                            </div>
                                        </div>
                                        <div className="mb-6 flex md:flex-row flex-col items-start md:items-center gap-4 flex-wrap w-full md:w-1/2">
                                            <label className="text-gray-700 font-medium  " htmlFor="cvv">CVV</label>
                                            <div className='h-12 w-full relative flex-1'>
                                                <input id="cvv" type="text" className=" block w-full h-full px-4 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="cvv" defaultValue=''/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                           
                        </Tabs>
                    </div>
                
                </div>
            </div>
            {/* <div  className="dialog fixed z-[10002] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-96 md:w-[40em] max-w-2lg bg-white rounded-md px-3 lg:px-8 py-6 space-y-5 shadow-lg overflow-y-auto h-auto max-h-full fade-in">
                <div className="">
        
                <div className="flex items-start justify-between mb-5">

                    <div className="grow">
                        <h1 className="text-xl font-semibold">Deposit</h1>
                    </div>

                    
                    <button className="btn btn-sm btn-label-brand btn-bold flex items-start" id="close">
                           <span className="pointer-events-none">
                               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 5L5 15M5 5L15 15" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                           </span>             
                        
                    </button>

                </div>
                    
                    <div>
                        
                    border-l border-[#E6E3E3] border-r

                        <Tabs>
                            <TabList className='flex items-center justify-between w-full tabs-header rounded-md gap-2'>
                                <Tab className='w-full py-4 rounded-l-md text-sm outline-none focus-within:border-0 focus:border-0'>Fiat Connect</Tab>
                                <Tab className='w-full py-4   text-sm outline-none focus-within:border-0 focus:border-0'>Crypto address</Tab>
                                <Tab className='w-full py-4 rounded-r-md text-sm outline-none focus-within:border-0 focus:border-0'>Debit Card</Tab>
                            </TabList>

                        <div className='mt-8 py-6'>
                            <TabPanel>

                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <div className="flex items-center gap-4 flex-wrap">
                                            <label className="text-gray-700 font-medium  " htmlFor="cello_address">Celo Address</label>
                                            <div className='h-12  relative flex-1'>
                                                <span className='absolute inset-y-0 right-0 px-3 flex items-center cursor-pointer h-full text-[#45CD85]  '>
                                                    copy
                                                </span>
                                                <input id="cello_address" type="text" className=" block w-full h-full pl-4 pr-14 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="cello_address" defaultValue='0xGI5678vviu9755iNFTDXVH55787'/>
                                            </div>
                                            
                                            
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div>
                                    <div className="mb-6 flex items-center gap-4 flex-wrap">
                                        <label className="text-gray-700 font-medium md:w-1/5 " htmlFor="cello_address">Card number</label>
                                        <div className='h-12  relative flex-1'>
                                            <input id="cello_address" type="text" className=" block w-full h-full pl-4 pr-14 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="cello_address" defaultValue='0xGI5678vviu9755iNFTDXVH55787'/>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex items-center gap-4 flex-wrap">
                                        <label className="text-gray-700 font-medium md:w-1/5 " htmlFor="cello_address">Name on Card</label>
                                        <div className='h-12  relative flex-1'>
                                            <input id="cello_address" type="text" className=" block w-full h-full pl-4 pr-14 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="cello_address" defaultValue='0xGI5678vviu9755iNFTDXVH55787'/>
                                        </div>
                                    </div>

                                    <div className='flex md:gap-6 flex-col md:flex-row'>
                                        <div className="mb-6 flex items-center gap-4 flex-wrap w-full md:w-1/2">
                                            <label className="text-gray-700 font-medium  " htmlFor="expiry_date">Expiry date</label>
                                            <div className='h-12  relative flex-1'>
                                                <input id="expiry_date" type="text" className=" block w-full h-full pl-4 pr-14 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="expiry_date" defaultValue=''/>
                                            </div>
                                        </div>
                                        <div className="mb-6 flex items-center gap-4 flex-wrap w-full md:w-1/2">
                                            <label className="text-gray-700 font-medium  " htmlFor="cvv">CVV</label>
                                            <div className='h-12  relative flex-1'>
                                                <input id="cvv" type="text" className=" block w-full h-full pl-4 pr-14 py-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" name="cvv" defaultValue=''/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                           
                        </Tabs>
                    </div>
                
                </div>
            </div> */}
        </div>
    </Layout>
    </>
  )
}
