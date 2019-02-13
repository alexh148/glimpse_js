const describe = function(description, nextStep) {
  printResults(`<span style='color: blue; font-size: 20px;'><br>${description}<br>`);
  nextStep()
}

const it = function(description, nextStep) {
  printResults(`<h5>${description}</h5>`);
  try {
    nextStep()
  }
  catch(error){
    printResults(`<p id="test-fail">Test failed to run, due to error:</p><p id="test-fail">${error}<p>`);
  }
}

function glimpse(compareOne) {
  return {
    isTheSameAs: function(compareTwo) {
      if (compareOne === compareTwo) {
        printResults(`<p id="test-pass"> - Passed</p>`);
      } else {
        printResults(`<p id="test-fail">Test failed for ${compareOne} being the same as ${compareTwo}</p>`);
      }
    },
    hasThisInIt: function(compareTwo) {
      if (compareOne.includes(compareTwo)) {
        printResults(`<p id="test-pass"> - Passed</p>`);
      } else {
        printResults(`<p id="test-fail"> - Failed: [${compareOne}] did not contain "${compareTwo}"</p>`);
      }
    }
  }
}

function printResults(text) {
  document.getElementById('testResults').innerHTML += text;
}
