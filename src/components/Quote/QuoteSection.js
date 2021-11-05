import { Wrapper, Quote, Author } from "./QuoteSection.style";

// This shit needs to get fixed
const QuoteSection = ({ content, author }) => {
    return (
        <Wrapper>
            <Quote>"{content}"</Quote>
            <Author>- {author}</Author>
        </Wrapper>
    );
};

export default QuoteSection;
