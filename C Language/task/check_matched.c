#include <stdio.h>

    int main()
{
    char ch;
    int found = 0;

    while (found == 0)
    {
        printf("Enter a Character: ");
        scanf(" %c", &ch);

        if (ch == 'k' || ch == 'K')
        {
            printf("Character Matched\n");
            found = 1;
        }
        else
        {
            printf("Character Not Matched\n");
        }
    }

    return 0;
}
