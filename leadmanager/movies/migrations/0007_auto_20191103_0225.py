# Generated by Django 2.2.6 on 2019-11-03 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0006_auto_20191101_2243'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='rating',
            field=models.PositiveIntegerField(),
        ),
    ]
