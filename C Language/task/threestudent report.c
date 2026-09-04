#include <stdio.h>

int main()
{
    int marks[3][5];
    int total[3] = {0, 0, 0};
    int max;
    char name[3][50];

    for (int i = 0; i < 3; i++)
    {
        printf("\nEnter Student %d Name: ", i + 1);
        scanf(" %[^\n]", name[i]);

        printf("Enter Hindi Marks: ");
        scanf("%d", &marks[i][0]);

        printf("Enter English Marks: ");
        scanf("%d", &marks[i][1]);

        printf("Enter Maths Marks: ");
        scanf("%d", &marks[i][2]);

        printf("Enter Science Marks: ");
        scanf("%d", &marks[i][3]);

        printf("Enter Computer Marks: ");
        scanf("%d", &marks[i][4]);
    }

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            total[i] = total[i] + marks[i][j];
        }
    }

    for (int i = 0; i < 3; i++)
    {
        printf("\nName: %s", name[i]);
        printf("\nTotal Marks: %d\n", total[i]);
    }

    max = total[0];

    for (int i = 1; i < 3; i++)
    {
        if (total[i] > max)
        {
            max = total[i];
        }
    }

    for (int i = 0; i < 3; i++)
    {
        if (max == total[i])
        {
            printf("\nTopper Name: %s", name[i]);
            printf("\nMarks: %d\n", max);
        }
    }

    return 0;
}
