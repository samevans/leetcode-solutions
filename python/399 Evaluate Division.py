class Solution(object):
    def calcEquation(self, equations, values, queries):
        """
        :type equations: List[List[str]]
        :type values: List[float]
        :type queries: List[List[str]]
        :rtype: List[float]
        """
        
        graph = {}
        
        def build_graph(list_equations):
            
            def add_vertex(o,d,value):
                if o in graph:
                    graph[o].append((d,value))
                else:
                    graph[o] = [(d,value)]
            
            for e,v in list_equations:
                origin, destination = e
                
                add_vertex(origin, destination, v)
                add_vertex(destination, origin, 1/v)
        
        
        def find_path(query):
            origin = query[0]
            destination = query[1]
            
            if origin not in graph or destination not in graph:
                return -1.0
            
            visited, stack = set(), [(origin, 1)]
            
            while stack:
                location, path = stack.pop()
                
                if location==destination:
                    return float(path)
                
                if location not in visited:
                    visited.add(location)
                    for neighbor in graph[location]:
                        stack.append((neighbor[0],path*neighbor[1]))                        
            
            return -1.0
            
        
        build_graph(zip(equations,values))
        
        return [find_path(q) for q in queries]