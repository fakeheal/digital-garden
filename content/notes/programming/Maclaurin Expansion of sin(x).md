---
title: Maclaurin Expansion of sin(x)
tags:
  - algorithms
  - geometry
  - code
---

$$
sin(x) = 
\frac{x}{1!} 
- \frac{x^3}{3!}
+ \frac{x^5}{5!}
- \frac{x^7}{7!}
+ \frac{x^9}{9!} 
+ ...
= \sum_{i = 1}^{\infty}{(-1)^{i + 1}}\frac{{x^{(2i-1)}}}{(2i-1)!}
$$
```cpp
int main() {  
    float x = 90 * 3.1415 / 180;  
  
    double prevSinX = 0., sign = -1.0, sinX = x, common = x;  
    unsigned i = 2;  
  
    while (abs(sinX - prevSinX) > 0.0001) {  
        prevSinX = sinX;  
        common *= x * x / double((2 * i - 1) * (2 * i - 2));  
        sinX += sign * common;  
        sign *= -1.0;  
        i++;  
    }  
  
    std::cout << sinX << std::endl;  
}
```