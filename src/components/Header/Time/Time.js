import Clock from "react-live-clock";

import { H1, H2, Wrapper } from "./Time.styles";

const Time = () => {
    return (
        <Wrapper>
            <H1>
                <Clock format={"HH:mm"} ticking={true} />
            </H1>
            <H2>
                <Clock format={"ddd"} /> | <Clock format={"Do"} /> |{" "}
                <Clock format={"MMMM"} />
            </H2>
        </Wrapper>
    );
};


export default Time;
