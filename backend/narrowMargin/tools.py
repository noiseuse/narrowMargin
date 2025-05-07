def article_image_path(instance, filename):
    article_slug = instance.article.slug if instance.article.slug else "unslugged"
    return f'article_images/{article_slug}/{filename}'
