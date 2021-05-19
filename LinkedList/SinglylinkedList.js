class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    //print link list
    print() {
        console.log(JSON.stringify(this.head))
    }

    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    // add data into link list
    add(element) {
        var node = new Node(element)
        if (!this.size) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    // add data into link list at specific index
    addAtIndex(element, index) {
        if (index < 0 || index > this.size) {
            console.log('invalid index')
            return
        }
        var node = new Node(element)
        if (index == 0) {
            node.next = this.head
            this.head = node
        } else {
            var it = 0
            var curr = this.head
            var prev = null
            while (it < index) {
                it++
                prev = curr
                curr = curr.next
            }
            prev.next = node
            node.next = curr

        }
        this.size++
    }


    //remove element
    removeElement(element) {
        var curr = this.head
        var prev = null
        while (curr) {
            if (element == curr.element) {
                if (!prev) {
                    this.head = curr.next
                } else {
                    prev.next = curr.next
                }
                this.size--
            }
            prev = curr
            curr = curr.next
        }
    }

    //remove from index
    removeFromIndex(index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return 'Invalid Index';
        }
        if (index == 0) {
            this.head = this.head.next
        } else {
            var curr = this.head
            var prev = null
            var it = 0
            while(it < index){
                it++
                prev = curr
                curr = curr.next
            }
            prev.next = curr.next
            this.size--
        }
    }

    //index of element

    indexOf(element){
        var curr = this.head
        var count = 0
        while(curr){
            if(curr.element  == element){
                console.log('Element index is ', count)
            }
            count++
            curr = curr.next
        }
    }
}

var ll = new LinkedList()

ll.add(1)
ll.add(3)
ll.add(2)
ll.addAtIndex(12, 3)
ll.removeElement(3)
ll.removeFromIndex(1)
ll.printList()
ll.add(22)
ll.print()
ll.indexOf(12)