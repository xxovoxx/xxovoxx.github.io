import { Button as NextUIButton } from "@nextui-org/react";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    color?: "primary" | "secondary" | "success" | "warning" | "default" | "danger"; // 可选的按钮颜色
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color = "primary" }) => {
    return (
        <NextUIButton color={color} onClick={onClick}>
            {label}
        </NextUIButton>
    );
};

export default Button;