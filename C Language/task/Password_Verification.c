#include <stdio.h>

int main()
{
    int password = 1234;
    int enterpass;
    int attempt = 0;
    int newpass;
    int confirm;

    do
    {
        printf("Enter Your Password: ");
        scanf("%d", &enterpass);

        if (enterpass == password)
        {
            printf("Login Successful! Thank You...");
            break;
        }
        else
        {
            attempt++;

            printf("%d Attempt Remaining\n", 4 - attempt);

            if (attempt == 4)
            {
                printf("\nPlease Set a New Password\n");

                printf("Enter New Password: ");
                scanf("%d", &newpass);

                printf("Re-enter New Password: ");
                scanf("%d", &confirm);

                if (newpass == confirm)
                {
                    password = newpass;
                    printf("\nPassword Changed Successfully!\n");
                    attempt = 0;
                }
                else
                {
                    printf("\nPassword Does Not Match!\n");
                }
            }
        }

    } while (attempt < 4);

    return 0;
}
