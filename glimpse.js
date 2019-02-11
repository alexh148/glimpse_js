function Glimpse() {
}

Glimpse.prototype.theseTwoAreTheSame = function(a, b) {
  return !!(a === b)
}

Glimpse.prototype.thisIsInThat = function(a, array) {
  return array.includes(a);
}
