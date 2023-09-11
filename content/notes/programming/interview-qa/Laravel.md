---
title: Laravel
enableToc: false
tags:
- programming
- interview
- laravel
---

2. **What are Database Migrations in Laravel?** [^5]
5. **Can you validate requests outside of Request classes?** [^6]
9. **What is Laravel Artisan?** [^14]
10. **What are Laravel Events? Give some built-in examples.**[^15]

## Intermediate

1. **Using an example, explain what is Middleware in Laravel?** [^1]
2. **What is Soft Deleting and how does it work in Laravel?** [^2]
3. **What is the purpose of the code below?** [^3]
```php
class VerifyCsrfToken extends BaseVerifier  
{  
    protected $except = [  
	    'https://my-app.com/newsletter',  
    ];  
}  
```
4. **How do Facades in Laravel work?**[^8]
5. **Give an example of a "custom" Service provider? Why would an app need a service provider?** [^11]
6. **Difference between Eloquent & Fluent DB?**[^12]
7. **What are SOLID principles? Examples.**[^18]

1. **What is the benefit of eager loading, when do you use it?** [^16] 
3. **What problems do queued jobs solve?** [^17]

[^1]: Laravel's middleware serves as a conduit between the request and the response. It offers a method of looking into HTTP requests made to your application. For instance, Laravel's middleware ensures that your application's user is authenticated.
[^2]: SoftDelete does not remove the records from the table; it only updates the `deleted_at` value with the current date and time.
[^3]: Laravel automatically generates a CSRF "token" for each active user session managed by the application. This token is used to verify that the authenticated user is the person actually making the requests to the application. Sometimes you may wish to exclude a set of URIs from CSRF protection.
[^5]: It is a form of database version control. It makes it simple for us to share and modify the database schema for the application. `up()` and `down()` are two methods in a migration file.
[^6]: Yes, requests can be validated inside controllers, too.
[^7]: A facade is a class wrapping a complex library to provide a simpler and more readable interface to it. [Example](https://refactoring.guru/design-patterns/facade/php/example)
[^7]: Facades provide a static interface to classes that are available in the application's service container. Laravel facades serve as static proxies to underlying classes in the service container, providing the benefit of a terse, expressive syntax while maintaining more testability and flexibility than traditional static methods.
[^8]:
[^9]:
[^10]:
[^11]:
[^12]:
[^13]:
[^14]:
[^15]: Laravel event provides a simple observer pattern implementation, that allow to subscribe and listen for events in the application. An event is an incident or occurrence detected and handled by the program.
[^16]: When accessing Eloquent relationships as properties, the relationship data is "lazy loaded". This means the relationship data is not actually loaded until you first access the property. However, Eloquent can "eager load" relationships at the time you query the parent model.
[^17]:
