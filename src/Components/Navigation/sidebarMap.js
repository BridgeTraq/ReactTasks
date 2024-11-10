import {
    LiaBoldSolid,
    LiaHomeSolid, LiaBookmark,
    LiaGraduationCapSolid,
    LiaCameraRetroSolid,
    LiaCertificateSolid,
    LiaConnectdevelop,
    LiaFigma,
    LiaMedapps,
    LiaQuestionCircle
} from "react-icons/lia";
import { FcSettings } from "react-icons/fc";

export const sideBars1 = [
    {
        key: 'home',
        label: 'Home',
        icon: <LiaHomeSolid />,
        path: '/'
    },
    {
        key: 'bookmarks',
        label: 'Bookmarks',
        icon: <LiaBookmark />,
        path: '/bookmarks'
    },
]

export const sideBars2 = [
    {
        key: 'courses',
        label: 'Courses',
        icon: <LiaGraduationCapSolid />,
        path: '/courses'
    },
    {
        key: 'tutorials',
        label: 'Tutorials',
        icon: <LiaCameraRetroSolid />,
        path: '/tutorials'
    },
    {
        key: 'best',
        label: 'Best Practices',
        icon: <LiaMedapps />,
        path: '/best'
    },
    {
        key: 'certifications',
        label: 'Certifications',
        icon: <LiaCertificateSolid />,
        path: '/certifications'
    },
]

export const sideBars3 = [
    {
        key: 'resources',
        label: 'Resources',
        icon: <LiaFigma />,
        path: '/resources'
    },
    {
        key: 'events',
        label: 'Events',
        icon: <LiaBoldSolid />,
        path: '/events'
    },
    {
        key: 'community',
        label: 'Community',
        icon: <LiaConnectdevelop />,
        path: '/community'
    },
]

export const last = [
    {
        key: 'settings',
        label: 'Setting',
        icon: <FcSettings />,
        path: '/setting'
    },
    {
        key: 'help',
        label: 'Help Center',
        icon: <LiaQuestionCircle />,
        path: '/help'
    },
]