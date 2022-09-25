package Berkeley61B.Fibonacci_sequence;
import java.util.Scanner;

public class Fibonacci_sequence_mySolution {
    public static void fib(int n){
        int [] fibArray = new int[n+1];
        fibArray[0] = 0;
        fibArray[1] = 1;
        if (n <= 2){
            System.out.println("Sorry, the minimal length of fibonacci sequence is 3");
        }else{
            for (int i = 2; i < (n+1); i++) {
                fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
            }
            System.out.println(fibArray[n]);
        }
    }

    public static void main(String[] args){
        System.out.print("Enter the length of your fibonacci sequence: ");
        try (Scanner input = new Scanner(System.in)) {
            int fibLength = input.nextInt();
            fib(fibLength);
        }
    }
}
