package Berkeley61B.Fibonacci_sequence;

public class FIbonacci_sequence_recursive {
    public static int fib(int n){
        if (n <= 1){
            return n;
        } 
        return fib(n - 1) + fib(n - 2);
    }

    public static int fib2(int n, int k, int f0, int f1) {
        if (n == (k+1)) {
            return f1;
        }
        return fib2(n, k+1, f1, f0 + f1);
    }
int[] fibonacciArray = {0, 1, 1, 2, 3, 5, 8, 13, 21};
    public static void main(String[] args){
        System.out.println(fib2(7, 0, 0, 1));      
    }
}