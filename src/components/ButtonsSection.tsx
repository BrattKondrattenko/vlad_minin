import React, {useState} from "react";
import Button from "./Button/Button";
import {differences, differencesType} from "../data";

const ButtonsSection = () => {
    const [contentType, setContentType] = useState<string | null>(null);

    const handleClick = (type: string) => {
        setContentType(type);
    };
    return (
        <section>
            <h3>Кнопки</h3>
            <Button
                isActive={contentType === "way"}
                onClick={() => handleClick("way")}
            >
                Подход
            </Button>
            <Button
                isActive={contentType === "easy"}
                onClick={() => handleClick("easy")}
            >
                Доступность
            </Button>
            <Button
                isActive={contentType === "program"}
                onClick={() => handleClick("program")}
            >
                Категории
            </Button>

            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType as keyof differencesType]}</p>}
        </section>
    );
};

export default ButtonsSection;
