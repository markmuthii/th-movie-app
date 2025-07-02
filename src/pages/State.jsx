import { useEffect, useState } from "react";

const State = () => {
  // Normal variable
  let counter = 7;

  // State variable
  const [counterState, setCounterState] = useState(77);

  console.log("Counter State: ", counterState);
  console.log("Counter: ", counter);

  // Function to be executed when the button is clicked
  const buttonHandler = () => {
    // Test that our button works
    console.log("Button clicked");

    // Update counter
    counter++;

    // Update counterState
    setCounterState(counterState + 1);

    console.log(counter);
  };

  useEffect(() => {
    console.log("Use Effect has been executed");
  }, [counterState]);

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-2">
      {/* Display the value of the counter on the page */}
      <p>Counter: {counter}</p>

      {/* Display the value of the counterState on the screen */}
      <p>Counter State: {counterState}</p>

      {/* Button that updates the values of counter and counterState when clicked */}
      <button
        className="bg-green-600 text-white px-6 py-1 cursor-pointer"
        onClick={buttonHandler}
      >
        Add 1
      </button>
    </div>
  );
};

export { State };
