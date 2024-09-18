import { useEffect, useState } from 'react';

const useTypeEffect = (textParts: { text: string; className: string }[], speed: number = 200) => {
    const [displayedText, setDisplayedText] = useState<string[]>([]);
    const [currentPartIndex, setCurrentPartIndex] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (currentPartIndex >= textParts.length) return;

        const { text, className } = textParts[currentPartIndex];
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                // Replace newline with <br /> and update displayedText
                const updatedText = text.slice(0, currentIndex + 1).replace(/\n/g, '<br />');
                setDisplayedText((prev) => {
                    const newText = [...prev];
                    newText[currentPartIndex] = `<span class="${className}">${updatedText}</span>`;
                    return newText;
                });
                setCurrentIndex((prev) => prev + 1);
            } else {
                clearInterval(interval);
                setCurrentPartIndex((prev) => prev + 1);
                setCurrentIndex(0);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [currentPartIndex, currentIndex, textParts, speed]);

    // Join all parts with space or other separator if needed
    const formattedText = displayedText.join('');

    return formattedText + (currentPartIndex < textParts.length ? '_' : '');
};

export default useTypeEffect;