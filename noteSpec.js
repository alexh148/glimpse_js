

var five = 5
var six = 6
var arr = [1,2,3,4,5]

describe("#equals", function() {
  it("Five should equal 5", function() {
    glimpse(five).isTheSameAs(5);
  })
  it("Five should equal 6", function() {
    glimpse(five).isTheSameAs(6);
  })
})

describe("#includes", function() {
  it("Array contains 5", function() {
    glimpse(arr).hasThisInIt(5);
  })
  it("Array contains 6", function() {
    glimpse(arr).hasThisInIt(7);
  })
})
