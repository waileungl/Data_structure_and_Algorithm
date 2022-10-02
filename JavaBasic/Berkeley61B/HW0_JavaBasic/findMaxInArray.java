package Berkeley61B.HW0_JavaBasic;

public class findMaxInArray {
    public static void main(String[] args) {
       int[] nums = {9, 2, 15, 2, 22, 10, 6};
       System.out.println(max2(nums));      
    }

    public static int max1(int[] m) {
        int max = 0;
        for(int i = 0; i < m.length; i++){
            if (max < m[i]){
                max = m[i];
            }
        }
        return max;
    }

    public static int max2(int[] m) {
        int max = 0;
        int x = 0;
        int y = 0;
        while(y < m.length){
            if (max < m[x]){
                max = m[x];
            }
            x++;
            y++;
        }
        return max;
    }
}
