import React from 'react';
import { Avatar } from '@nextui-org/react';
import useTypeEffect from '../hooks/TypeEffect';
import '../styles/ScrollSnap.css'
import iconUrl from "../assets/icon.svg";

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
        <div className="container scroll-hidden">
            <div className="child flex flex-col items-center h-full">
                <Avatar src='https://avatars.githubusercontent.com/u/35602393?v=4' name='Xx_OVO_xX' className="mt-5 w-150 h-150 text-large" />
                <p className="text-start mt-5">
                    <span dangerouslySetInnerHTML={{ __html: typeText1 }} />{/*需要使用dangerouslySetInnerHTML来解析HTML内容，来实现换行*/}
                </p>
                <svg className="mt-auto mb-20"><use href={`${iconUrl}#icon-downDoubleArrow`}></use></svg>
            </div>
            <div className="child justify-center">
                <h2 className="text-xl">这是下一部分</h2>
            </div>
        </div>
    );
};

export default Home;