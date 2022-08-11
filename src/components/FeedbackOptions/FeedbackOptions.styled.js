import styled from "styled-components";

export const FeedbackBtnList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;
`;

export const FeedbackBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    cursor: pointer;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: ${p => p.theme.colors.bgcButton};
        color: ${p => p.theme.colors.white};
        transform: scale(1.2);
    }
`;