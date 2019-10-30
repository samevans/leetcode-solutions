class Solution(object):
    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """
        def backArr(arr):
            left = 0
            while left < len(arr):
                if arr[left] == "#":
                    if left == 0:
                        arr = arr[1:]
                    else:
                        arr = arr[:left-1] + arr[left+1:]
                    left = 0
                else:
                    left += 1
            return arr

        S = backArr(S)
        T = backArr(T)

        return S == T
