import numpy as np

def reverse(n):
    newnum=0
    while n>0:
        newnum = newnum*10 + n % 10
        n//=10
    return newnum

def palindrome(n):
    return n == reverse(n)

def isSuperPalindrome(n):
    if palindrome(n):
        n_sqrt = np.sqrt(n)
        if palindrome(n_sqrt):
            if(n_sqrt % 1 == 0):
                return True
            else:
                return False
        else:
            return False
    else:
        return False
arr = []
left = int(input("Nhập cận trái của ngưỡng: "))
right = int(input("Nhập cận phải của ngưỡng: "))
for i in range(left, right+1):
    if isSuperPalindrome(i):
        arr.append(i)
print(arr)