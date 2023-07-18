print("Approximate zero:")
def f(x):
    return x**3 - x + 4

# Initialize endpoints
a = -2
b = 0

# Tolerance level
epsilon = 0.0001

# Loop until the interval size is smaller than epsilon
while abs(a - b) > epsilon:
    c = (a + b) / 2.0  # Compute midpoint
    if f(c) == 0:      # If c is a root, we are done
        break
    elif f(a) * f(c) < 0:  # f(c) and f(a) have opposite signs, replace b with c
        b = c
    else:                  # f(c) and f(b) have opposite signs, replace a with c
        a = c

# At this point, either c is a root or [a, b] is a very small interval containing a root
print("Approximate zero:", c)