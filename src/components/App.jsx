// import { Component } from "react";
// import { Statistics } from "./Statistics/Statistics";
// import { Section } from "./Section/Section";
// import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
// import { Notification } from "./Notification/Notification";

// export class App extends Component {
//   state ={
//       good: 0,
//       neutral: 0,
//       bad: 0,
//   }
// countTotalFeedback(){
//   const {good, neutral, bad} = this.state
//   return good + neutral + bad
// }

// countPositiveFeedbackPercentage(){
//  return Math.round((this.state.good / this.countTotalFeedback()) * 100);
// }

//   handleLeaveFeedback = (e) =>{
//     const { name } = e.target;
//     this.setState(prevState =>( {
//       [name]: prevState[name]+1
//     }))
    
// }
  
//   render() {
//     const {good, neutral, bad} = this.state
//     const total = this.countTotalFeedback()
//     const positivePercentage = this.countPositiveFeedbackPercentage()
//     return (
//     <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.handleLeaveFeedback} />
//           <Section title="Statistics"/>
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//            ) :
//             (  <Statistics
//     good={good}
//     neutral={neutral}
//     bad={bad}
//     total={total}
//     positivePercentage ={positivePercentage}/>)
//           }
//     </Section>
//     </>
//   );
//   }
// };



import React, { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    // console.log(feedback.good + feedback.neutral + feedback.bad);
    return feedback.good + feedback.neutral + feedback.bad;
    
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  // const handleLeaveFeedback = (name) => {
  //   setFeedback((prevState) => ({
  //     ...prevState,
  //     [name]: prevState[name] + 1,
  //   }));
  // };

  const handleLeaveFeedback = (option) => {
  setFeedback((prevState) => ({
    ...prevState,
    [option]: prevState[option] + 1,
  }));
};

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
}

// export default App;