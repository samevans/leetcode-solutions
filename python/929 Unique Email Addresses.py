class Solution(object):
    def numUniqueEmails(self, emails):
        """
        :type emails: List[str]
        :rtype: int
        """
        email_dict = {}
        
        for email in emails:
            local,domain = email.split('@')
            local = local.replace('.',"")
            local = local.split("+")[0]
            
            new_email = local + domain
            email_dict.setdefault(new_email,0)
        
        return len(email_dict)