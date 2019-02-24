class Solution(object):
    def subdomainVisits(self, cpdomains):
        """
        :type cpdomains: List[str]
        :rtype: List[str]
        """
        visits = collections.Counter()
        
        for cpdomain in cpdomains:
            count, domains = cpdomain.split()
            
            while True:
                visits[domains] += int(count)
                if "." not in domains:
                    break
                domains = ".".join(domains.split(".")[1:])
                
            
        res = []
        for key, value in visits.items():
            res.append(str(value) + " " + key)
            
        return res