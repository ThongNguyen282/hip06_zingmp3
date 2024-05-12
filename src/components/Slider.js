import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArrSlider } from '../ultis/fn'
import * as actions from '../store/actions'


const Slider = () => {

    const { banner } = useSelector(state => state.app)
    // const { info } = banner.items
    // console.log("banner", banner.items);
    const dispatch = useDispatch()

    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item');
        // console.log(sliderEls);

        let min = 0;
        let max = 2;
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1)



            for (let i = 0; i < sliderEls.length; i++) {
                // delete classnames (css)
                sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20');
                sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10');
                sliderEls[i]?.classList?.remove('animate-slide-left2', 'oder-2', 'z-10');
                if (list.some(item => item === i)) {
                    sliderEls[i].style.cssText = `display: block`;
                } else {
                    sliderEls[i].style.cssText = `display: none`;

                }
            }

            list.forEach(item => {
                if (item === max) {
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
                }
            })


            if (min === sliderEls.length - 1) {
                min = 0;
            } else {
                min += 1;
            }
            if (max === sliderEls.length - 1) {
                max = 0;
            } else {
                max += 1;
            }
            // console.log(list);
        }, 3000)
        return () => {
            intervalId && clearInterval(intervalId);
        }


    }, [])


    const handleClickBanner = (item) => {
        console.log(item.encodeId)
        if (item?.type === 1) {
            dispatch(actions.setCurSongId(item.encodeId))
        } else {
            dispatch(actions.setCurSongId(333))
        }
    }


    return (
        <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8' >
            {banner?.map((item, index) => (
                <img src={item.banner} key={item.encodeId}
                    onClick={() => { handleClickBanner(item) }}
                    alt="img" className={`slider-item flex-1 object-contain w-1/3 rounded-lg ${index <= 2 ? "block" : "hidden"}`} />
            ))}
        </div>

    )
}

export default Slider