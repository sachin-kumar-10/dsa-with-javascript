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
        console.log((this.head))
    }

    printList() {
        var curr = this.head;
        var str = "";
        var it = 0
        do {
            str += curr.element + " ";
            curr = curr.next;
            it++
        }while(it != this.size)
        console.log(str);
    }

    // add data into link list
    add(element) {
        var node = new Node(element)
        if (!this.size) {
            this.head = node
            this.head.next = this.head
        } else {
            let curr = this.head
            var it = 1
            do  {
                it++
                curr = curr.next
            }while(it < this.size)
            curr.next = node
            node.next = this.head
        }
        this.size++
    }

    addAtFirst(element){
        var node = new Node(element)
        if(this.size == 0){
            this.head = node
            node.next = this.head
        }else{
            node.next = this.head
            var curr = node
            var it = 0
            do  {
                it++
                curr = curr.next
            }while(it < this.size)
            curr.next = this.head
            this.head = node
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
            var curr = node
            var it = 0
            do  {
                it++
                curr = curr.next
            }while(it < this.size)
            curr.next = this.head
            this.head = node
        } else {
            var curr = this.head
            var it = 0, prev  = null
            while(it < index){
                it++;
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
        var it = 1; var prev = null
        var curr = this.head
        while(it < this.size){
            if(curr.element == element){
                if(prev == null){
                    this.head = curr.next
                }else{
                    prev.next = curr.next
                }
                this.size--
            }
            prev = curr
            curr = curr.next
            it++
        }
    }

    //remove from index
    removeFromIndex(index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return 'Invalid Index';
        }
        if (index == 0) {
            var it = 1
            var curr = this.head
            this.head = this.head.next
            do  {
                it++
                curr = curr.next
            }while(it < this.size)
            curr.next = this.head
            this.size--
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
        var it = 0
        while(it < this.size){
            it++
            if(curr.element  == element){
                console.log('Element index is ', count)
                return
            }
            count++
            curr = curr.next
        }
        console.log('Element ', element , ' Does not exist in linked list')
    }
}

var ll = new LinkedList()

ll.addAtFirst(1)
ll.add(2)
ll.add(3)
ll.addAtIndex(101, 1)
ll.printList()
ll.removeFromIndex(0)
ll.printList()
ll.removeFromIndex(1)
ll.printList()
ll.indexOf(101)