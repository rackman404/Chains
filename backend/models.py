from django.db import models

#Chain user model 
class user(models.Model): 
    username = models.CharField(max_length = 50, primary_key=True)
    walletPublicKey = models.CharField(max_length=40)
    
    def __str__(self): 
        return self.username +""
    
#Chain post model 
class chain(models.Model): 
    chainID = models.IntegerField(primary_key=True)
    chainName = models.CharField(max_length = 50)

    def __str__(self): 
        return self.chainName

#chain post model 
class post(models.Model): 
    postID = models.IntegerField(primary_key=True)
    chainID = models.ForeignKey(chain, on_delete=models.CASCADE)
    username = models.ForeignKey(user, on_delete=models.CASCADE)

    title = models.CharField(max_length=50)
    img_content = models.URLField()
    txt_content = models.TextField()

#chain conversation model 
class conversation(models.Model): 
    conversationID = models.IntegerField()
    username = models.ForeignKey(user, on_delete=models.CASCADE)

#message model 
class message(models.Model):
    conversationID = models.ForeignKey(conversation, on_delete=models.CASCADE)
    fromUser = models.ForeignKey('user', on_delete=models.CASCADE, related_name='fromUser')
    toUser = models.ForeignKey('user', on_delete=models.CASCADE, related_name='toUser')
    timeStamp = models.DateTimeField(auto_now_add=True)

#followed chains model 
class followed_chains(models.Model): 
    chainID = models.ForeignKey(chain, on_delete=models.CASCADE)
    user = models.ForeignKey(user, on_delete=models.CASCADE)

    

