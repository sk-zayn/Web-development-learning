number = int(input('Enter a number: '))
numbers = []
sum = 0
multiple = 1
for i in range(1, number+1):
  sum += i
  multiple *= i
  numbers.append(i)

print(numbers)
print(sum)
print(multiple)
