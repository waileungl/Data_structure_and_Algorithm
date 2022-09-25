package Berkeley61B.Fibonacci_sequence;

public class Fibonacci_sequence_zazaSolution {
    public static void main(String[] args){
        int n = 5;
        int [] C = {0, 1, 1};
        for (int i = 0; i < n - 2; i++) {
                int temp = C[2];
                C[2] = C[2] + C[1];
                C[0] = C[1];
                C[1] = temp;
        }
        System.out.println(C[2]);
    }
}