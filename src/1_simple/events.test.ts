// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.
// connect: events

/*
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>
</head>
<body>
  <h1>Click the button</h1>
  <button>Me!</button>
  <script>
    $('button').on('click', () => {
      console.log('Hello');
    });
    $('button').on('click', () => {
      console.log('There!');
    });

    $('button').trigger('click');

    $('button').off('click');
  </script>
</body>
*/

class Events {
  events: Record<string, Array<Function>>

  constructor() {
    this.events = {};
  }
  
  // Register an event handler
  on(eventName: string, callback: () => {}) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName: string) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName:string) {
    delete this.events[eventName];
  }
}

test('Events can be registered then triggered', () => {
  const events = new Events();

  const cb1 = vi.fn();

  events.on('click', cb1);
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(1);
});

test('Multiple events can be registered then triggered', () => {
  const events = new Events();

  const cb1 = vi.fn();
  const cb2 = vi.fn();

  events.on('click', cb1);
  events.on('click', cb2);
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(1);
  expect(cb2.mock.calls.length).toBe(1);
});

test('Events can be triggered multiple times', () => {
  const events = new Events();

  const cb1 = vi.fn();
  const cb2 = vi.fn();

  events.on('click', cb1);
  events.trigger('click');
  events.on('click', cb2);
  events.trigger('click');
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(3);
  expect(cb2.mock.calls.length).toBe(2);
});

test('Events can have different names', () => {
  const events = new Events();

  const cb1 = vi.fn();
  const cb2 = vi.fn();

  events.on('click', cb1);
  events.trigger('click');
  events.on('hover', cb2);
  events.trigger('click');
  events.trigger('hover');

  expect(cb1.mock.calls.length).toBe(2);
  expect(cb2.mock.calls.length).toBe(1);
});

test('Events can be toggled off', () => {
  const events = new Events();

  const cb1 = vi.fn();
  const cb2 = vi.fn();

  events.on('hover', cb2);

  events.on('click', cb1);
  events.trigger('click');
  events.off('click');
  events.trigger('click');

  events.trigger('hover');

  expect(cb1.mock.calls.length).toBe(1);
  expect(cb2.mock.calls.length).toBe(1);
});