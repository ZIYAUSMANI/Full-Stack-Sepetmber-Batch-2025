#include <stdio.h>

int main()
{
    int n;

    printf("Enter number of students: ");
    scanf("%d", &n);

    int marks[n][3];

    for (int student = 0; student < n; student++)
    {
        printf("\nEnter 3 marks for Student %d:\n", student + 1);

        for (int subject = 0; subject < 3; subject++)
        {
            printf("Subject %d: ", subject + 1);
            scanf("%d", &marks[student][subject]);
        }
    }

    printf("\n\n--- Student Marks ---\n");

    for (int student = 0; student < n; student++)
    {
        printf("Student %d: ", student + 1);

        for (int subject = 0; subject < 3; subject++)
        {
            printf("%d ", marks[student][subject]);
        }

        printf("\n");
    }

    return 0;
}
