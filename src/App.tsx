import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import ButtonsSection from "./components/ButtonsSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedBackSection from "./components/FeedBackSection";
import {useState} from "react";
import EffectSection from "./components/EffectSection";
import React from "react";

function App() {
    const [tab, setTab] = useState<string>('effect')
  return (
    <>
        <Header />
        <main>
            <IntroSection />

            <TabsSection active={tab} onChange={(current) => setTab(current)} />

            {tab === 'main' && (
                <>
                    <TeachingSection />
                    <ButtonsSection  />
                </>
            )}
            {tab === 'feedback' && <FeedBackSection />}
            {tab === 'effect' && <EffectSection />}

        </main>
    </>
  )
}

export default App
