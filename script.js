//your JS code here. If required.

// Function to create a promise that resolves after a delay
function delayedResolve(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Function to handle the button click
document.getElementById('btn').addEventListener('click', () => {
  const inputNumber = parseFloat(document.getElementById('ip').value);
  
  if (isNaN(inputNumber)) {
    document.getElementById('output').textContent = 'Please enter a valid number';
    return;
  }

  // Start the promise chain
  delayedResolve(inputNumber, 2000)
    .then((number) => {
      document.getElementById('output').textContent = `Result: ${number}`;
      return delayedResolve(number * 2, 1000);
    })
    .then((number) => {
      document.getElementById('output').textContent = `Result: ${number}`;
      return delayedResolve(number - 3, 1000);
    })
    .then((number) => {
      document.getElementById('output').textContent = `Result: ${number}`;
      return delayedResolve(number / 2, 1000);
    })
    .then((number) => {
      document.getElementById('output').textContent = `Result: ${number}`;
      return delayedResolve(number + 10, 1000);
    })
    .then((number) => {
      document.getElementById('output').textContent = `Final Result: ${number}`;
    })
    .catch((error) => {
      console.error('Error:', error);
      document.getElementById('output').textContent = 'An error occurred';
    });
});

