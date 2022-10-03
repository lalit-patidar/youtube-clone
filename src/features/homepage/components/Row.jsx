import React from 'react'
import VideoCard from '../../../components/cards/video-card'

export default function Row({items, count}) {
  return (
    <div className='row-container'>
        {items.map(item => {
            return <VideoCard items={item}  />
        })}
    </div>
  )
}
