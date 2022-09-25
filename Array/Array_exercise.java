import java.util.Arrays;

public class Array_exercise {
    public static void main(String[] args) {
        // String[] cars = {"Ford", "BMV", "Porsche", "Ferrari"};
        // for(String bro: cars) {
        //     System.out.println(bro + 1); //each value in bro has "1" followed, eg Ford1
        // }
        
        // int[][] numMatrix = { {1, 2, 3, 4}, {5, 6, 7}, {8, 9, 10, 11, 12}};
        // for(int i = 0; i < numMatrix.length; i++) {
        //     for(int j = 0; j < numMatrix[i].length; j++) {
        //         System.out.print(numMatrix[i][j]);
        //     }
        //     System.out.println();
        // }
        // int[] nums = new int[]{3, 7, 4, 2, 9, 13, 22};
        // for(int x: nums) {
            
        //     if(x >= 10) {
        //         break;
        //     }
        //     System.out.print(x + " ");
        // }
        // 请创建一个永久循环，在循环中，提示用户输入两个数字，并打印出两个数字区间内的所有奇数。如果用户输入1和5，就打印出1，3，5。如果用户输入的第一个数字大于第二个数字，就结束循环。
        // Scanner scanner = new Scanner(System.in);
        // int sum = 0;
        // while(true) {
        //     System.out.print("Please enter first number: ");
        //     int firstNum = scanner.nextInt();
        //     System.out.print("Please enter second number: ");
        //     int secondNum = scanner.nextInt();
        //     if(secondNum <= firstNum){
        //         break;
        //     }
        //     for(int i = firstNum; i <= secondNum; i++) {
        //         if(i % 2 == 0) {
        //             continue;
        //         }
        //         System.out.print(i + " ");
        //         System.out.println();
        //     }
        // }
        int[] array1 = {1, 5, 8, 10};
        int[] array2 = {2, 4, 8, 1};
        int[] arraySum = sumList(array1, array2);

        System.out.println(Arrays.toString(arraySum));

    
    }

    public static int[] sumList(int[] array1, int[] array2){
        int[] arraySum = new int[array1.length];
        for(int i = 0; i < array1.length; i++){
            arraySum[i] = array1[i] + array2[i];
        }
        return arraySum;
    }


}
