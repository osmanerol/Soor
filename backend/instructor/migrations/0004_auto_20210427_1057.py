# Generated by Django 3.1.7 on 2021-04-27 07:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('instructor', '0003_auto_20210425_0308'),
    ]

    operations = [
        migrations.RenameField(
            model_name='instructor',
            old_name='instructor',
            new_name='user',
        ),
    ]
