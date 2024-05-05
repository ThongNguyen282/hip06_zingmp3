import icons from "./icons";

const { MdOutlineLibraryMusic, HiOutlineChartPie, TbChartArcs3, MdOutlineFeed } = icons;

export const sibebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icon: <MdOutlineLibraryMusic size={24} />,
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icon: <HiOutlineChartPie size={24} />,
    },
    {
        path: 'zing-chat',
        text: '#zingchat',
        icon: <TbChartArcs3 size={24} />,
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icon: <MdOutlineFeed size={24} />,
    },
]