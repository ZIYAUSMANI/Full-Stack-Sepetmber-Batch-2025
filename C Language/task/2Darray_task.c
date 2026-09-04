#include <stdio.h>

int main()
{
    int matrix[4][6];
    int row = 4;
    int colum = 6;

    printf("Enter Matrix\n");

    for (int i = 0; i < row; i++)
    {
        printf("Row %d: \n", i + 1);

        for (int k = 0; k < colum; k++)
        {
            scanf("%d", &matrix[i][k]);
        }
    }

    for (int i = 0; i < row; i++)
    {
        for (int k = 0; k < colum; k++)
        {
            printf("%d ", matrix[i][k]);
        }

        printf("\n");
    }

    return 0;
}
