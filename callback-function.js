function anotherFunction() {
   //Actions
}

function fnWithCallback(callbackFunction) {
   callbackFunction()
}
fnWithCallback(anotherFunction)

function printMyName() {
   console.log('Liza')
}

setTimeout(printMyName, 1000)