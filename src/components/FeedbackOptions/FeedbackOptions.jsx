// import PropTypes from "prop-types";
// import css from "../FeedbackOptions/FeedbackOptions.module.css";

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//     return (
//         <div className={css.wrap}>
//         {Object.keys(options).map(option => (
//             <button
//             className={css.btn}
//             key={option}
//             type="button"
//             name={option}
//             onClick={onLeaveFeedback}>
//             {option}
//         </button>
//         ))}
//     </div>
//    )
// }


// FeedbackOptions.propTypes = {
//     options: PropTypes.object.isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
// }

import PropTypes from "prop-types";
import css from "../FeedbackOptions/FeedbackOptions.module.css";
import { useMemo } from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = useMemo(() => Object.keys(options), [options]);
  
  return (
    <div className={css.wrap}>
      {optionKeys.map((option) => (
        <button
          className={css.btn}
          key={option}
          type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
        //   onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// export default FeedbackOptions;