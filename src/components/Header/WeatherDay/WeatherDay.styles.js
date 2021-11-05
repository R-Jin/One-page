import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: "Fira Sans", sans-serif;
    color: var(--lightGray);
    text-align: right;
`;

export const Container = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: flex-end;
`;

export const Temperature = styled.div`
    font-weight: bold;
    font-size: var(--fontBig);
`;

export const WeatherDescription = styled.div`
    font-size: var(--fontBig);
`;

export const ArrowUp = styled.span`
    color: var(--red);
`;

export const ArrowDown = styled.span`
    color: var(--blue);
`;
