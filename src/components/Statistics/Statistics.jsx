import PropTypes from 'prop-types';
import Section from 'components/Section';
import { StatisticList, StatisticItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Section title="Statistics">
            <StatisticList>
                <StatisticItem name="good">Good: {good}</StatisticItem>
                <StatisticItem name="neutral">Neutral: {neutral}</StatisticItem>
                <StatisticItem name="bad">Bad: {bad}</StatisticItem>
                <StatisticItem>Total: {total()}</StatisticItem>
                <StatisticItem>Positive feedback: {positivePercentage()}%</StatisticItem>
            </StatisticList>
        </Section>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;