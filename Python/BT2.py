f = open("paper.txt",mode = 'r',encoding = 'utf-8')
s = f.read()
s_handled = ""
for i in range(len(s)):
    if (s[i].isalnum() or s[i].isspace()):
        s_handled += s[i]
count = {}
l = list(s_handled.split())
for i in l:
    if i in count:
        count[i] += 1
    else:
        count[i] = 1
for i in sorted(count, key=count.get, reverse=True):
    print("Câu 2a: Chuỗi xuất hiện nhiều nhất là: ",i, count[i], "lần")
    break


l = list(s_handled.split())
l_set = list(set(s_handled.split()))
l_dict = []
l_key = []
for i in range(len(l_set)):
    d = {
        "key": l_set[i],
        "value": int(l.count(l_set[i]))
    }
    l_dict.append(d)
    l_key.append(d["key"])
print("Câu 2b: Bộ từ điển các từ trong file: ","\n", l_key)
print("Câu 2c: Bộ từ điển các từ trong file và số lần xuất hiện: ","\n", l_dict)
