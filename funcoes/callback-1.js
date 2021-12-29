function exec(executeOperation, a, b) {
  return console.log(executeOperation(a, b));
}

const somar = (a, b) => a + b;

const dividir = (a, b) => a / b;
exec(somar, 3, 4);
exec(dividir, 3, 4);

const callback = () => console.log('Callback');

setInterval(callback, 1000);
