import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Message } from './Notification.styled';

const Notification = ({ message }) => {
    return (
        <Box>
            <Message>{message}</Message>
        </Box>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;