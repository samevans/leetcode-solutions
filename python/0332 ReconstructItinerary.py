class Solution(object):
    def findItinerary(self, tickets):
        """
        :type tickets: List[List[str]]
        :rtype: List[str]
        """
        graph = {}
        def build_graph(tickets):
            for t in tickets:
                start, end = t
                graph[start] = graph.get(start, []) + [end]
            for A in graph:
                graph[A] = sorted(graph[A])
        
        def dfs(S):
            trip.append(S)
            if len(trip) == length:
                return True
            if S in graph:
                n, i = len(graph[S]), 0
                while i < n:
                    next_city = graph[S].pop(0)
                    if dfs(next_city):
                        return True
                    graph[S].append(next_city)
                    i += 1
            trip.pop()
            return False
            
            
        build_graph(tickets)
        trip, length = [], len(tickets) + 1
        dfs("JFK")
        return trip