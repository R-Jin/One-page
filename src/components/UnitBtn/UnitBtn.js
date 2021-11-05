import styled from "styled-components";

const UnitBtn = ({ unit, setUnit }) => {
    const changeUnit = () => {
        unit === "imperial" ? setUnit("metric") : setUnit("imperial");
    };

    return (
        <Button onClick={changeUnit}>
            Change to {unit === "imperial" ? "°C" : "°F"} unit
        </Button>
    );
};

export default UnitBtn;

const Button = styled.button`
    width: 20px;
    height: 10px;
    flex: 1;
`;
