import React from 'react';

function Result({ result }) {
  const staticAnswers = result.reduce((obj, key) => {
    if (!obj[key]) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }
    return obj;
  }, {});
  console.log(staticAnswers);

  return (
    <div>
      Ну вот и все
    </div>
  );
}

export default Result;
