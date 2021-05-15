import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

f = pd.read_csv('Car_sales.csv')
rec20 = f[['Manufacturer','Model','Sales_in_thousands','__year_resale_value']].head(20)
print("Câu 4a: 20 bản ghi đầu là:")
print(rec20)

rec = f[['Manufacturer','Sales_in_thousands']]
gb = list(rec.groupby(by="Manufacturer"))
print("Câu 4b: Tính tổng Sales_in_thousands theo Manufacturer:\n")

manu, sale = [], []
for i in range(len(gb)):
    a = (list(gb[i]))[0]
    a_sum = (list(gb[i]).pop(1)).sum()
    manu.append(a)
    sale.append(float(a_sum[1]))
df = pd.DataFrame()
df['Manufacturer'] = manu
df['Sales_in_thousands'] = sale
print(df)

f = pd.read_csv('Car_sales.csv')
choose = f[f["Manufacturer"] == 'Chevrolet']
x = choose[['Model']].values
x_val = []
for i in range(len(x)):
    temp = str(x[i]).strip("['").strip("']")
    x_val.append(temp)

y_val = []
y = choose[['Sales_in_thousands']].values
for i in range(len(y)):
    temp = float(str(y[i]).strip("['").strip("']"))
    y_val.append(temp)

plt.bar(x_val, y_val, color="pink")
plt.title("Câu 4c. Biểu đồ cột theo mẫu xe Chevrolet")
plt.xlabel("Model")
plt.ylabel("Sales_in_thousands")
plt.show()