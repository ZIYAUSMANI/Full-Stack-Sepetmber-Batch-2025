#include <stdio.h>

int main()
{
    int marks[5];
    int total = 0;
    float per;

    for (int i = 0; i < 5; i++)
    {
        printf("Enter Marks: ");
        scanf("%d", &marks[i]);

        total = total + marks[i];
    }

    per = total / 5.0;

    printf("Total Marks: %d\n", total);
    printf("Percentage: %f", per);

    return 0;
}
