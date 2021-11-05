import styled from "styled-components";

export const Wrapper = styled.div`
    /* margin-top: 80px; */
    display: flex;
    justify-content: space-between;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

export const Heading = styled.h1`
    font-size: var(--fontBig);
    color: var(--${(props) => props.color});
`;

export const Link = styled.a`
    font-size: var(--fontMed);
    padding: 0.5rem;
    text-decoration: none;
    color: var(--white);

    :hover {
        text-decoration: underline;
    }
`;
