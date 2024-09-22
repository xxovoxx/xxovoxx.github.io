import React from 'react';
import { Avatar } from '@nextui-org/react';
import useTypeEffect from '../hooks/TypeEffect';

import '../styles/ScrollSnap.css'
import iconUrl from "../assets/icon.svg";

import MyProjectsCarosel from "../components/Carousel/MyProjectsCarousel";
import MySkillsCarousel from "../components/Carousel/MySkillsCarousel"

const Home: React.FC = () => {
    const typeTextParts1 = [
        { text: "您好,\n", className: "font-bold text-5xl" },
        { text: "欢迎来到我的个人页面。\n", className: "font-bold text-4xl" },
        { text: "我是", className: "font-bold text-4xl" },
        { text: "玩PVP游戏很菜但是又菜又爱玩的\n", className: "font-bold text-xs" },
        { text: "辣稽PVP。", className: "font-bold text-4xl" },
    ];
    const typeText1 = useTypeEffect(typeTextParts1, 100);

    return (
        <div className="containerY scroll-hidden">
            {/*第一个竖直分页*/}
            <div className="child flex flex-col items-center h-full">
                <Avatar src='https://avatars.githubusercontent.com/u/35602393?v=4'
                    name='Xx_OVO_xX'
                    className="mt-5 text-large"
                    style={{ width: '300px', height: '300px' }}
                />
                <div className="text-start mt-5">
                    <span dangerouslySetInnerHTML={{ __html: typeText1 }} />{/*需要使用dangerouslySetInnerHTML来解析HTML内容，来实现换行*/}
                </div>
                <svg className="mt-auto mb-20"><use href={`${iconUrl}#icon-downDoubleArrow`}></use></svg>
            </div>
            {/*第二个竖直分页*/}
            <div className="child flex flex-col items-center h-full">
                <h2 className="text-xl mt-10">我搞过的东西</h2>
                <MyProjectsCarosel />
                <h2 className="text-xl mt-10">会的东西</h2>
                <MySkillsCarousel />
            </div>
        </div>
    );
};

export default Home;