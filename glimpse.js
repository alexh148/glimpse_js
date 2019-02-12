const describe = function(description, nextStep) {
  document.getElementById('tests').innerHTML += `<span style='color: brown; font-size: 25px;'><br>${description}<br>`;
  nextStep()
}

const it = function(description, nextStep) {
  document.getElementById('tests').innerHTML += `${description}<br>`
  try {
    nextStep()
  }
  catch(error){
    document.getElementById('tests').innerHTML += `<span style='color: #ce0000;'>Test failed with error</span><br><span>${error}<br>`
  }
}

function glimpse(compareOne) {
  return {
    isTheSameAs: function(compareTwo) {
      if (compareOne === compareTwo) {
        document.getElementById('tests').innerHTML += `<span style='color: #00ba41;'>Test passed for ${compareOne} being the same as ${compareTwo}<br>`, 'color: #00ba41';
      } else {
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
