Feature: Verifying if added products added in the shopping cart still exist

    Scenario: Open Ebay Australia home page
        Given   I open Ebay Australia website
        Then    The title of the page should be "Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay"

    Scenario: Search for Product 1
        When    I search for a product called "myob accountright"
        And     I click on the search button
        Then    I should see the product listing page
        And     The title of the page should be "myob accountright | eBay"

    Scenario: Select and add Product 1 in shopping cart
        When    I select the first product from the list
        And     I click on Add to cart button
        Then    I should see Item added to cart modal
        And     I should see "Checkout 1 item"

    Scenario: Search another product
        When    I dismiss the add to cart modal
        And     I search for a product called "myob essentials"
        And     I click on the search button
        Then    I should see the product listing page
        And     The title of the page should be "myob essentials | eBay"

        Scenario: Select and add Product 2 in shopping cart
        When    I select the first product from the list
        And     I click on Add to cart button
        Then    I should see Item added to cart modal
        And     I should see "Checkout 2 item"

    Scenario: Go to shopping cart and verify if the products were added correctly
        When    I click on Go to cart
        Then    The title of the page should be "Your eBay Shopping Cart"
        And     The cart summary should show "Subtotal (2 items):"

    Scenario Outline: Verify product names that were added to the cart
        Then    The name of the <productNumber> product added in the cart is <productName>
    Examples:
        |  productNumber | productName |
        | "1st"  | "MYOB ESSENTIALS 1-PAYROLL/1-YEAR SUBSCRIPTION BOXED LICENSE"  | 
        | "2nd"  | "MYOB AccountRight Basics Full Licence No subscription fees - Email code"  | 