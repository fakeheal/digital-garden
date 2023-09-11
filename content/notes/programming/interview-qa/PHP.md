---
title: PHP
enableToc: false
tags:
- programming
- interview
- php
---

1. **What are traits?** [^1] Use the code below to help you with the explanation. 
```php
trait Shareable {
	public function share(Model $model) {
		return sprintf("Sharing: %s", $model->title);
	}
}
```
2. **Difference between `private`, `public` & `protected`?** [^2]
3.  **Explain the difference between `$message` and `$$message`.** [^3]
4. **What are abstract classes and what is their use?** [^4]
5. **What is polymorphism?**[^5]
6. **GET or POST - which one would be better for a search form?**
7. **Is multiple inheritance supported in PHP?**
```php
class Dog extends FourLeggedAnimal, Mammal {
	// code
}
```
8. **What is stdClass in PHP?**
```php
class Foo { }
$foo = new Foo();
echo ($foo instanceof stdClass) ? 'Y' : 'N';
```
9. **In PHP, objects are they passed by value or by reference?**
10. **What do we mean by a PSR standard? What is its importance?**
11. **What is the main difference between require() and require_once()?**
12. **What is overloading and overriding in PHP?**
13. **Is the class below conforming to the Single Responsibility Principle?**
```php
class Report
{
    public function getTitle()
    {
        return 'Report Title';
    }

    public function getDate()
    {
        return '2016-04-21';
    }

    public function getContents()
    {
        return [
            'title' => $this->getTitle(),
            'date' => $this->getDate(),
        ];
    }

    public function formatJson()
    {
        return json_encode($this->getContents());
    }
}
```
14. **What is the Facade pattern?**
15. **Is the code below a valid example of recursion in PHP?**
```php
function factorial($number){
    if($number <= 1){
        return factorial($number);
    } else {
        return $number * factorial($number - 1);
    }
}
```

[^1]: Traits are a mechanism for code reuse in single inheritance languages such as PHP. A Trait is intended to reduce some limitations of single inheritance by enabling a developer to reuse sets of methods freely in several independent classes living in different class hierarchies.
[^2]:
[^3]:
[^4]:
[^5]:
[^6]: