import numpy as np

a,b = [],[]
n = int(input("Provide me size of square matrix row==column : "))

for i in range(n):
   for j in range(n):
       print("a[",i,"][", j, "] = ", end="")
       x = int(input())
       b.append(x)
   a.append(b)
   b = []

arr = np.array(a)

print("Câu 3: Ma trận ban đầu là: \n", arr)
def rotate90(matrix):
   ruota = list(zip(*reversed(arr)))
   return [list(elemento)[::-1] for elemento in ruota][::-1]

r90 = np.array(rotate90(arr));
print("Câu 3a: Ma trận xoay 90 độ ngược chiều kim đồng hồ:")
print(r90)

def rotate180(matrix):
   ruota = list(zip(*reversed(r90)))
   return [list(elemento)[::-1] for elemento in ruota][::-1]

r180 = np.array(rotate180(r90))
print("Câu 3b: Ma trận xoay 180 độ:")
print(r180)

#kq = np.arange(n*n).reshape(n, n)
#np.eye(n, dtype=int)