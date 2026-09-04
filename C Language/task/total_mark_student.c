#include <stdio.h>

int main()
{
    int marks;
    int total[10] = {0};
    int count = 1;

    while (count <= 10)
    {
        printf("%d Student Hindi Marks: ", count);
        scanf("%d", &marks);
        total[count - 1] += marks;

        printf("%d Student English Marks: ", count);
        scanf("%d", &marks);
        total[count - 1] += marks;

        printf("%d Student Maths Marks: ", count);
        scanf("%d", &marks);
        total[count - 1] += marks;

        printf("%d Student Science Marks: ", count);
        scanf("%d", &marks);
        total[count - 1] += marks;

        printf("\n**************************************************\n");

        count++;
    }

    for (int i = 0; i < 10; i++)
    {
        printf("Total marks of %d Student: %d\n", i + 1, total[i]);
    }

    return 0;
}
