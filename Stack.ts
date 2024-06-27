class Stack {
  arr: any[];
  MAX_LENGTH = 0;
  top: number;
  constructor(length: number) {
    this.arr = new Array(length);
    this.top = -1;
    this.MAX_LENGTH = length;
  }
  push(item: any) {
    if (this.top !== this.MAX_LENGTH - 1) {
      this.arr[++this.top] = item;
      return this.top;
    }
    throw new Error("Stack Overflow.");
  }
  pop() {
    if (this.top == -1) {
      throw new Error("Stack Underflow");
    }
    this.arr[]
  }
  peek() {}
  list() {}
}

export default Stack;
