/*
  359. Logger Rate Limiter
  Design a logger system that receive stream of messages along with its timestamps,
  each message should be printed if and only if it is not printed in the last 10 seconds.

  Given a message and a timestamp (in seconds granularity),
  return true if the message should be printed in the given timestamp, otherwise returns false.

  It is possible that several messages arrive roughly at the same time.
*/

class Tuple {
  constructor(
    public t: number,
    public message: string,
  ) {}
}

export class Logger {
  q: Tuple[] = [];
  dict: Map<string, number> = new Map();

  shouldPrintMessage(timestamp: number, message: string) {
    while (this.q.length && this.q[0].t <= timestamp - 10) {
      let next = this.q.shift();
      this.dict.delete(next?.message!);
    }
    if (!this.dict.has(message)) {
      this.q.push(new Tuple(timestamp, message));
      this.dict.set(message, timestamp);
      return true;
    }
    return false;
  }
}
