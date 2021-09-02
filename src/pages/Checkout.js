import React, { useState } from 'react';
import { Stepper } from 'components';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const ComponentOne = () => {
    return (
      <div className="one">
        <h1 className="text-white">ComponentOne</h1>
      </div>
    );
  };
  const ComponentTwo = () => {
    return (
      <div className="one">
        <h1 className="text-white">ComponentTwo</h1>
      </div>
    );
  };
  const ComponentThree = () => {
    return (
      <div className="one">
        <h1 className="text-white">ComponentThree</h1>
      </div>
    );
  };
  const ComponentFour = () => {
    return (
      <div className="one">
        <h1 className="text-white">ComponentFour</h1>
      </div>
    );
  };
  const stepsArray = [
    {
      description: 'step 1',
      component: <ComponentOne />
    },
    {
      description: 'step 2',
      component: <ComponentTwo />
    },
    {
      description: 'step 3',
      component: <ComponentThree />
    },
    {
      description: 'step 4',
      component: <ComponentFour />
    }
  ];
  const handleClick = (action) => {
    if (action === 'next') {
      if (currentStep === stepsArray.length) {
        return setCurrentStep(stepsArray.length);
      }
      setCurrentStep(currentStep + 1);
    }
    if (action === 'prev') {
      if (currentStep === 1) {
        return setCurrentStep(1);
      }
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="checkout-container">
      <h4>Checkout</h4>
      <div className="stepper-container-horizontal">
        <Stepper
          direction="horizontal"
          currentStep={currentStep}
          steps={stepsArray}
          className="mt-4"
        />
      </div>
      <button onClick={() => handleClick('prev')}>Prev</button>
      <button onClick={() => handleClick('next')}>Next</button>
    </div>
  );
};

export default Checkout;
