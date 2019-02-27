class Solution(object):
    def findItinerary(self, tickets):
        """
        :type tickets: List[List[str]]
        :rtype: List[str]
        """
        self.graph = {}
        self.length = len(tickets) + 1
        
        for ticket in tickets:
            origin, destination = ticket[0], ticket[1]
            
            target = self.graph.get(origin, [])
            target.append(destination)
            self.graph[origin] = sorted(target)
        
        return self.dfs()
        
            
    
    def dfs(self, candidate = ["JFK"], visited = set()):
        
        start = candidate[-1]
        
        if len(candidate) == self.length:
            return candidate
        if start not in self.graph:
            return []
        
        for destination in self.graph[start]:
            
            if (start,destination) not in visited:
                answer = self.dfs(candidate+[destination], visited | set((start, destination)))
                if answer != []:
                    return answer
