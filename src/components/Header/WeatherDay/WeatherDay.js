import getUnit from "../../../helpers/getUnit";
import {
    Wrapper,
    Container,
    Temperature,
    WeatherDescription,
    ArrowUp,
    ArrowDown,
} from "./WeatherDay.styles";

const WeatherDay = ({ min, max, weatherType, unit }) => {
    return (
        <Wrapper>
            <Container>
                <Temperature>
                    <ArrowDown>↓</ArrowDown>
                    {min} &ensp; <ArrowUp>↑</ArrowUp>
                    {max} {getUnit(unit)}
                </Temperature>
            </Container>
            <WeatherDescription>{weatherType}</WeatherDescription>
        </Wrapper>
    );
};

export default WeatherDay;
