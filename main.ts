const groups = [
  {
    name: 'Creational',
    patterns: [
      { name: 'Factory Method', isDone: true },
      { name: 'Abstract Factory', isDone: true },
      { name: 'Prototype', isDone: true },
      { name: 'Builder', isDone: true },
      { name: 'Singleton', isDone: true },
    ]
  },
  {
    name: 'Structural',
    patterns: [
      { name: 'Adapter', isDone: false },
      { name: 'Bridge', isDone: false },
      { name: 'Composite', isDone: false },
      { name: 'Decorator', isDone: false },
      { name: 'Facade', isDone: false },
      { name: 'Flyweight', isDone: false },
      { name: 'Proxy', isDone: false },
    ]
  },
  {
    name: 'Behavioral',
    patterns: [
      { name: 'Chain of Responsibilities', isDone: false },
      { name: 'Command', isDone: false },
      { name: 'Iterator', isDone: false },
      { name: 'Mediator', isDone: false },
      { name: 'Memento', isDone: false },
      { name: 'Observer', isDone: false },
      { name: 'State', isDone: false },
      { name: 'Strategy', isDone: false },
      { name: 'Template Method', isDone: false },
      { name: 'Visitor', isDone: false },
    ]
  }
]

console.log('IMPLEMENTATION PROGRESS \n');
console.log('================\n');

for (const group of groups) {
  console.log(`${group.name}:\n`);
  for (const pattern of group.patterns) {
    const mark = pattern.isDone ? 'X' : ' ';
    console.log(` - [${mark}] - ${pattern.name}`); 
  }

  console.log('\n================\n');
}