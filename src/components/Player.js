import React from 'react'
import { useSelector } from 'react-redux'

const Player = () => {



    const { curSongId } = useSelector(state => state.music)
    console.log("haha", curSongId)

    return (
        <div className='bg-main-400 px-5 h-full flex justify-between'>
            <div className='w-[30%] flex-auto'>
                detail song
            </div >
            <div className='w-[40%] flex-auto'>
                main player
            </div>
            <div className='w-[30%] flex-auto'>
                Volume
            </div>
        </div>
    )
}

export default Player