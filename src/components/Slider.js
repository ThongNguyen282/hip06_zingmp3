import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Slider = () => {

    const { banner } = useSelector(state => state.app)
    // const { info } = banner.items
    // console.log("banner", banner.items);


    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item');
        console.log(sliderEls);
    })
    return (
        <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8' >
            {banner?.map(item => (
                <img src={item.banner} key={item.encodeId} alt="" className='slider-item flex-1 object-contain w-1/3 rounded-lg' />
            ))}
        </div>

    )
}

export default Slider