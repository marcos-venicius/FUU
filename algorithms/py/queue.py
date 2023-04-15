class Node:
    """
    A single node of a linked list
    """
    def __init__(self, val: int):
        self.val: int = val
        self.next: Node | None = None

class Queue:
    """
    Queue: FIFO (First in First out)
    """
    def __init__(self):
        self.queue: Node | None = None
        self.tail: Node | None = None
        self.length = 0
    
    def __len__(self) -> int:
        """
        Get queue length

        time complexity: O(1)
        """
        return self.length
        
    def is_empty(self) -> bool:
        """
        Check if the queue is empty

        time complexity: O(1)
        """
        return self.length == 0

    def enqueue(self, val: int) -> None:
        """
        Add a new item to the queue

        time complexity: O(1)
        """
        node = Node(val)

        self.length += 1

        if self.queue is None:
            self.queue = node
            self.tail = self.queue
        else:
            self.tail.next = node
            self.tail = self.tail.next

    def dequeue(self) -> int:
        """
        Dequeue an item from queue

        time complexity: O(1)
        """
        if self.queue is not None:
            val = self.queue.val
            self.queue = self.queue.next
            self.length -= 1
            return val

        if self.queue is None:
            self.tail = None

        return -1

    def peek(self) -> int:
        """
        Get last item from stack without popping

        time complexity: O(1)
        """
        if self.queue is not None:
            return self.queue.val

        return -1

    def __str__(self) -> str:
        """
        Show queue data

        time complexity: O(n)
        """
        current = self.queue

        string = ""

        while current is not None:
            string += f"{current.val}\n"
            current = current.next

        return string
