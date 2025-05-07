from django.db import models
from django.utils.text import slugify
from .tools import article_image_path

class Author(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    social_media = models.JSONField(blank=True, null=True)

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    content = models.TextField()
    date_published = models.DateField()
    header_image = models.ImageField(upload_to='header_images/', blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)



class ArticleImage(models.Model):
    ARTICLE_IMAGE_TYPES = [
        ('large', 'Large'),
        ('small', 'Small'),
    ]

    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to=article_image_path)
    image_type = models.CharField(max_length=10, choices=ARTICLE_IMAGE_TYPES)
    subtitle = models.CharField(max_length=200, blank=True)

    tag_number = models.PositiveIntegerField()

    class Meta:
        unique_together = ('article', 'tag_number')

    def __str__(self):
        return f"{self.article.title} - {self.image_type} [{self.tag_number}]"
