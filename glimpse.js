var makeGlimpse = function() {
  function glimpse(compareOne) {
    return {
      isTheSameAs: function(compareTwo) {
        if (compareOne === compareTwo) {
          console.log(`%cTest passed for ${compareOne} being the same as ${compareTwo}`, 'color: #00ba41');
        } else {
          console.log(`%cTest failed for ${compareOne} being the same as ${compareTwo}`, 'color: #ce0000');
        }
      },
      hasThisInIt: function(compareTwo) {
        if (compareOne.includes(compareTwo)) {
          console.log(`%cTest passed for [${compareOne}] having ${compareTwo} inside it`, 'color: #00ba41');
        } else {
          console.log(`%cTest failed for [${compareOne}] having ${compareTwo} inside it`, 'color: #ce0000');
        }
      }
    }
  }
  return glimpse;
}
