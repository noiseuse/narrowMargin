from django.contrib import admin
from .models import Issue, Article, Author, Filmmaker
# Register your models here.

@admin.register(Issue)
class IssueAdmin(admin.ModelAdmin):
    ordering = ['-id']
    inlines = [IssueImageInline]
    list_filter = ('date_published',)
    filter_horizontal = ('articles', 'writers')
    list_display = ('title', 'filmmakers')
    search_fields = ('title', 'filmmakers', 'slug')

    fieldsets = (
        (None, {
            'fields': (
                'title',
                'slug',
                'editorial_by',
                'banner_images',
                'filmmakers',
                'writers',
                'staff',
                'thanks',
                'articles',
            )
        }),
    )

class IssueImageInline(admin.TabularInline):  # or StackedInline
    model = IssueImage
    extra = 1  # how many blank images to show by default

@admin.register(Issue)
class IssueAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    
    filter_horizontal = ('writers',) 

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    search_fields = ['name']