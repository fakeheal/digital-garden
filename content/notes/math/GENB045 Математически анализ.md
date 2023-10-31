---
title: GENB045 Математически анализ
enableToc: true
tags: 
- fundamentals
- calculus
---  

> [!info]  
>   
> Записки от лекциите по ["CSCB315 Аналитична геометрия"](https://ecatalog.nbu.bg/default.asp?V_Year=2021&YSem=4&Spec_ID=&Mod_ID=&PageShow=coursepresent&P_Menu=courses_part1&Fac_ID=3&M_PHD=0&P_ID=2206&TabIndex=1&K_ID=35172&K_TypeID=82&l=0), водени от проф. д-р Марин Маринов.  

## Лекция №1

### Наредба на реалните числа

#### Максимум
$$
a = max\{X\}, \text{ когато } a \in X \text{ за } \forall x \in X : a \geq x
$$

#### Минимум
$$
a = min\{X\}, \text{ когато } a \in X \text{ за } \forall x \in X : a \leq x
$$

#### Горна граница на $X$

$$
a \text{ е горна граница на } X, \text{ когато за }  \forall x \in X:a\geq x
$$

#### Супремум (точна горна граница)

$$
a = sup\{X\}, \text{ когато } a \text{ е най-малката горна граница на } X
$$

#### Инфимум (точна долна граница)

$$
a = inf\{X\}, \text{ когато } a \text{ е най-голямата долна граница на } X
$$

### Принцип за непрекъснатост
1. Всяко непразно множество от реални числа, което е ограничено отгоре, притежава точна граница.
*Еквивалентно:*
2. Всяко непразно множество от реални числа, което е ограничено отдолу, притежава точна долна граница.

> [!info] Теорема 1 (Кантор). 
> Нека е дадена една безкрайна редица от крайни, затворени интервали:
> $$
> [a_1; b_1] \supseteq [a_2;b_2] \supseteq \dots \supseteq [a_n; b_n] \supseteq \dots
> $$
> Тогава съществува такова число $c$, че $c \in [a_n; b_n]$ за всяко $n \in N$.
> [[notes/math/Proof of Nested Interval Theorem|доказателство]]

> [!info] Теорема 2 (гъстота на рационалните и ирационалните числа).
> Ако $a < b$ са две произволни реални числа, то съществуват рационално число $r$ и ирационално число $p$, такива, че $a < r < b$ и $a < p < b$.
> [[notes/math/Proof of Density of irrational numbers|доказателство]]

### Синус и Косинус

$$sin(\theta) = \frac{\text{срещулежащ катет}}{\text{хипотенуза}}$$
$$cos(\theta) = \frac{\text{прилежащ катет}}{\text{хипотенуза}}$$
$$tg(\theta) = \frac{sin(\theta)}{cos(\theta)} = \frac{\text{срещулежащ катет}}{\text{прилежащ катет}}$$
$$ctg(\theta) = \frac{cos(\theta)}{sin(\theta)}  = \frac{\text{прилежащ катет}}{\text{срещулежащ катет}} $$


#### $sin^2(\theta) + cos^2(\theta) = 1$

![правоъгълен триъгълник със страни a,b,c и ъгъл тета](notes/assets/math-analysis-triangle-with-right-angle.png#invert_B)

$$
sin^2(\theta) = \frac{b^2}{c^2}, 
cos^2(\theta) = \frac{a^2}{c^2}
$$

$$
sin^2(\theta) + cos^2(\theta) = \frac{b^2}{c^2} + \frac{a^2}{c^2} = \frac{b^2 + c^2}{c^2}
$$

От [[notes/math/geometry/Pythagorean theorem|Питагоровата теорема]] следва, че 

$$
\frac{b^2 + c^2}{c^2} = \frac{c^2}{c^2} = 1
$$

#### sin/cos на ъгли, допълващи се до 90 градуса

![правоъгълен триъгълник със страни a,b,c и ъгъл тета](notes/assets/math-analysis-sin-cos-complementary-angle.png#invert_B)

$$
sin(\theta) = \frac{b}{c} = cos(90\textdegree-\theta) = \frac{b}{c}
$$

$$
cos(\theta) = \frac{a}{c} = sin(90\textdegree - \theta) = \frac{a}{c}
$$

$$
tg(\theta) = ctg(90\textdegree - \theta) = \frac{b}{a}
$$

$$
ctg(\theta) = tg(90\textdegree - \theta) = \frac{a}{b}
$$

За произволни числа $\alpha$ и $\beta$ са в сила равенствата:
$$
sin(\alpha + \beta) = sin(\alpha)cos(\beta) + cos(\alpha)sin(\beta)
$$

$$
cos(\alpha \beta) = cos(\alpha)cos(\beta) - sin(\alpha)sin(\beta)
$$

Ако $0 < \alpha < \frac{\pi}{2}$, то  $0 < sin(\alpha) < \alpha < \frac{sin(\alpha)}{\cos(\alpha)}$.

![изчисления на sin](notes/assets/math-analysis-sin-x.png#invert_B)

### Графика на функция

> [!info] Определение 1.
> Множеството от точки $\Gamma_s = \{(x; sin(x)) : x \in \mathbb{R}\}$ се нарича графика на функцията $y = sin(x)$.

> [!info] Определение 2.
> Множеството от точки $\Gamma_c = \{(x; cos(x)) : x \in \mathbb{R}\}$ се нарича графика на функцията $y = cos(x)$.

> [!info] Определение 3.
> *Функция* ще наричаме наредената тройка $f = \{D_f, W_f, F\}$, където $D_f$ и $W_f$ са числови множества, а $F$ е правило, съпоставящо на всяко число от $D_f$ единствено число от $W_f$, като на всяко число от $W_f$ е съпоставено някакво число от $D_f$.
> $D_f$ наричаме *дефиниционна област* на $f$.
> $W_f = \{f(x): x \in D_f\}$ наричаме *множество от значения*.

> [!info] Определение 4.
> Графика на функцията $y = f(x)$ наричаме множеството от наредени двойки числа $\Gamma_f = \{(x; f(x)) : x \in D_f\}$.

### Обратна функция

> [!tip] Определение
> $y = f(x)$ е *обратима*, когато $x_1 \neq x_2$ следва $f(x_1) \neq f(x_2)$.

Например функцията $y=2x-1$ e обратима, защото $x_1 \neq x_2 \implies 2x_1 \neq 2x_2 \implies 2x_1 - 1 \neq 2x_2 -1$.

Но $y = x ^ 2$ не е обратима, защото $-1 \neq 1$, но $(-1)^2 = 1^2$.

> [!tip] Определение
> *Обратна функция* на функцията $y = f(x)$ се нарича функцията $x = f^-1(y)$, която $y \xrightarrow{f^{-1}} x$, ако $x \xrightarrow{f} y, \forall y \in W_f$.


> [!note] Твърдение 1.
> Нека $y = f(x)$ е обратима функция с дефиниционна област $D_f$ и множество от значения $W_f$. Тогава тя има обратна функция $x = f^{-1}(y)$ с дефиниционна област $W_f$ и множество от значения $D_f$ и са в сила равенствата:
> $$
> \begin{equation}
> \begin{cases}
> x = f^{-1}(f(x)), \forall x \in D_f;\\
> y = f(f^{-1}(y)), \forall y \in W_f;
> \end{cases}
> \end{equation}
> $$
> Равенствата се наричат *формули за съкращения*.
> 

