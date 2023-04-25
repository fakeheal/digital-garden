---
title: Leibniz formula for π (pi)
tags: 
- algorithms
- geometry
---


$$
\frac{\pi}{4} 
=  \frac{1}{1}
-  \frac{1}{3}
+  \frac{1}{5}
-  \frac{1}{7}
+  \frac{1}{9} - \dots = \sum_{i = 1}^{\infty}{(-1)^{i+1}}\frac{1}{2i-1}
$$


```cpp
#include <cmath>

int main() {  
    float a = 1.0;  
    float b = a - (1.0 / 3.0);  
    int znak = 1;  
    unsigned i = 3;  
  
    while (fabs(b - a) > 0.001) {  
        a = b;  
        b += znak * (1.0 / (2.0 * i - 1.0));  
        znak *= -1;  
        i++;  
    }  
}
```


```cpp
int main() {  
    float sum = 1;  
    int sign = -1;  
    unsigned n = 10000;  
  
    for (int i = 2; i <= n; i++) {  
        sum += sign * (1.0 / (2.0 * i - 1.0));  
        sign *= -1;  
    }  
  
    std::cout << sum * 4;  
}
```