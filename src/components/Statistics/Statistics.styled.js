import styled from "styled-components";

export const StatisticList = styled.ul`
    display: flex;
    justify-content: center;
    gap: ${p => p.theme.space[3]}px;
`;

export const StatisticItem = styled.li`
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.bgcStat};
`;
