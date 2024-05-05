import icons from "./icons";

const { MdOutlineLibraryMusic } = icons;

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
        icon: <MdOutlineLibraryMusic size={24} />,
    },
    {
        path: 'zing-chat',
        text: '#zingchat',
        icon: <MdOutlineLibraryMusic size={24} />,
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icon: <MdOutlineLibraryMusic size={24} />,
    },
]