package Berkeley61B.HW0_JavaBasic;

public class BreakContinue {
    public static void windowPosSum(int[] a, int n) {
        int sum = 0;
        for (int i = 0; i < a.length; i++){
            if (a[i] < 0){
                continue;
            }
            for (int j = i; j <= i + n; j++){
                if(j >= a.length){
                    break;
                }
                sum += a[j];
            }
            a[i] = sum;
            sum = 0;
        }
    }
    private static String answer(int[] a) {
        return java.util.Arrays.toString(a);
    }

    
    public static void main(String[] args) {
        //1st example
        int[] a = {1, 2, -3, 4, 5, 4};
        int n = 3;
        //2nd example
        // int[] a = {1, -1, -1, 10, 5, -1};
        //int n = 2;
        windowPosSum(a, n);
      // 1st example should print 4, 8, -3, 13, 9, 4
      // 2nd example should print -1, -1, -1, 14, 4, -1
        System.out.println(answer(a));
    }
}