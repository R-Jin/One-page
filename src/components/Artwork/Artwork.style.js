import styled from "styled-components";
import artwork from "../../misc/artwork/artwork.jpg";

export const Content = styled.div`
    flex: 1;
    background: url(${artwork});
    margin-right: 8rem;
    background-position: right bottom;
    border: solid 3px var(--lightGray);
`;
