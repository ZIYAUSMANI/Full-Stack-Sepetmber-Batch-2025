#include <stdio.h>

int main()
{
    int marks[5][5];
    int total[5] = {0};
    int percentage[5];

    for (int i = 0; i < 5; i++)
    {
        printf("\nEnter Marks of Student %d\n", i + 1);

        for (int j = 0; j < 5; j++)
        {
            printf("Enter Marks: ");
            scanf("%d", &marks[i][j]);

            total[i] = total[i] + marks[i][j];
        }

        percentage[i] = total[i] / 5;
    }

    printf("\n****************************************\n");

    for (int i = 0; i < 5; i++)
    {
        printf("Student %d Percentage: %d\n", i + 1, percentage[i]);

        if (percentage[i] >= 90)
        {
            printf("Grade: A\n");
        }
        else if (percentage[i] >= 75)
        {
            printf("Grade: B\n");
        }
        else if (percentage[i] >= 50)
        {
            printf("Grade: C\n");
        }
        else
        {
            printf("Fail\n");
        }

        printf("----------------------------------------\n");
    }

    return 0;
}
