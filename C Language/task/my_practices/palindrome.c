
#include <stdio.h>

int main()
{
    char str[20] = "ziyiz";
    int i, j, flag = 0;
    for (j = 0; str[j] != '\0'; j++)
        ;
    for (i = 0, j = j - 1; i < j; i++, j--)
    {
        if (str[i] != str[j])
        {
            flag = 1;
            break;
        }
    }

    if (flag == 0)
        printf("Palindrome");
    else
        printf("Not Palindrome");

    return 0;
}