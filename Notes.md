# Tailwind CSS

## Variables in tailwind css

1. We can use functions in tailwind css if we write custom css
   For example : theme();
   `.btn {
background-color: theme('colors.blue.500');
padding: theme('spacing.2') theme('spacing.4');
/* ... */
}`

## Optimizing for Production

- For minify css file in Tailwind css
  cmd : npx tailwindcss -o build.css --minify

##

Aspect Ratio
