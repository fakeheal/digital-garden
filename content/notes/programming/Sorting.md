---
title: Сортиране
tags: 
- algorithms
- code
---
## Selection sort

Time complexity: $O(n^2)$

Намира най-малката стойност от несортираната част и я разменя със стойността на позицията, до която е стигнало `i` във външния цикъл.

![Визуализация на Selection sort](notes/assets/selection-sort-visualisation.gif#invert_B)

```cpp
int main() {  
    int a[] = {6, 8, 3, 5, 9, 10, 7, 2, 4, 1};  
    int n = sizeof(a) / sizeof(int);  
  
    for (int i = 0; i < n - 1; i++) {  
        int min = a[i];  
        int flag = i;  
        for (int j = i + 1; j < n; j++) {  
            if (a[j] < min) {  
                min = a[j];  
                flag = j;  
            }  
        }  
        a[flag] = a[i];  
        a[i] = min;  
    }  
}
```

## Bubble sort

Time complexity: $O(n^2)$

Проверява всяка двойка за инверсия и, ако има такава разменя местата на елементите в двойката. При всяка итерация на `while` цикъла се инкрементира допълнителна променлива `i`, която държи броя на сортираните в края числа - тези, които са били "bubbled out" при `for` цикъла. Сортирането приключва, когато не може да се намери нито една инверсия.

![Визуализация на Bubble sort](notes/assets/bubble-sort-visualisation.gif#invert_B)

```cpp
int main() {  
    int arr[] = {4, 2, 7, 1, 9, 10, 3};  
    int length = sizeof(arr) / sizeof(arr[0]);  
  
  
    bool has_inversion;  
    int i = 0;  
  
    do {  
        has_inversion = false;  
        for (int j = 0; j < length - i - 1; j++) {  
            if (arr[j] > arr[j + 1]) {  
                int buff = arr[j + 1];  
                arr[j + 1] = arr[j];  
                arr[j] = buff;  
                has_inversion = true;  
            }  
        }  
  
        i++;  
    } while (has_inversion);
}
```

## Insertion sort

Time complexity: $O(n^2)$

Fast for small input sizes and is performed _in place_.

![Визуализация на Insertion sort](notes/assets/insertion-sort-visualisation.gif#invert_B)

```cpp
int main() {  
    int a[] = {2, 8, 4, 0, 6, 9, 1, 4, 7};  
    int n = sizeof(a) / sizeof(int);  
  
    for (int i = 1; i < n; ++i) {  
        int j = i;  
        while (j > 0 && a[j - 1] > a[j]) {  
            int buff = a[j];  
            a[j] = a[j - 1];  
            a[j - 1] = buff;  
            j -= 1;  
        }  
    }  
    
    return 0;  
}
```

## Merge sort

Time complexity: $O(n\cdot\log{n})$

Better for bigger input sizes & is not performed _in place_.

```cpp
#include <iostream>

void copy_array(int a[], int b[], int begin, int end) {
  for (int i = begin; i < end; i++) {
    b[i] = a[i];
  }
}

void top_down_merge(int b[], int a[], int begin, int middle, int end) {
  int i = begin, j = middle;

  for (int k = begin; k < end; k++) {
    if (i < middle && (j >= end || a[i] <= a[j])) {
      b[k] = a[i];
      i++;
    } else {
      b[k] = a[j];
      j++;
    }
  }
}

void top_down_split_merge(int b[], int a[], int begin, int end) {
  // if size is <= 1, consider it sorted
  if (end - begin <= 1)
    return;

  int middle = (end + begin) / 2;

  top_down_split_merge(a, b, begin, middle);
  top_down_split_merge(a, b, middle, end);

  top_down_merge(b, a, begin, middle, end);
}

void merge_sort(int a[], int b[], int n) {
  copy_array(a, b, 0, n);
  top_down_split_merge(a, b, 0, n);
}

int main() {
  int a[] = {7, 6, 4, 2, 1, 5};
  int b[] = {0, 0, 0, 0, 0, 0};
  int n = 6;

  merge_sort(a, b, n);

  for (size_t i = 0; i < n; i++) {
    std::cout << b[i] << ", ";
  }
}
```


