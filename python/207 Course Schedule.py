class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """
        
        graph = {}
        self.n = numCourses
        
        for prereq in prerequisites:
            want, need = prereq[0], prereq[1]
            graph[want] = need
        
        visits = set()
        for i in range(numCourses):
            visits = self.dfs(graph, i, visits)
            print visits
        return len(visits) == numCourses
        
    def dfs(self, graph, start, visited):
        
        stack = [start]
        
        while stack:
            course = stack.pop()
            
            if course not in visited:
                if course not in graph:
                    visited.add(course)
                    
                    for key, value in graph.items():
                        if value == course:
                            stack.append(key)
                    
                else:
                    if graph[course] in visited:
                        visited.add(course)
                        
                        for key, value in graph.items():
                            if value == course:
                                stack.append(key)
                        
        return visited
                
        