import styled from "styled-components";
import Card from "styles/UI/Card/Card";

const ContentBox = styled(Card)<UIType.ContentBoxProps>`
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    border-radius: 1px;
`;

export default ContentBox;
