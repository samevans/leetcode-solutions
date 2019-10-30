def generalizedGCD(num, arr):

    def gcd(a, b):
        while b > 0:
            a, b = b, a % b
        return a
    
    if num is 0:
        return 
    elif num is 1:
        return arr[0]
    
    
    result = 1
    
    for index, value in enumerate(arr):
        if index==0:
            next
        elif index == 1:
            result = gcd(arr[0], value)
        else:
            result = gcd(result, value)
    
    return result