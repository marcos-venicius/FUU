class Node:
    """
    A single node of a linked list
    """
    def __init__(self, val: int):
        self.val: int = val
        self.next: Node | None = None

class LinkedList:
    """
    A singly linked list ADT
    """
    def __init__(self):
        self.head: Node | None = None
        self.tail: Node | None = None
        self.length = 0

    def __len__(self) -> int:
        """
        time complexity: O(1)
        """
        return self.length

    def insert_end(self, val: int) -> None:
        """
        time complexity: O(1)

        Insert a new node at the end of the linked list
        """
        self.length += 1

        node = Node(val)

        if self.head is None:
            self.head = node
            self.tail = self.head
        else:
            self.tail.next = node
            self.tail = self.tail.next

    def insert_front(self, val: int) -> None:
        """
        time complexity: O(1)

        Insert a new node at the front of the linked list
        """
        self.length += 1

        node = Node(val)

        if self.head is None:
            self.head = node
            self.tail = self.head
        else:
            tempHead = self.head;
            self.head = node
            self.head.next = tempHead

    def get_nth(self, pos: int) -> int:
        """
        time complexity: O(n)

        Get a node on a specific position
        """
        if self.head is None or pos <= 0:
            return -1

        current, idx = self.head, 1

        while current is not None and idx < pos:
            current = current.next
            idx += 1

        if current:
            return current.val

        return -1

    def has(self, val: int) -> bool:
        """
        time complexity: O(n)

        Check if has a node with a specific value
        """
        if self.head is None:
            return False

        current = self.head

        while current is not None:
            if current.val == val:
                return True

            current = current.next

        return False

    def remove_by_value(self, val: int) -> bool:
        """
        time complexity: O(n)

        Remove the first value occurency

        Returns
        -------
        bool
            True if removed an item False if not
        """
        if self.head is None:
            return False

        if self.head.val == val:
            self.head = self.head.next
            self.length -= 1
            return True

        previous, current = None, self.head

        while current is not None:
            if current.val == val:
                previous.next = current.next
                self.length -= 1
                return True

            previous = current
            current = current.next

        return False

    def __str__(self) -> str:
        """
        Show the linked list
        """
        if self.head is None:
            return ""

        nodes, current = [], self.head
        while current is not None:
            nodes.append(str(current.val))
            current = current.next
        
        return ' -> '.join(nodes)

