import React, {FC} from 'react';
import Button from "./Button/Button";

type TabsSectionProps = {
    active: string,
    onChange: (value: string) => any
}
const TabsSection: FC<TabsSectionProps> = ({ active, onChange }) => {
    return (
        <section style={{ marginBottom: '1rem' }}>
            <Button isActive={active === 'main'} onClick={() => onChange('main')}>
                Главная
            </Button>
            <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>
                Обратная связь
            </Button>
            <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>
                Effect
            </Button>
        </section>
    );
};

export default TabsSection;