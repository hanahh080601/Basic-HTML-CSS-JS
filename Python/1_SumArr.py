arr_input = []
n = int(input("Nhập số lượng phần tử của mảng: "))
for i in range(n):
    print("a[",i,"] = ", end="")
    x = int(input())
    arr_input.append(x)
print("Mảng ban đầu là: ", arr_input)
arr_output = []
sum = 0
for i in range(n):
    sum += arr_input[i]
    arr_output.append(sum)
print("Mảng sau khi tính tổng là: ", arr_output)