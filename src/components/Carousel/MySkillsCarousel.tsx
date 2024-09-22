import React, { useRef, useEffect } from 'react';
import { Card, CardHeader, CircularProgress, Image } from '@nextui-org/react';

interface CardData {
    imgName: string;
    imgSrc: string;
    title: string;
    description: string;
    value: number;
    level: string;
}

const initialCards: CardData[] = [
    {
        imgName: 'Unity logo',
        imgSrc: 'https://cdn.sanity.io/images/fuvbjjlp/production/2495ab2daae11fd3ed5d6b84477d513869f9a1b4-89x100.png',
        title: 'Unity引擎',
        description: '全栈,大体都知道',
        value: 70,
        level: 'B',
    },
    {
        imgName: 'React logo',
        imgSrc: 'https://zh-hans.react.dev/images/brand/logo_light.svg',
        title: 'React前端',
        description: '在学',
        value: 40,
        level: 'C',
    },
    {
        imgName: 'C# logo',
        imgSrc: 'https://learn.microsoft.com/zh-cn/dotnet/media/logo_csharp.png',
        title: 'C#',
        description: '写的还是不够多',
        value: 60,
        level: 'B',
    },
    {
        imgName: 'Java logo',
        imgSrc: 'https://img.icons8.com/?size=48&id=13679&format=png',
        title: 'JAVA',
        description: '在学Minecraft插件开发',
        value: 50,
        level: 'B',
    },
    {
        imgName: 'Adobe PR logo',
        imgSrc: 'https://cdn.icon-icons.com/icons2/1088/PNG/512/1485282149-adobe-premiere-pro-cc-creative-cloud_78301.png',
        title: 'Adobe PR',
        description: '会基础的视频剪辑操作',
        value: 60,
        level: 'B',
    },
    {
        imgName: 'Aseprite logo',
        imgSrc: 'https://cdn.icon-icons.com/icons2/3911/PNG/512/aseprite_logo_icon_247548.png',
        title: '像素画',
        description: 'Aseprite steam 2000小时',
        value: 60,
        level: 'B',
    },
    {
        imgName: 'Blender logo',
        imgSrc: 'https://cdn.icon-icons.com/icons2/195/PNG/256/Blender_23505.png',
        title: 'Blender',
        description: '仅了解基础操作及工作流',
        value: 30,
        level: 'C',
    },
];

const MySkillsCarousel: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 1; // 每次滚动的像素
    const intervalTime = 1500; // 控制滚动的速度

    // 在初始卡片数组末尾添加第一个卡片以模拟循环
    const cardsWithClone = [...initialCards, initialCards[0]];

    const scrollRight = (isReset = false) => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

            // 判断是否到达复制的最后一个卡片
            if (scrollLeft + clientWidth >= scrollWidth && !isReset) {
                containerRef.current.scrollTo({ left: 0, behavior: 'auto' }); // 瞬间回到第一张卡片
                // 回到第一张卡片后立刻触发下一次滚动
                setTimeout(() => scrollRight(true), 0);
            } else {
                containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => scrollRight(), intervalTime); // 控制滚动的速度
        return () => clearInterval(interval); // 清理定时器
    }, []);

    return (
        <div className="relative mt-10">
            <div className="containerX2" ref={containerRef}>
                {cardsWithClone.map((card, index) => (
                    <Card
                        key={index}
                        className="childX2 card"
                        style={{ backgroundColor: 'var(--card-bg-color)', borderColor: 'var(--card-border-color)' }}
                    >
                        <CardHeader className="flex justify-center gap-3">
                            <Image
                                alt={`${card.title} logo`}
                                height={40}
                                radius="sm"
                                src={card.imgSrc}
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md" style={{ color: 'var(--text-color)' }}>
                                    {card.title}
                                </p>
                                <p className="text-small text-default-500" style={{ color: 'var(--text-color)' }}>
                                    {card.description}
                                </p>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <CircularProgress size="lg" value={card.value} color='success' />
                                <span style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'var(--text-color)'
                                }}>
                                    {card.level}
                                </span>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MySkillsCarousel;