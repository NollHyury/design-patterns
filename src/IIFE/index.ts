let autoIncrementEx = (function() {
    let number = 0
    return function () {
       number++
       return number
    }
 })()

console.log(autoIncrementEx())

let autoIncrement = (function() {
    let number = 0
    
    return {
      incr() {
        number++
      },
      get number() {
        return number
      }
    }
})()

autoIncrement.incr()
autoIncrement.incr()
autoIncrement.incr()
console.log(autoIncrement.number)
