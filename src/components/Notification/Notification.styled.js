import styled from "styled-components";

export const Message = styled.p`
    padding-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    text-align: center;
    color: ${p => p.theme.colors.accent};
`;