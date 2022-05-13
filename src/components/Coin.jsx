import axios from 'axios'
import { useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import DOMPurify from 'dompurify'

const Coin = () => {

    
    const params = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [url]);

  return (
      <>
        <div className='flex flex-col'>
            <div className='w-fill bg-[#26272b] text-white'>
                <div>
                    <div className='content'>
                        <h1 className='text-3xl font-bold text-center'>{coin.name}</h1>
                    </div>

                    <div className='content'>
                        <div className='my-2'>
                            <span className='border border-indigo-600 bg-indigo-600 rounded-lg p-1'>Rank # {coin.market_cap_rank}</span>
                        </div>
                        <div className='grid grid-cols-2 gap-1'>
                            <div className='flex items-center my-4'>
                                {coin.image ? <img className='mr-2' src={coin.image.small} alt='' /> : null }
                                <p className='pr-4'>{coin.name}</p>
                                {coin.symbol ? <p className='pr-4'>{coin.symbol.toUpperCase()}/USD</p> : null }                        
                            </div>
                            <div className='flex items-center justify-center'>
                                {coin.market_data?.current_price ? <h1 className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                            </div>
                        </div>
                    </div>

                    <div className='content'>
                        <table className='my-2'>
                            <thead>
                                <tr>
                                    <th className='p-2 text-center bg-[#333] border-2 border-[#26272b] '>1h</th>
                                    <th className='p-2 text-center bg-[#333] border-2 border-[#26272b]'>7d</th>
                                    <th className='p-2 text-center bg-[#333] border-2 border-[#26272b]'>24h</th>
                                    <th className='p-2 text-center bg-[#333] border-2 border-[#26272b]'>14d</th>
                                    <th className='p-2 text-center bg-[#333] border-2 border-[#26272b]'>30d</th>
                                    <th className='p-2 text-center bg-[#333] border-2 border-[#26272b]'>1yr</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                                    <td className='p-2 text-center'>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p> : null}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>

                    <div className='content'>
                        <div className='grid grid-cols-2 gap-8 w-[100%]'>
                            <div>
                                <div className='flex justify-between border-b-2 my-2 pb-2'>
                                    <h4>24 Hour Low</h4>
                                    {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                                </div>
                                <div className='flex justify-between border-b-2 my-2 pb-2'>
                                    <h4>24 Hour High</h4>
                                    {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                        
                                </div>
                            </div>

                            <div>
                                <div className='flex justify-between border-b-2 my-2 pb-2'>
                                    <h4>Market Cap</h4>
                                    {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null }                        
                                </div>
                                <div className='flex justify-between border-b-2 my-2 pb-2'>
                                    <h4>Circulating Supply</h4>
                                    {coin.market_data?.circulating_supply ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}                        
                                </div>

                            </div>
                        </div>

                        <div className='content'>
                            <div>
                                <h3 className='my-4'>About</h3>
                                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    
  )
}

export default Coin