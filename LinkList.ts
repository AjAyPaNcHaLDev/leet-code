// this is the example of singly link list :)
import { ListNode } from "./types";

class LinkList {
  val: any;
  next: ListNode | null;
  constructor(val?: any, next?: ListNode) {
    this.val = val !== undefined ? val : "";
    this.next = next !== undefined ? next : null;
  }
  add(val: any) {
    const Node = new LinkList(val);
    if (!this.next) {
      return (this.next = Node);
    }
    let current = this.next;
    while (current.next) {
      current = current.next;
    }
    return (current.next = Node);
  }
  toArray() {
    const arr = new Array();
    arr.push(this.val);
    if (!this.next) {
      return arr;
    }
    let current = this.next;

    while (current.next) {
      current = current.next;

      arr.push(current.val);
    }
    return arr;
  }
  pop() {
    if (!this.next) {
      delete this.val;
    }
    let node: ListNode | null = this.next;
    let last: ListNode | null = this;
    while (node?.next) {
      last = node;
      node = node.next;
    }
    last.next = null;
  }
  middle() {
    let middleIndex = -1;
    if (!this.next) {
      return this.val;
    }
    middleIndex++;
    let current: ListNode | null = this.next;
    while (current?.next) {
      current = current.next;
      // console.log("current ", current);
      middleIndex++;
    }
    if (middleIndex % 2 == 0) {
      middleIndex = middleIndex / 2 + 1;
    } else {
      middleIndex = Math.ceil(middleIndex / 2);
    }
    current = this;
    for (let i: number = 0; i < middleIndex; i++) {
      if (current.next) {
        current = current.next;
      }
    }
  }
  findByPosition(position) {
    let current: ListNode | null = this;
    let i = 0;
    while (i <= position && current.next) {
      console.log("current.val",current.val)
      if (i == position) {
        console.log("first 1")
        return current;
      }else{
        console.log("first 2")
      }
      i++
      current = current.next;
    }

    return null;
  }
}
export default LinkList;
