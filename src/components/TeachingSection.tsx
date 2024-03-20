import React from 'react';
import {ways} from "../data";
import WayToTeach from "./WayToTeach";

const TeachingSection = () => {
    return (
        <section>
            <h3>Наш подход к обучению</h3>
            <ul>
                { ways.map(way => <WayToTeach key={way.title} {...way}/>) }
            </ul>
        </section>
    );
};

export default TeachingSection;