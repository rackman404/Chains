from django.db import models

class user(models.Model): 
    username = models.CharField(max_length = 50, primary_key=True)
    walletPublicKey = models.CharField(max_length=40)
    
    def __str__(self): 
        return self.username +""

class chain(models.Model): 
    chainID = models.IntegerField()
    chainName = models.CharField(max_length = 50)

    def __str__(self): 
        return self.chainName

class post(models.Model): 
    postID = models.IntegerField()
    chainID = models.ForeignKey(chain, on_delete=models.CASCADE)
    username = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    img_content = models.URLField()
    txt_content = models.TextField()
    

