
        Web Development Assignment 7

           Vaccine Website

SASS features used and some info related to them :

Variables- Value begin with $
Property declaration 
placeholder selector : starts with %
Placeholder can be extended 
@extend selector  tells sass that one selector should inherit the styles of another.
Interplation - 
Uses of Interpolation:
1. To use dynamically created names as a property name, a variable name or for any other same purposes.
2. To create a very reusable code; where you can define a property name, strings, selector names etc, as a variable.
Nesting - 
eg :   transition: {
    property: font-size;
    duration: 4s;
    delay: 2s;
  }
Mixins- in media query
Allows to define styles that can be re-used throughout stylesheet
Function-
eg :@function invert($color, $amount: 100%) {
  $inverse: change-color($color, $hue: hue($color) + 180);
  @return mix($inverse, $color, $amount);
}
$primary-color: #036;  

## colors

1. $light: #f8f3f3; - white
2. $dark: #222121; - black
3. $lime: #00cc66; 
4. $orangeRed: #fb4b4e;
5. $blue: #2541b2;
6. $orange:rgb(241, 132, 7);
## Authors
Anwesh Kumar Singh


