---
title: Homework No. 2
tags: 
- algorithms
---

## Алгоритъм на Евклид без цикъл

```cpp
#include <iostream>  
  
int main() {  
    int a = 120;  
    int b = 60;  
  
    label:  
    int reminder = a % b;  
  
    if (reminder > 0) {  
        a = b;  
        b = reminder;  
  
        goto label;  
    }  
  
    std::cout << b;  
}
```

Резултат:

```
/Users/fakeheal/CLionProjects/CSCB035/cmake-build-debug/CSCB035:
60
```

## Конструкти за управление
### Клонове
![конструкти за управление - клонове - байпас](notes/assets/algorithms-hw-bypass.png#invert_W)


![конструкти за управление - клонове - двуклон](notes/assets/algorithms-hw-dvuklon.png#invert_W)
### Повторения
![конструкти за управление - повторения - цикъл с предусловие](notes/assets/algorithms-hw-loop-with-precondition.png#invert_W)

![конструкти за управление - повторения - цикъл със следусловие](notes/assets/algorithms-hw-loop-with-aftercondition.png#invert_W)
![конструкти за управление - повторения - цикъл с брояч](notes/assets/algorithms-hw-loop-with-counter.png#invert_W)

## Събиране на две цели положителни числа
*схема за управление на алгоритъма за RAM машина*

![събиране на две цели положителни числа](notes/assets/algorithms-hw-sum-two-numbers.png#invert_W)

```cpp
#include <iostream>  
  
int main() {  
    int carry = 0;  
  
    int digitsCount = 4;  
    int base = 2;  
    int a[] = {0, 1, 1, 0};  
    int b[] = {0, 0, 1, 1};  
  
    int *C = new int;  
  
    int k = 0;  

    while (k < digitsCount) {  
        int Sum = a[digitsCount - (k + 1)] + b[digitsCount - (k + 1)] + carry;  
        C[k] = Sum % base;  
        carry = Sum / base;  
        k++;  
    }  
  
    C[k] = carry;  
  
    for (int j = k; j >= 0; j--) {  
        std::cout << C[j];  
    }  
  
    delete C;  
    C = nullptr;  
  
    return 0;  
}
```
