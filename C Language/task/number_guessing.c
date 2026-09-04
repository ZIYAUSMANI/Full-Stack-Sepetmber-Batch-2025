#include <stdio.h>

int main()
{
    int answer = 9;
    int guess;
    int attempt = 1;

    while (1)
    {
        printf("Enter Your Guess: ");
        scanf("%d", &guess);

        if (guess == answer)
        {
            printf("Correct Guess! You Found The Number in %d Attempts.\n", attempt);
            break;
        }
        else
        {
            printf("Wrong Guess! Please Try Again.\n");
        }

        attempt++;
    }

    return 0;
}
