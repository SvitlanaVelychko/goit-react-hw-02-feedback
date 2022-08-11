import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedbackClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
    
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    if (good !== 0) {
      const result = ((good / total) * 100);
      return Math.round(result);
    } else {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <Box as="main" backgroundColor="bgc">
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.handleFeedbackClick} />
        {this.countTotalFeedback() > 0 ?
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage} />) :
          <Notification message="There is no feedback" />}
        <GlobalStyle />
      </Box>
    );
  };
};
