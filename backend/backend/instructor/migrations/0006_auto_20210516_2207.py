# Generated by Django 3.2.2 on 2021-05-16 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('instructor', '0005_alter_instructor_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='instructor',
            name='balance',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='instructor',
            name='status',
            field=models.IntegerField(default=0),
        ),
    ]
