function hello(name) {
  console.log('Hello, ' + name + '!');

}
hello('Mustsache');
hello();


function hello(name) {
  name = name || 'world';
  console.log('Hello' + name + '!');
}

hello();
