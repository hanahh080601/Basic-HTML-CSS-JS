class Node:
    def __init__(self, value = None, next = None):
        self.value = value
        self.next = next

    def __str__(self):
        return 'Node ['+str(self.value)+']'

class LinkedList:
    def __init__(self):
        self.first = None

    def insert(self, x):
        new_node = Node(x)
        new_node.next = self.first
        self.first = new_node

    def __str__(self):
        if self.first != None:
            current = self.first
            out = 'LinkedList [' + str(current.value) + '->'
            while current.next != None:
                current = current.next
                if(current.next == None):
                    out += str(current.value)
                else:
                    out += str(current.value) + '->'
            return out + ']'
        return 'LinkedList []'

    def __sizeof__(self):
        count = 0
        if self.first != None:
            current = self.first
            count += 1
            while current.next != None:
                count += 1
                current = current.next
            return count
        return count

    def middleNode(self):
        if self.first != None:
            if(self.__sizeof__() % 2 == 1):
                mid_index = int(self.__sizeof__() / 2)
            else:
                mid_index = int(self.__sizeof__() / 2 - 1)
            current = self.first
            for i in range(mid_index):
                current = current.next
            return current.value
        return None

    def shift(self, k):
        if k == 0:
            return
        else:
            current = self.first
            count = 1
            while (count < k and current is not None):
                current = current.next
                count += 1
            if current is None:
                return
            NodeAt_k = current
            while (current.next is not None):
                current = current.next
            current.next = self.first
            self.first = NodeAt_k.next
            NodeAt_k.next = None

L = LinkedList()
L.insert(6)
L.insert(5)
L.insert(4)
L.insert(3)
L.insert(2)
L.insert(1)
print("Kích thước của DSLK là: ",L.__sizeof__())
print(L)
print("Node chính giữa của DSLK là: ", L.middleNode())
k = int(input("Nhập k là số phần tử muốn dịch chuyển: "))
L.shift(k)
print("DSLK sau khi dịch k phần tử là: ", L)