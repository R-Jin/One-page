import { Wrapper, Container, Heading, Link } from "./Links.style.js";

const Links = () => {
    return (
        <Wrapper>
            <Container>
                <Heading color="blue">~/uni</Heading>
                <Link href="https://chalmers.instructure.com/courses/15898">
                    linalg
                </Link>
                <Link href="https://chalmers.instructure.com/courses/16011">
                    grudat
                </Link>
                <Link href="https://calendar.google.com">calendar</Link>
                <Link href="https://gmail.com">gmail</Link>
                <Link href="https://drive.google.com/drive/u/0/folders/1zKyJSIlqU5ad7IGzLdo3FEOCVBxtKJ2g">
                    drive
                </Link>
            </Container>

            <Container>
                <Heading color="purple">~/dev</Heading>
                <Link href="https://github.com/">github</Link>
                <Link href="https://gitlab.com/R-Jin">gitlab</Link>
                <Link href="https://stackoverflow.com/">stackoverflow</Link>
                <Link href="https://wiki.archlinux.org/">archwiki</Link>
                <Link href="https://www.figma.com">figma</Link>
            </Container>

            <Container>
                <Heading color="green">~/fun</Heading>
                <Link href="https://www.youtube.com">youtube</Link>
                <Link href="https://odysee.com/">odysee</Link>
                <Link href="https://monkeytype.com/">monkeytype</Link>
                <Link href="https://play.typeracer.com/">typeracer</Link>
                <Link href="https://www.reddit.com/">reddit</Link>
            </Container>
        </Wrapper>
    );
};

export default Links;
