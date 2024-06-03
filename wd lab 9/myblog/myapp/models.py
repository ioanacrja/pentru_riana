

from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)  # Ensure max_length is a positive integer
    post_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='images/')
    paragraph = models.TextField()
    more_details_for_the_dedicated_page = models.TextField(max_length=1000,
default=' ')

    def __str__(self):
        return self.title

