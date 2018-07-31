def row(num):
    result = ''
    increments = [i for i in range(num-1, 0, -1)]
    increments = [0] + increments
    for i in range(1, num+1):
        prev = i
        for j in range(i):
            prev = prev + increments[j]
            result += '{} '.format(prev)
        result += '\n'
    return result


print(row(9))
