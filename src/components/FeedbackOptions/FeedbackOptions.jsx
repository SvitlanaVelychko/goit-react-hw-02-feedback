import PropTypes from 'prop-types';
import Section from 'components/Section';
import { FeedbackBtnList, FeedbackBtn} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Section title="Please leave feedback">
            <FeedbackBtnList>
                {options.map(key => (
                    <li key={key}>
                        <FeedbackBtn
                            type="button"
                            onClick={() => onLeaveFeedback(key)}
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </FeedbackBtn>
                    </li>
                ))}
            </FeedbackBtnList>
        </Section>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;