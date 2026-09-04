#include <stdio.h>

int main()
{
    int correctpin = 123456;
    int enteredpin;
    int check = 0;

    for (int count = 1; count <= 3; count++)
    {
        printf("Enter Your PIN: ");
        scanf("%d", &enteredpin);

        if (enteredpin == correctpin)
        {
            printf("PIN Verified Successfully!");
            check = 1;
            break;
        }
        else
        {
            printf("Wrong PIN! %d Try Remaining\n", 3 - count);
        }
    }

    if (check == 0)
    {
        printf("Too Many Wrong Attempts. Card Blocked!");
    }

    return 0;
}
