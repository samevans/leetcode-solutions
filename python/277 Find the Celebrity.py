# The knows API is already defined for you.
# @param a, person a
# @param b, person b
# @return a boolean, whether a knows b
# def knows(a, b):

class Solution(object):
    def findCelebrity(self, n):
        """
        :type n: int
        :rtype: int
        """
        
        celeb = 0
        for person in range(n):
            if knows(celeb, person):
                celeb = person
                
        for person in range(0,celeb):
            if knows(celeb, person):
                return -1
            if not knows(person, celeb):
                return -1
        
        for person in range(celeb, n):
            if not knows(person, celeb):
                return -1
                
        return celeb
