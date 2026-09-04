#include <stdio.h>
int main()
{
    int arry[7] = {1, 1, 1, 2, 1, 3, 2};
    int i, j;
    printf("duplicate element in array:\n");
    for (i = 0; i < 7; i++)
    {
        for (j = i + 1; j < 7; j++)
        {
            if (arry[j] == arry[i])
            {

                printf("%d", arry[i]);
                break;
            }
        }
    }
    return 0;
}
