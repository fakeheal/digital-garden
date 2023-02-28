---
title: Homework No. 1
tags: 
- algorithms
---

## Алгоритъм

**Алгоритъмът** е такова крайно, дискретно (постъпково), детерминирано преобразование, което, приложено над произволен допустим набор от стойности на входното множество, довежда до получаването на единствен набор от допустими стойности на изходното множество.

## Базови елементи на управление
![условен и безусловен преход](notes/assets/algorithms-hw-conditions-no-conditions.png#invert_W)

## Събиране на две цели положителни числа
*схема за управление на алгоритъма за RAM машина*

![събиране на две цели положителни числа](notes/assets/algorithms-hw-sum-two-numbers.png#invert_W)

```cpp
#include <iostream>
// бонусченце
int main() {  
    int carry = 0;  
  
    int n = 4;  
    int a[] = {1, 2, 3, 4};  
    int b[] = {0, 1, 2, 3};  
  
    int *C = new int;  
  
    int k = 0;  
    while (k < 4) {  
        int Sum = a[k] + b[k] + carry;  
        C[k] = Sum % 10;  
        carry = Sum / 10;  
        k++;  
    }  
  
    C[k] = carry;  
  
    for (int i = 0; i < k; i++) {  
        std::cout << C[i];  
    }  
  
    return 0;  
}
```

### Алогиртъм на Евклид
*схема за управление*
![алгоритъм на Евклид](/notes/assets/algorithms-hw-euclidean-algorithm.png#invert_W)
