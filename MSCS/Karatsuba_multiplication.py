class Solution:
    def multiply(self, a: str,  b: str) -> str:
        def bitwise_add(ai, bi, ci):
            if ai == 0:
                if bi == 0:
                    return (ci, 0)
                else: # ai= 0, bi = 1
                    return (1-ci, ci)
            else:
                if bi == 0:
                    return (1-ci, ci)
                else:
                    return (ci, 1)
                
        def add(a, b):
            # add bit strings a, b
            (n, m) = len(a), len(b)
            carry = 0
            c = []
            for i in range(max(m,n)):
                ai = a[i] if i < n else 0
                bi = b[i] if i < m else 0
                (ci, carry) = bitwise_add(ai, bi, carry)
                c.append(ci)
            if carry == 1:
                c.append(carry)
            return c

        def subtract(a, b):
            # we will use two's complement subtraction
            # this is a very nice and common trick where
            # we can use addition to perform subraction of
            # binary numbers. It is used inside computers.
            # assume a >= b -- this will generally hold for all our use cases
            n = len(a)
            #assert(len(b) <= n)
            k = len(a) - len(b)    
            bcomp = [1-elt for elt in b] + [1]*k # flip the bits in b and pad with 1s
            bcomp2 = add(bcomp, [1]) # add 1
            r = add(a, bcomp2)
            return r[0:n]

        def pad(a, k):
            return  [0]*k + a 
        def grade_school_multiply(a, b):
            n, m = len(a), len(b)
            tmp = list(a)
            res = [0]
            for bit in b:
                if bit == 1:
                    res = add(res, tmp)
                tmp = [0]+tmp # shift tmp
            return res 
        (m, n) = len(a), len(b)
        if m <= 2 or n <= 2:
            # revert to grade school multiplication
            return grade_school_multiply(a, b)
        else:
            mid1 = m//2
            a1 = a[0:mid1]
            a2 = a[mid1:]
            b1 = b[0:mid1]
            b2 = b[mid1:]
            # [a] = 2^{mid1} * [a2] + [a1]
            # [b] = 2^{mid1} * [b2] + [b1]
            # [a]* [b] = 2^{2*mid1} ([a2]*[b2]) + 2^mid1 ([a2]*[b1] + [a2]*[b1]) + [a1]*[b1]
            
            # 3 recursive calls to karatsuba_multiply
            r1 = self.multiply(a1, b1)
            r2 = self.multiply(a2, b2)
            r3 = self.multiply(add(a1, a2), add(b1, b2))
            # Do subtraction
            r4a = subtract(r3, r1)
            r4 = subtract(r4a, r2)
            
            # Do paddding
            s1 = pad(r2, 2*mid1)
            s2 = pad(r4, mid1)
            s3 = add(s1, s2)
            return add(s3, r1)


solution = Solution()
print(solution.multiply("1001", "1110"))