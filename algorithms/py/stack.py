class Node:
    """
    A single node of a linked list
    """
    def __init__(self, val: int):
        self.val: int = val
        self.next: Node | None = None

class Stack:
    """
    Stack: LIFO (Last in First out)
    """
    def __init__(self):
        self.stack: Node | None = None
        self.length = 0
    
    def __len__(self) -> int:
        """
        Get stack length

        time complexity: O(1)
        """
        return self.length
        
    def is_empty(self) -> bool:
        """
        Check if the stack is empty

        time complexity: O(1)
        """
        return self.length == 0

    def push(self, val: int) -> None:
        """
        Add a new item to the stack

        time complexity: O(1)
        """
        node = Node(val)

        self.length += 1

        if self.stack is None:
            self.stack = node
        else:
            tempHead = self.stack
            self.stack = node
            self.stack.next = tempHead

    def pop(self) -> int:
        """
        Pop an item from stack

        time complexity: O(1)
        """
        if self.length > 0:
            self.length -= 1
            val = self.stack.val
            self.stack = self.stack.next
            return val

        return -1

    def peek(self) -> int:
        """
        Get last item from stack without popping

        time complexity: O(1)
        """
        return self.stack.val

    def __str__(self) -> str:
        """
        Show stack data

        time complexity: O(n)
        """
        current = self.stack

        string = ""

        while current is not None:
            string += f"{current.val}\n"
            current = current.next

        return string
