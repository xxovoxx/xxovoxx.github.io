import React from "react";
import { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Switch } from "@nextui-org/react";
import UsePathname from "../../hooks/UsePathname";
import iconUrl from "../../assets/icon.svg";
import '../../styles/globals.css';

const CustomNavbar: React.FC = () => {
    const currentPath = UsePathname();

    // 从 localStorage 初始化状态
    const [LightOrDarkMode, setDarkmode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem("LightOrDarkMode");
        return savedMode === "true"; // 返回布尔值
    });

    // 当状态变化时更新 localStorage
    useEffect(() => {
        localStorage.setItem("LightOrDarkMode", LightOrDarkMode.toString());
    }, [LightOrDarkMode]);

    // Get the LightOrDarkMode value from localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("LightOrDarkMode");
        const LightOrDarkMode = savedMode === "true";
        console.log(LightOrDarkMode);
        // Apply global CSS based on LightOrDarkMode value
        if (LightOrDarkMode) {
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
            console.log("1");
        } else {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
            console.log("2");
        }
    }, [LightOrDarkMode]); // This effect runs only once, when the component mounts

    return (
        <Navbar isBordered>
            <NavbarBrand>

                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="flat" className="sm:hidden">
                            <svg width="50" height="50">
                                <use href={`${iconUrl}#icon-lines`}></use>
                            </svg>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu onAction={(key) => { window.location.href = `/${key}`; }}>
                        <DropdownItem key="">
                            <div className="flex justify-center items-center h-full">
                                <Link color={currentPath === "/" ? "primary" : "foreground"}>
                                    主页
                                </Link>
                            </div>
                        </DropdownItem>
                        <DropdownItem key="Media">
                            <div className="flex justify-center items-center h-full">
                                <Link color={currentPath === "/Media" ? "primary" : "foreground"}>
                                    跳转
                                </Link>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <div className="hidden sm:flex">
                    <Avatar src='https://avatars.githubusercontent.com/u/35602393?v=4' className="w-6 h-6 text-tiny" />
                    <p className="font-bold text-inherit">Xx_OVO_xX的个人页面</p>
                </div>


            </NavbarBrand>

            <NavbarContent className="sm:hidden gap-4" justify="center">
                <Avatar src='https://avatars.githubusercontent.com/u/35602393?v=4' className="w-6 h-6 text-tiny" />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={currentPath === "/"}>
                    <Link color={currentPath === "/" ? "primary" : "foreground"} href="/">
                        主页
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currentPath === "/Media"}>
                    <Link color={currentPath === "/Media" ? "primary" : "foreground"} href="/Media">
                        跳转
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>

                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="flat">
                                <svg width="50" height="50">
                                    <use href={`${iconUrl}#icon-gear`}></use>
                                </svg>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" closeOnSelect={false}>
                            <DropdownItem key="darkmode">

                                <Switch
                                    size="lg"
                                    startContent={<svg style={{ color: "black" }}><use href={`${iconUrl}#icon-sun`}></use></svg>}
                                    endContent={<svg style={{ color: "white" }}><use href={`${iconUrl}#icon-moon`}></use></svg>}
                                    color="warning"
                                    classNames={{
                                        wrapper: "bg-black",
                                    }}

                                    isSelected={LightOrDarkMode}
                                    onValueChange={(checked) => setDarkmode(checked)}
                                >
                                    {LightOrDarkMode ? "日间模式" : "夜间模式"}
                                </Switch>

                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </NavbarItem>
            </NavbarContent>
        </Navbar >
    );
};

export default CustomNavbar;