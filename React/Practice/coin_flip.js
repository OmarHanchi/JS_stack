function fiveHeads() {
    return new Promise((resolve, reject) => {
      let headsCount = 0;
      let attempts = 0;
      const maxAttempts = 100;
  
      // Step 2: Create a recursive function
      const flipCoin = () => {
        // Step 3: Base case for resolving
        if (headsCount === 5) {
          resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
          // Step 4: Base case for rejecting
          if (attempts >= maxAttempts) {
            reject("Exceeded 100 attempts without flipping five 'heads'");
          } else {
            // Step 5: Simulate coin toss
            attempts++;
            const result = tossCoin();
            console.log(`${result} was flipped`);
  
            // Step 6: Update headsCount based on result
            if (result === "heads") {
              headsCount++;
            } else {
              headsCount = 0;
            }
  
            // Step 7: Make the function recursive
            flipCoin();
          }
        }
      };
  
      // Start the recursive function
      flipCoin();
    });
  }
  
  // Utility function to simulate flipping a coin
  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  
  // Handling the promise in client code
  fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  
  console.log("When does this run now?");
  