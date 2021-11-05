import styled from "styled-components";
import Time from "./Time/Time";
import WeatherDay from "./WeatherDay/WeatherDay";
import { Wrapper } from "./Header.style";

const Header = ({ weatherState, unit }) => (
    <Wrapper>
        <Time />
        {/* Only render the component if weatherInfo has exists */}
        {!!weatherState && (
            <WeatherDay
                min={weatherState.min}
                max={weatherState.max}
                weatherType={weatherState.type}
                unit={unit}
            />
        )}
    </Wrapper>
);


export default Header;
