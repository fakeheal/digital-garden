---
title: CSCB542 Разработка на мултиплатформени мобилни приложения с Flutter
enableToc: true
tags: 
- fundamentals
- programming
- flutter
---

## Dart (Лекция 2)

### const vs. final

> If the value you have is computed at runtime (`new DateTime.now()`, for example), you cannot use `const` for it. However, if the value is known at compile time (`const a = 1`), then you should use `const` over `final`.
> 
> If you're using `const` inside a class, you have to declare it as `static const`rather than just `const`. Also, if you have a `const` collection, everything inside of that is in `const`. If you have a `final` collection, everything inside of that is **not** `final`.
> -- [*meyi @ stackoverflow*](https://stackoverflow.com/a/50431087/867418)

`true` & `false` са константи по време на компилиране. 

### Data Types

- **Strings**
	- няма `char`, взимане на конкретен символ от низ - `name[0]`, `name[5]`, etc
	- предпочита се интерполация, пред конкатенация
- **Boolean**
	- само два обекта имат тип `bool` -- булевите литерали `true` и `false`
- **Lists**
	- индексируема колекция от обекти с определен размер
	- списък с фиксирана дължина - не може да се добавят нови елементи - `List<int>.filled(5, 0)`
	- списък с възможност за нарастване - `var growableList = [1, 2]`
	- `for`: `var listOfStrings = ['#0', for (var i in listOfInts) '#$i'];`
	- `if`: `var navBar = ['Home', 'Furniture', 'Plants', if (promoActive) 'Outlet'];`
- **Set**
	- неподредена колекция, от уникални елементи - `Set<String> names = {};`
- **Map**
	- асоциира двойки ключ:стойност - `var nobleGases = <int, String>{};`
	- добавяне на нова двойка: `nobleGases['He'] = 'Helium';`
	- достъп до несъществуващ ключ връща `null`

### Operators

`as`, `is`, `is!` - *релационни оператори*, `as` каства тип, `is/is!` проверява дали обект има/няма посочен тип

`~/` - деление, връща цяло число

`!` - може да бъде и "Non-null assertion operator" - ще кастне израза към прилежащия му не-нулев тип, а ако не успее ще изведе runtime изключение, пр. `foo!.bar` 

`..`  и `?..` - *каскадна нотация*

пример (без):
```dart
var myList = [1, 2, 3];
myList.clear();
myList.add(4);
```

пример (с):
```dart
var myList = [1, 2, 3];
myList
	..clear()
	..add(4);
```
*при `?..` се проверява първо дали `myList` не е `null`*

### Functions

Функцията може да има произволен брой задължителни позиционни параметри. Те могат да бъдат последвани или от именувани параметри, или от незадължителни позиционни параметри (но не и от двете).

```dart
void test(int number, {int? a, int b = 5}) {} ;
// int number - задължителен параметър
// a и b са именувани незадължителни параметри
```
*именуван параметър може да бъде маркиран като задължителен с ключовата дума `required`*

Позиционните параметри спазват същите услoвия като именуваните параметри, но вместо къдрави скоби `{ }`, те се декларират с квадратни скоби `[ ]`.

```dart
void test([int? a, int? b]) {}
```

Дарт позволява вложени функции.

### Objects
Всички обекти на класове произлизат от клас `Object`, освен `Null`.

```dart
class Fraction {
	final int _denominator;
	Fraction(this._denominator);

	// getter
	int get denominator => _denominator;

	// setter
	set denominator (int value) => value > 0 ? _denominator = value : _denominator = 1;
}
```

В Dart няма `public`, `private` и `protected` модификатори. Всеки член на клас е `public`, освен ако не добавим `_` (долна черта), което го прави частен в съответния клас (или библиотека).

```dart

class User {
	String nickname = "";
	String _realName = "";

	int _getAge() => 10;
}

void main() {
	final user = User();
	// vvv не се копилира vvv
	var realName = user._realName; 
	// vvv не се компилира vvv
	var age = user._getAge();
}
```

### Exceptions

Прихващане на грешки:
```dart
try {
	breedMoreLamas();
} on OutOfLamasException {
    // Използвайте on, когато трябва да посочите типа изключение.
	buyMoreLamas();
} caatch(e) {
	// catch, когато се нуждаем от обекта на изключението
} finally {
	// has support for finally
}
```

Създаване на изключение:
```dart
throw EmptyNameException("Name is empty.");
```

### Async & Parallelism

Dart е език с една нишка.

Важни аспекти на `async` & `await`:
1. може да се ползва `await` само в `async` функция
2. `async` се поставя пред тялото на асинхронната функция
3. `await` се използва само чрез клас `Future<T>`

Вместо нишки, целият код на Dart се изпълнява вътре в изолати. Всеки изолат има своя собствена памет (за разлика от нишките), което гарантира, че нито едно от състоянията в изолата не е достъпно от друг изолат.

> Библиотеката `dart:isolate` не е налична за Dart Web към момента! Уеб приложенията на Dart могат да използват web workers за изпълнение на скриптове във фонови нишки, подобни на изолатите.

Има два начина за създаване на нов (работен) изолат в Dart:
1. функцията `Isolate.spawn()` или `Isolate.run()`
2. функцията `compute()` – използвана за "native" и "non-native" платформи чрез Flutter

```dart
import 'package:flutter/foundation.dart';

void main() {
	compute<IsolateModel, void>(heavyTask, IsolateModel(780000, 500));
}

void heavyTask(IsolateModel model) {
	int total = 0;
	// Извършване на итерациии, според предадените параметри
	for (int i = 1; i < model.iteration; i++) {
		// Умножава всеки индекс по множителя и изчислява общата сума
		total += (i * model.multiplier);
	}

	print("Обща сума: $total");
}

class IsolateModel {
	IsolateModel(this.iteration, this.multiplier);
	final int iteration;
	final int multiplier;
}
```

## Widgets (Лекция 4)

Във *Flutter* всичко, което се появява на екрана, се нарича "уиджет", защото, технически погледнато, е наследник на класа `Widget`.

### Цветове
- Клас `Colors` и константа `Color`, пр. `Colors.blue` или `Colors.blue[500]/Colors.blue.shade500`
- чрез 6 или 8 шестнадесетични цифри, пр. `Color(0xFFFFFF)` или `Color(0xFFFFFFFF)`
- чрез 8 бита на четири цели числа, пр. `Color.fromARGB(255, 66, 165, 245)`
- чрез указване на червено R, зелено G, синьо B и непрозрачност O, пр. `Color.fromRGBO(66, 165, 245, 1.0)`

### Single-child уиджети

- `Center`
- `Container`
- `Align`
- `Positioned` (equivalent of CSS `position: absolute`)

> *note:* задаване на вътрешно отстояние (padding) става посредством... уиджет.

```dart
import 'package:flutter/material.dart';

void main() {

runApp(MaterialApp(
	home: Scaffold(
		appBar: AppBar(
		title: const Text('Welcome to Flutter'),),
		body: Center(
			child: Container(
			color: Colors.orange[400],
			child: Padding(
				padding: const EdgeInsets.all(32.0),
				child: Container(				
					height: 200,
					width: 200,
					color: Colors.blue[400],
					
				)))))));
}
```

### Mutli-child уиджети

- `Column` - уиджет, който показва "децата" си във вертикална редица
- `Expanded` - може да се накара „дете“ да запълни наличното
вертикално пространство. Използването на `Expanded` кара
елементите `Row` или `Column` да се разширяват, за да се запълни
наличното пространство по главната ос
- `Row` - уиджет, който показва „децата“ си в хоризонтална редица.
- `Stack` - редът, в който поставяте уиджетите има значение, защото елементите в долната част на списъка се показват пред тези в горната част
- `GridView` - 2D масив от уиджети с възможност за скролване. Най-често използваните GridView лейаути са:
	- `GridView.count` - създава оформление с фиксиран брой плочки в напречната ос
	- `GridView.extent` - създава оформление с плочки, които
	имат максимален размер на напречната ос

### Още стилове

- `BoxDecoration` - при стилизация на контейнер
- `BoxShadow`
- `RadialGradient`
- `SweepGradient`
- `BorderRadius`

## State (Лекция 5)

Flutter е декларативен, описваме как трябва да изглежда потребителския интерфейс за всяко дадено състояние веднъж.

Състоянието може да е разделено на два вида:
- ефимерно (local state)
- състояние на приложението (app state)

Във Flutter всички уиджети са два основни типа:
- **Stateless widget** - описва част от потребителския интерфейс чрез изграждане на съзвездие от други уиджети, които изграждат потребителския интерфейс
- **Stateful widget** - знае кога нещо се променя и "преначертава" всичко необходимо на екрана

