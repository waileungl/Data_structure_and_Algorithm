'''
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

example 1:
Input: n = 3
Output: ["1","2","Fizz"]

example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

example 3:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
'''


#normal approch
from re import L


def fizzBuzz(n):
    arr = []
    for i in range (1, n + 1):
        temp = ''
        if i % 3 == 0:
            temp += 'Fizz'
        if i % 5 == 0:
            temp += 'Buzz'
        if len(temp) == 0:
            temp = str(i)
        arr.append(temp)
    return arr

print(fizzBuzz(15))
##
#Hash map approch#
def fizzBuzz(n):
    arr = []
    hash = {3: "Fizz", 5: "Buzz"}
    divisor = [3, 5]
    for current_num in range(1, n+1):
        temp = ''
        for key in divisor:
            if current_num % key == 0:
                temp += hash[key]
        if(len(temp) == 0):
            temp += str(current_num)
        arr.append(temp)
    return arr


print(fizzBuzz(15))