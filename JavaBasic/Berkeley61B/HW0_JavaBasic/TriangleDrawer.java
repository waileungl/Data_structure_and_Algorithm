package Berkeley61B.HW0_JavaBasic;

public class TriangleDrawer {
    public static void drawTriangle1(int N) {
        int SIZE = N;
        for(int i = 0; i <= SIZE; i++){
            for(int j = 0; j <= SIZE; j++){
                if( j < i){
                    System.out.print("*");
                }
            }
            System.out.println("");
        }
    }

    public static void drawTriangle2(int N) {
        int col = 0;
        int row = 0;
        int SIZE = N;
        while (row < SIZE){
            while (col <= row) {
                System.out.print('*');
                col = col + 1;
                }
            col = 0;
            System.out.println("");
            row = row + 1;
        }
    }

    public static void main(String[] args) {
        // drawTriangle1(4);
        drawTriangle2(12);
    }
}