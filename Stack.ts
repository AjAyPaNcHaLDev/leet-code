class Stack {
  private arr: any[];
  MAX_LENGTH = 0;
  top: number;
  constructor(length: number) {
    this.arr = new Array(length);
    this.top = -1;
    this.MAX_LENGTH = length;
    console.log("constructor is called automatic");
  }
  push(item: any) {
    if (this.top !== this.MAX_LENGTH - 1) {
      this.arr[++this.top] = item;
      return this.top;
    }
    throw new Error("Stack Overflow.");
  }
  pop() {
    const temp = this.arr[this.top];
    if (this.top == -1) {
      throw new Error("Stack Underflow");
    }
    delete this.arr[this.top];
    this.top--;
    return temp;
  }
  peek() {
    if (this.top === -1) {
      return -1;
    }
    return this.arr[this.top];
  }
  isFull() {
    if (this.top > this.MAX_LENGTH - 1) {
      return false;
    }
    return true;
  }
  isEmpty() {
    if (this.top <= -1) {
      return true;
    } else {
      return false;
    }
  }
  list() {
    return [...this.arr];
  }

  sort() {
    const temp = new Stack(this.MAX_LENGTH);
    for (let i = 0; i < this.MAX_LENGTH; i++) {
      temp.push(this.pop()) 
    }

  }
}

export default Stack;
