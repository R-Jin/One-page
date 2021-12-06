import styled from "styled-components";
import artwork from "../../misc/artwork/artwork.jpg";

export const Content = styled.div`
    flex: 1;
    background: url(${artwork});
    background-size: cover;
    background-position: center;
    border: solid 3px var(--lightGray);
    margin-right: 80px;
    min-width: 15.625rem;
    max-width: 25.5rem;
`;
