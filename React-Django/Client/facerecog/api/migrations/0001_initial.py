# Generated by Django 5.1.3 on 2025-01-04 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(default='', max_length=255, null='true')),
                ('Age', models.CharField(default='0', max_length=5, null='true')),
                ('Gender', models.CharField(default='F', max_length=5, null='true')),
                ('Balance', models.CharField(default='0', max_length=10, null='true')),
            ],
        ),
    ]