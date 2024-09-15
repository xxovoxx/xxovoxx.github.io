import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.tsx";

const CustomNavbar: React.FC = () => {
    const currentPath = window.location.pathname;

    return (
        <Navbar isBordered>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">Xx_OVO_xX的个人页面</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={currentPath === "/"}>
                    <Link color="foreground" href="/">
                        主页
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currentPath === "/Media"}>
                    <Link href="/Media" aria-current="page">
                        跳转
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default CustomNavbar;