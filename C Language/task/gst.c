#include <stdio.h>

int main()
{
    float price[4];

    printf("Enter price of item 1: ");
    scanf("%f", &price[0]);

    printf("Enter price of item 2: ");
    scanf("%f", &price[1]);

    printf("Enter price of item 3: ");
    scanf("%f", &price[2]);

    printf("Item 1 price after GST is: %f\n", price[0] + (0.18 * price[0]));

    printf("Item 2 price after GST is: %f\n", price[1] + (0.18 * price[1]));

    printf("Item 3 price after GST is: %f\n", price[2] + (0.18 * price[2]));

    return 0;
}