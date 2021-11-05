import { useEffect, useState } from "react";
import { getRandomQuote, getWeather } from "./api";

// import UnitBtn from "./components/UnitBtn/UnitBtn";
import Header from "./components/Header/Header";
import QuoteSection from "./components/Quote/QuoteSection";
import Artwork from "./components/Artwork/Artwork";

import GlobalStyle from "./GlobalStyle";
import Links from "./components/Links/Links.js";
import styled from "styled-components";

const App = () => {
    const [weatherInfo, setWeatherInfo] = useState();

    const [unit, setUnit] = useState("metric");

    const [currentQuote, setQuote] = useState();

    useEffect(() => {
        getWeather(unit).then((data) => setWeatherInfo(data));
    }, [unit]);

    useEffect(() => {
        getRandomQuote().then((data) => setQuote(data));
    }, []);

    return (
        <Wrapper>
            <GlobalStyle />
            <Artwork />
            {/* <UnitBtn unit={unit} setUnit={setUnit} /> */}
            <Container>
                <Header weatherState={weatherInfo} unit={unit} />
                <Links />
                {currentQuote && (
                    <QuoteSection
                        content={currentQuote.content}
                        author={currentQuote.author}
                    />
                )}
            </Container>
        </Wrapper>
    );
};

export default App;

const Wrapper = styled.div`
    padding: 10rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--bg-color);
    height: 100vh;
    padding: 12rem 20rem;
`;

const Container = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: space-between;
`;
