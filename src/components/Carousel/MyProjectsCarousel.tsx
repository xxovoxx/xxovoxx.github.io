import React, { useRef, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Button } from '@nextui-org/react';
import '../../styles/ScrollSnap.css'

interface CardData {
    imgName: string;
    imgSrc: string;
    projectName: string;
    languageUsed: string;
    projectIntroduction: string;
    linkSrc: string;
    linkIntroduction: string;
}
const initialCards: CardData[] = [
    {
        imgName: 'Unity logo',
        imgSrc: 'https://cdn.sanity.io/images/fuvbjjlp/production/2495ab2daae11fd3ed5d6b84477d513869f9a1b4-89x100.png',
        projectName: 'Unity项目',
        languageUsed: 'C#',
        projectIntroduction: '大学本科毕业设计，用Unity3D实现客户端，用C#控制台程序实现服务端，服务端与客户端间的数据收发的数据包使用谷歌的Protobuf协议，服务端数据库采用MySQL',
        linkSrc: 'https://github.com/xxovoxx/UnityProject',
        linkIntroduction: '客户端部分的Github链接。',
    },
    {
        imgName: 'Ton logo',
        imgSrc: 'https://ton.tg/icons/custom/ton_logo.svg',
        projectName: 'Ton接入React前端的练习项目',
        languageUsed: 'FunC',
        projectIntroduction: 'Ton钱包和Ton区块链（不过是在测试网部署的）',
        linkSrc: 'https://github.com/xxovoxx/LearnTonPart3',
        linkIntroduction: '项目的Github链接。',
    },
    {
        imgName: 'React logo',
        imgSrc: 'https://zh-hans.react.dev/images/brand/logo_light.svg',
        projectName: 'React静态页面，个人页面',
        languageUsed: 'TypeScript',
        projectIntroduction: '就是你现在看到的这个东西，使用了React、Tailwind以及NextUI，React的项目部署到Github Page上还怪麻烦的（见项目源代码中的.github\workflows\deploy.yml）,响应式布局，以及夜间模式（用localStorage实现设置的数据持久化）',
        linkSrc: 'https://github.com/xxovoxx/xxovoxx.github.io',
        linkIntroduction: '项目的Github链接。',
    },
]

const MyProjectsCarosel: React.FC = () => {
    const [cards] = useState<CardData[]>(initialCards);
    //横向滚动条的按钮
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: 'smooth' }); // 往左滚动 300px
        }
    };
    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // 往右滚动 300px
        }
    };

    return (
        <div className="relative mt-10">
            {/*左滚动按钮*/}
            <Button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-4/5 z-10 p-2 rounded-lg shadow w-8 hidden sm:flex"
                style={{ backgroundColor: 'var(--button-bg-color)' }}
                onClick={scrollLeft}
            >
                &lt;
            </Button>
            {/*主体部分*/}
            <div className="containerX scroll-hidden" ref={containerRef}>
                {cards.map((card, index) => (
                    <Card className="childX card" key={index} style={{ backgroundColor: 'var(--card-bg-color)', borderColor: 'var(--card-border-color)' }}>
                        <CardHeader className="flex gap-3">
                            <Image
                                alt={card.imgName}
                                height={40}
                                radius="sm"
                                src={card.imgSrc}
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md" style={{ color: 'var(--text-color)' }}>{card.projectName}</p>
                                <p className="text-small text-default-500" style={{ color: 'var(--text-color)' }}>{card.languageUsed}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p style={{ color: 'var(--text-color)' }}>{card.projectIntroduction}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href={card.linkSrc}
                            >
                                {card.linkIntroduction}
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            {/*右滚动按钮*/}
            <Button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4/5 z-10 p-2 rounded-lg shadow w-8 hidden sm:flex"
                style={{ backgroundColor: 'var(--button-bg-color)' }}
                onClick={scrollRight}
            >
                &gt;
            </Button>
        </div>
    );
};
export default MyProjectsCarosel;