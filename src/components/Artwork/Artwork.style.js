import styled from "styled-components";
import artwork from "../../misc/artwork/artwork.jpg";

export const Content = styled.div`
    flex: 1;
    background: url(${artwork});
    background-size: cover;
    background-position: center;
    margin-right: 8rem;
    border: solid 3px var(--lightGray);
    min-width: 350px;
`;
