---
title: Сортиране
tags: 
- algorithms
- code
---

## В друг масив

```cpp
int main() {  
    int a[] = {2, 8, 4, 0, 6, 9, 1, 4, 7};  
    int n = sizeof(a) / sizeof(int);  
    int b[n];  
  
    int max = a[0];  
    for (int i = 1; i < n; i++) {  
        if (a[i] > max) {  
            max = a[i];  
        }  
    }  
  
    b[n - 1] = max;  
  
    for (int i = 0; i < n - 1; i++) {  
        int min = a[0];  
        int flag = 0;  
        for (int j = 1; j < n; j++) {  
            if (min > a[j]) {  
                min = a[j];  
                flag = j;  
            }  
        }  
        b[i] = min;  
        a[flag] = max;  
    }  
      
    return 0;  
}
```

## Пряка селекция / Selection sort

```cpp
int main() {  
    int a[] = {3, 4, 9, 0, 4, 8};  
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

## Пряка размяна / Bubble sort
*a.k.a. bubble sort*

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

## Пряко вмъкване / Insertion sort
*a.k.a. insertion sort*

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