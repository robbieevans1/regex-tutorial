# Title (replace with your title)

This tutorial will show you the essentials of regular expressions.

## Summary

A regular expression (regex) is a sequence of characters that specifies a search pattern in text. Here are a few different regular expressions that I have used in a simple password checker to see if the a password matches certain criteria:

1st regex searches to see if there are any uppercase letters
2nd regex searches to see if there are any lowercase letters
3rd regex searches to see if there are any numbers
4th regex searches to see if there are any special characters
5th regex searches to see if there are any repeated characters

```
/[A-Z]/g
/[a-z]/g
/[0-9]/
/[^0-9a-zA-Z/s]/g
/(.)\1/g
```
## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors

### Quantifiers

### OR Operator

### Character Classes

### Flags
Flags are characters after the forward slash in a regex that are optional parameters that changes the way the regex inside the forward slashes behaves. More than one flag can be used in a regex expression.

Examples of flags:
* `g` - Global, allows you to have multiple matches within a string and not just the first one.
* `m` - Multiline, enable boundary characters to match the end of every single line in a string instead of only the beginning and ending of the string.
* `i` - Case-insensitive search, makes the expression case-insensitive

Examples of above:
```
/dog/g  matches all 'dog' sequence of letters in string
/dog/m  matches all 'dog' sequence of letters in string at the    beginning of each line.
/dog/gi  matches 'dog' or 'Dog' sequence of letters in string
```

### Grouping and Capturing

### Bracket Expressions

### Greedy and Lazy Match

### Boundaries

### Back-references

### Look-ahead and Look-behind

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)