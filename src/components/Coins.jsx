import React from 'react'
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import Coin from './Coin';

const Coins = (props) => {
  return (
      <>
        <div className='flex flex-col'>
            <div className='bg-[#26272b] text-white'>
                <div className='max-w-[1240px] m-auto'>
                    <div className='flex font-bold items-center justify-between shadow-[0_0_12px_#18191b] rounded-lg mx-4 px-4 py-3 '>
                        <p>#</p>
                        <p className='-ml-16'>Coin</p>
                        <p>Price</p>
                        <p>24h</p>
                        <p className='hidden md:block'>Volume</p>
                        <p className=' hidden md:block'>Mkt Cap</p>
                    </div>

                    {props.coins.map(coins => {
                        return (
                            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
                                <CoinItem coins={coins} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </>
    
  )
}

export default Coins