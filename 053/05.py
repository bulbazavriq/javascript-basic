a = int(input())
b = int(input())
c = int(input())
if a == b == c:
    print('+ равностороний')
elif a == b or b == c or a == c:
    print('+ равнобедренный')
else:
    print('-')

