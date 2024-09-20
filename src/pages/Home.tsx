import React from 'react';
import { Avatar, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from '@nextui-org/react';
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
        <div className="containerY scroll-hidden">
            {/*第一个竖直分页*/}
            <div className="child flex flex-col items-center h-full">
                <Avatar src='https://avatars.githubusercontent.com/u/35602393?v=4' name='Xx_OVO_xX' className="mt-5 w-150 h-150 text-large" />
                <div className="text-start mt-5">
                    <span dangerouslySetInnerHTML={{ __html: typeText1 }} />{/*需要使用dangerouslySetInnerHTML来解析HTML内容，来实现换行*/}
                </div>
                <svg className="mt-auto mb-20"><use href={`${iconUrl}#icon-downDoubleArrow`}></use></svg>
            </div>
            {/*第二个竖直分页*/}
            <div className="child flex flex-col items-center h-full">
                <h2 className="text-xl mt-5">我搞过的东西</h2>
                <div className="containerX scroll-hidden ">
                    <Card className="childX">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="Unity logo"
                                height={40}
                                radius="sm"
                                src="https://cdn.sanity.io/images/fuvbjjlp/production/2495ab2daae11fd3ed5d6b84477d513869f9a1b4-89x100.png"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Unity项目</p>
                                <p className="text-small text-default-500">C#</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p style={{ color: 'var(--text-color)' }}>大学本科毕业设计，用Unity3D实现客户端，用C#控制台程序实现服务端，服务器封包拆包使用谷歌Protobuf协议，服务端数据库采用MySQL</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://github.com/xxovoxx/UnityProject"
                            >
                                客户端部分的Github链接。
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="childX">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="Ton logo"
                                height={40}
                                radius="sm"
                                src="https://ton.tg/icons/custom/ton_logo.svg"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Ton接入React前端的练习项目</p>
                                <p className="text-small text-default-500">FunC</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Ton钱包和Ton区块链（不过是在测试网部署的）</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://github.com/xxovoxx/LearnTonPart3"
                            >
                                项目的Github链接。
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="childX">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="React logo"
                                height={40}
                                radius="sm"
                                src="https://zh-hans.react.dev/images/brand/logo_light.svg"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">React静态页面，个人页面</p>
                                <p className="text-small text-default-500">TypeScript</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>就是你现在看到的这个东西，使用了React、Tailwind以及NextUI，React的项目部署到Github Page上还怪麻烦的（见项目源代码中的.github\workflows\deploy.yml）,响应式布局，以及夜间模式（用localStorage实现设置的数据持久化）</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://github.com/xxovoxx/xxovoxx.github.io"
                            >
                                项目的Github链接。
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;