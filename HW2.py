def gate_and(input1, input2):
  ''' an AND gate (input1 ^ input2)'''
  gate1 = input1 and input2
  return bool(gate1)

def gate_or(input1, input2):
  '''an OR gate (input1 v input2)'''
  gate1 = input1 or input2
  return bool(gate1)

def gate_xor(input1, input2):
  '''a XOR gate ( (input1 ^ -input2) v (-input1 ^ input2))'''
  gate1 = input1 and not input2
  gate2 = input2 and not input1
  return bool(gate1 or gate2)

def gate_nand(input1, input2):
  '''a NAND gate (-(input1 ^ input2)) '''
  gate1 = not(input1 and input2)
  return bool(gate1)

def gate_nor(input1, input2):
  '''a NOR gate (-(input1 v input2)) '''
  gate1 = not(input1 or input2)
  return bool(gate1)

def gate_not(input1):
  '''a NOT gate (-input1)'''
  return bool(not input1)

def myCircuit(a, b, c, d):
    # Apply NOT to each input
    not_a = gate_not(a)
    not_b = gate_not(b)
    not_c = gate_not(c)
    not_d = gate_not(d)

    # AND of all inputs except one with NOT of that input
    and1 = gate_and(not_a, gate_and(b, gate_and(c, d)))
    and2 = gate_and(a, gate_and(not_b, gate_and(c, d)))
    and3 = gate_and(a, gate_and(b, gate_and(not_c, d)))
    and4 = gate_and(a, gate_and(b, gate_and(c, not_d)))

    # OR of all the AND outputs
    or1 = gate_or(and1, and2)
    or2 = gate_or(and3, and4)

    return gate_or(or1, or2)

print(circuit(1, 1, 1, 0))
print(circuit(1, 1, 0, 1))
print(circuit(1, 0, 1, 1))
print(circuit(0, 1, 1, 1))
print(circuit(1, 1, 1, 1))
print(circuit(1, 1, 0, 0))
print(circuit(1, 0, 0, 0))
print(circuit(0, 0, 0, 0))
print(circuit(0, 0, 0, 1))
print(circuit(0, 0, 1, 0))
print(circuit(0, 1, 0, 0))
print(circuit(0, 1, 1, 0))
