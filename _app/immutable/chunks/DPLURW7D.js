import{Y as e}from"./C4_TrgNx.js";var t=e({default:()=>n}),n=`---
title: Sean Integers 
date: 2026-04-26
---
# Sean Integers
Behold, as you are about to see the most stupid form of math ever, that has been overcomplicated to the point of being a net negative. My goal with this blog is to teach you nothing about math. Infact, it is my mission that you know less about math when you read the following bits.

## Their Inception
I was watching videos by Matt Parker on YouTube, and then I came across the Parker Square! I thought it was so funny to name things after yourself, so I arbitrarily chose a few rules to define a set of numbers and I called them the Sean Integers!


Then I was like "Ayo, whats actually in the set". Which leads us to the next section...

## What was made up

A Sean integer is an integer such that, the multiplication of each of its digits is equal to the integer itself. All numbers that fulfill this condition are in the set $S$.


More formally, a Sean integer is an integer such that for arbitrary 
$ z= z_nz_{n-1}...z_1, z\\in \\mathbf{Z}$ of $n\\ge 1$ digits. The following condition holds:


$$ z= \\prod_{i=1}^{n} {z_i}$$
## The proof  

Before diving into the proof, I encourage you to think about it as well! I have seen 3 different proofs by 3 different people, so maybe we can add to the tally ;). 


We know that the set isn't empty as Sean integers that fulfill this condition have been discovered as all $-10 < z < 10$ automatically fulfill this condition. However, for $z$ outside of this boundary, no Sean number has been found. A C++ script has been ran to check for numbers in the interval $[10,2^{32}]$ but to no avail. They have been also found for $z \\in \\mathbf{C}$. Indeed, if $z_1=i$, the number $z = z_nz_{n-1}...z_1=z_nz_{n-1}...z_2i$ is a Sean integer(even though they aren't integers) for all $z$ consisting of  $2$ digits except for the case when $z_2=0$. This means that $\\{1i,2i,3i...,9i,-1i,-2i,-3i...,-8i,-9i\\} \\subseteq S'$ for the now extended Set $S', S \\subseteq S'$ On the next page can be found a messy proof for why Sean integers can't exist for numbers above 9.

**Claim:** Sean integers don't exist for numbers with absolute value greater than or equal to 10**


*proof.* \\\\
Proof by induction

Let $\\Gamma(\\alpha) = \\prod_{i=1}^{n} {\\alpha_i}$ be the function that returns the product representation of an integer $\\alpha$ of length $n$.

**Base Case:** For $\\alpha=10$, the condition clearly doesn't hold because $\\Gamma(\\alpha)=1 \\cdot 0 \\ne 10$

**Inductive Case:** Take an arbitrary $k\\ge10$ of $c$ digits assume that all $i$ $10\\le i \\le k$ the function $\\Gamma(i) < i$ **(IH)**.  We know that $k$ has $c$ digits. This means that $k+1$ can either be of length $c$ or $c+1$.
      
      
**Case 1: $k+1$ is of length $c+1$: ** This would mean that the $k_1=9$ for $k$ and hence the last digit of $k+1$ will be equal to $0$. This means that $\\Gamma(k+1)=\\prod_{j}^{c+1} {{(k+1)}_j} = 0 < k+1$ as $k+1\\ge 10$

**Case 2: $k+1$ is of length $c$: ** This would mean that $\\Gamma(k+1)= \\frac{\\Gamma(k)}{k_1} \\cdot (k_1+1)$. Let $\\Gamma(k)/k_1= \\Gamma(m)$ for $m= k_ck_{c-1}...k_2$ such that $\\Gamma(k+1)= \\Gamma(m) \\cdot (k_1+1) $. We know that $\\Gamma(m) < m$ **(IH)** and that $m$ has $c-1$ digits. This means that $m \\cdot 10> \\Gamma(m) \\cdot (k_1+1)$ as $(m > \\Gamma(m)) \\land ((k_1+1) < 10)$.  Adding $k_1+1$ to both sides, we get $$m \\cdot 10+ (k_1+1)= k+1> \\Gamma(m) \\cdot (k_1+1)+k+1 >\\Gamma(m) \\cdot (k_1+1)= \\Gamma(k+1).$$ Hence $k+1 > \\Gamma(k+1)$

Since $k$ was chosen arbitrarily, by principle of mathematical induction, we know that $\\forall \\alpha \\in \\mathbf{Z}(\\alpha \\ge 10 \\rightarrow \\Gamma(\\alpha) < \\alpha)$. 
Since this holds for all positive integers above 10, it is easy to see how it would hold for all $\\alpha \\le -10 $. Since we already know $\\Gamma(\\alpha) < \\alpha $, if we multiply both sides by $-1$, we can get $-\\Gamma(\\alpha)>-\\alpha$. Trivially, $-\\Gamma(\\alpha)= \\Gamma(-\\alpha)$. Hence, $\\Gamma(-\\alpha)> -\\alpha$. From letting, $\\beta=-\\alpha$ we can see for all integers $\\beta \\le -10$, $\\Gamma(\\beta)> \\beta$ hence the statement holds for all integers $|\\gamma| \\ge 10$.
 **Q.E.D**

## The poof 

While this isn't the most earth shattering math discovery, I am still happy that I have a set of numbers that I can call my own. Well, it is just a coincidence that this set of numbers are all the integers with one digit (excluding the ones that come from the complex numbers DLC) but it is what it is.


I feel like this was still a nice thought experiment as it to me is the essence of what math is: coming up with random shit and maybe someone deems it useful enough in 320 years to use it.
`;export{t as n,n as t};