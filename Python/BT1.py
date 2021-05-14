#1. Viết hàm kiểm tra chuỗi palindrome

s = str(input("Nhập chuỗi cần kiểm tra: "))
def is_palindrome(s):
    str_low = s.lower()
    str_reverse = s[::-1]
    if(str_low == str_reverse):
        return True
    else:
        return False
print(str(is_palindrome(s)))