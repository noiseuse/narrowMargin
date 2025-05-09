from django.db import models
from django.utils.text import slugify
from .tools import article_image_path

class Issue(models.Model):
    slug = models.SlugField(unique=True, blank=True)
    title = models.CharField(max_length=200)
    banner_images = models.JSONField(upload_to='banner_images/', blank=True, null=True)
    filmmakers = models.JSONField(blank=True, null=True)

    editorial_by = models.CharField(max_length=200, blank=True)
    writers = models.JSONField(blank=True, null=True)
    staff = models.JSONField(blank=True, null=True)
    thanks = models.JSONField(blank=True, null=True)

    articles = models.ManyToManyField('Article', related_name='issues', blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    
class Filmmaker(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    social_media = models.JSONField(blank=True, null=True)
    articles = models.ManyToManyField('Article', related_name='filmmaker', blank=True)
    image = models.ImageField(upload_to='filmmaker_images/', blank=True, null=True)
    
    def __str__(self):
        return self.name
    
class Author(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    social_media = models.JSONField(blank=True, null=True)
    articles = models.ManyToManyField('Article', related_name='authors', blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)

    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=200)
    authors = models.ManyToManyField(Author, related_name='articles', blank=True)
    content = models.TextField()
    date_published = models.DateField()
    images = models.JSONField(blank=True, null=True)
    slug = models.SlugField(unique=True, blank=True)
    filmmaker = models.ForeignKey(Filmmaker, on_delete=models.PROTECT, blank=True, null=True)
    issue = models.ForeignKey(Issue, on_delete=models.PROTECT, related_name='articles', blank=True, null=True)
    subtitle = models.CharField(max_length=200, blank=True)

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