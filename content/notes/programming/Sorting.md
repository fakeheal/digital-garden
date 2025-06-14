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

^b2e209

Time complexity: $O(n^2)$

Fast for small input sizes and is performed _in place_. It may have different running time on two sequences of the same size. Depends on the degree to which the two sequences are sorted. 

**Best case** occurs if the input array is already sorted, it runs for linear time.

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

Better for bigger input sizes & is not performed _in place_. Closely follows the "Divide-and-conquer" paradigm.

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

## Heapsort

Time complexity: $O(n\cdot\log{n})$

In place algorithm that uses the **heap** data structure.

## Quick sort

Time complexity: $O(n^2)$

Sorts n real numbers in $\Theta(n \cdot \lg n)$ expected time and $\Theta(n^2)$ worst time, when the pivot choice consistently results in unbalanced partitions. (o mitigate this, randomised pivot selection is commonly used.) It is in place and generally outperforms heapsort. Like insertion sort, has tight code, small hidden constant factor

## Counting sort

Time complexity: $O(n+k)$

Assumes that sorting numbers are in the set {0, 1, . . . , k}. Using array indexing for determining relative order, $\Theta(k + n)$ time. It is a stable algorithm.

## Radix sort

## Bucket sort

