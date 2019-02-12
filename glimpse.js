const describe = function(description, nextStep) {
  console.log(description)
  document.getElementById('tests').innerHTML += `<span style='color: brown; font-size: 25px;'><br>${description}<br>`;
  nextStep()
}

const it = function(description, nextStep) {
  console.log(description)
  document.getElementById('tests').innerHTML += `<span style='color: black;'><br>${description}<br>`;
  nextStep()
}

function glimpse(compareOne) {
  return {
    isTheSameAs: function(compareTwo) {
      if (compareOne === compareTwo) {
        console.log(`%cTest passed for ${compareOne} being the same as ${compareTwo}`, 'color: #00ba41');
        document.getElementById('tests').innerHTML += `<span style='color: #00ba41;'>Test passed for ${compareOne} being the same as ${compareTwo}<br>`, 'color: #00ba41';
      } else {
        console.warn(`%cTest failed for ${compareOne} being the same as ${compareTwo}`, 'color: #ce0000');
        document.getElementById('tests').innerHTML += `<span style='color: #ce0000;'>Test failed for ${compareOne} being the same as ${compareTwo}<br>`;
      }
    },
    hasThisInIt: function(compareTwo) {
      if (compareOne.includes(compareTwo)) {
        document.getElementById('tests').innerHTML += `<span style='color: #00ba41;'>Test passed for [${compareOne}] having ${compareTwo} inside it<br>`;
      } else {
        document.getElementById('tests').innerHTML += `<span style='color: #ce0000;'>Test failed for [${compareOne}] having ${compareTwo} inside it<br>`;
      }
    }
  }
}
