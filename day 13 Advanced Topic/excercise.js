// Create a code that could handle a queue on food ordering process, with this specification:
// ● Create a class to handle queuing process in a file.
// ● Create file to handle and execute queue class.
// ● Each queue process takes a random interval from 1-10 seconds.
// ● Clue : Use while & promise

// ● Add orders to queue
// ● [Log] Print all data in queue
// ● Run process -> process queue based on random interval
// ● [Log] Queue 1 Done in XXX minutes
// ● [Log] Queue 2 Done in XXX minutes
// ● [Log] Queue 3 Done in XXX minutes
// ● [Log] Queue 4 Done in XXX minutes

class Queue {
  queue = [];
  add_order(string) {
    this.queue.push(string);
  }
  Process() {
    const asyncAwait = async () => {
      let time;
      let i = 1;
      while (this.queue.length) {
        time = this.random();
        const promise = new Promise((resolve, reject) => {
          setTimeout(resolve, time * 1000);
        });

        let a = this.queue.shift();
        console.log(`Queue ${i} ${a} will be ready in ${time} minutes`);
        await promise;
        console.log(`Queue ${i} ${a} Done`);

        i++;
      }
    };
    asyncAwait();
  }
  random() {
    return (Math.random() * (10 - 5 + 1) + 5).toFixed(0);
  }
}

module.exports = Queue;
