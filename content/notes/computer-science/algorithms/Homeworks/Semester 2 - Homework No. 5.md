
## Измерване на време за изпълнение на алгоритми за претърсване

```cpp
#include <iostream>  
  
bool search_all(const int *arr, unsigned n, int x);  
  
bool search_until(int *arr, unsigned n, int x);  
  
bool binary_search(const int *arr, unsigned n, int x);  
  
  
int main() {  
    int x_count = 5;  
    int x_arr[x_count];  
  
    std::cout << "Enter numbers: " << std::endl;  
  
    for (int i = 0; i < x_count; i++) {  
        std::cin >> x_arr[i];  
    }  
  
    for (int j = 1; j <= 10; j++) {  
        int n = 100000 * j;  
  
        // Generating random numbers  
        int randomNumbers[n];  
        srand(time(nullptr));  
        int range = 100000 - 1 + 1; // max - min + 1  
  
        for (int i = 0; i < n; i++) {  
            randomNumbers[i] = std::rand() % range + 1;  
        }  
  
        // Generating ordered sequence  
        int orderedNumbers[n];  
        for (int i = 0; i < n; i++) {  
            orderedNumbers[i] = i + 1;  
        }  
  
        std::cout << "---------------------" << std::endl;  
        std::cout << "Number of elements: " << n << std::endl;  
  
        // Measure Binary Search START  
        auto algorithm_begin = std::chrono::high_resolution_clock::now();  
  
        for (int k = 1; k <= 10; k++) {  
            for (int i = 0; i < x_count; i++) {  
                binary_search(orderedNumbers, n, x_arr[i]);  
            }  
        }  
  
        auto algorithm_end = std::chrono::high_resolution_clock::now();  
        auto algorithm_elapsed = std::chrono::duration_cast<std::chrono::nanoseconds>(  
                algorithm_end - algorithm_begin  
        );  
        // Measure Binary Search END  
  
        std::cout << "Binary Search (nanoseconds): " << algorithm_elapsed.count() << std::endl;  
  
        // Measure search through all START  
        algorithm_begin = std::chrono::high_resolution_clock::now();  
  
        for (int k = 1; k <= 10; k++) {  
            for (int i = 0; i < x_count; i++) {  
                search_all(randomNumbers, n, x_arr[i]);  
            }  
        }  
  
        algorithm_end = std::chrono::high_resolution_clock::now();  
        algorithm_elapsed = std::chrono::duration_cast<std::chrono::nanoseconds>(  
                algorithm_end - algorithm_begin  
        );  
        // Measure search through all END  
  
        std::cout << "Iterate through All (nanoseconds): " << algorithm_elapsed.count() << std::endl;  
  
        // Measure search until START  
        algorithm_begin = std::chrono::high_resolution_clock::now();  
  
        for (int k = 1; k <= 10; k++) {  
            for (int i = 0; i < x_count; i++) {  
                search_until(randomNumbers, n, x_arr[i]);  
            }  
        }  
  
        algorithm_end = std::chrono::high_resolution_clock::now();  
        algorithm_elapsed = std::chrono::duration_cast<std::chrono::nanoseconds>(  
                algorithm_end - algorithm_begin  
        );  
        // Measure search until END  
  
        std::cout << "Iterate until (nanoseconds): " << algorithm_elapsed.count() << std::endl;  
  
    }  
    return 0;  
}  
  
bool search_all(const int *arr, unsigned n, int x) {  
    bool isFound = false;  
    for (int i = 0; i < n; ++i) {  
        if (x == arr[i]) {  
            isFound = true;  
        }  
    }  
    return isFound;  
}  
  
bool search_until(int *arr, unsigned n, int x) {  
    arr[n] = x;  
  
    for (int i = 0; i <= n; ++i) {  
        if (x == arr[i]) {  
            return (i < n);  
        }  
    }  
  
    return false;  
}  
  
bool binary_search(const int *arr, unsigned n, int x) {  
    int l = 0;  
    int r = n - 1;  
  
    while (r >= l) {  
        unsigned m = l + (r - l) / 2;  
  
        if (arr[m] == x) {  
            return true;  
        } else {  
            if (arr[m] < x) {  
                l = m + 1;  
            } else {  
                r = m - 1;  
            }  
        }  
    }  
  
    return false;  
}
```

**Output:**
```
Enter numbers: 
1
2
3
4
5
---------------------
Number of elements: 100000
Binary Search (nanoseconds): 11502
Iterate through All (nanoseconds): 11179062
Iterate until (nanoseconds): 5690261
---------------------
Number of elements: 200000
Binary Search (nanoseconds): 7657
Iterate through All (nanoseconds): 13209354
Iterate until (nanoseconds): 4009020
---------------------
Number of elements: 300000
Binary Search (nanoseconds): 5182
Iterate through All (nanoseconds): 15386691
Iterate until (nanoseconds): 3772994
---------------------
Number of elements: 400000
Binary Search (nanoseconds): 11579
Iterate through All (nanoseconds): 20912727
Iterate until (nanoseconds): 3436934
---------------------
Number of elements: 500000
Binary Search (nanoseconds): 5300
Iterate through All (nanoseconds): 27509830
Iterate until (nanoseconds): 3562178
---------------------
Number of elements: 600000
Binary Search (nanoseconds): 11297
Iterate through All (nanoseconds): 31695098
Iterate until (nanoseconds): 3472790
---------------------
Number of elements: 700000
Binary Search (nanoseconds): 5966
Iterate through All (nanoseconds): 42204849
Iterate until (nanoseconds): 13751329
---------------------
Number of elements: 800000
Binary Search (nanoseconds): 9641
Iterate through All (nanoseconds): 70342248
Iterate until (nanoseconds): 3763114
---------------------
Number of elements: 900000
Binary Search (nanoseconds): 6186
Iterate through All (nanoseconds): 49221498
Iterate until (nanoseconds): 3536967
---------------------
Number of elements: 1000000
Binary Search (nanoseconds): 5769
Iterate through All (nanoseconds): 55852887
Iterate until (nanoseconds): 3867962
```