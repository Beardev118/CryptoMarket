import React from 'react'

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='flex items-center'>
            <img className='w-10 h-10 mr-2' src={props.coins.image} alt='' />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>{props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hidden md:block'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hidden md:block'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem