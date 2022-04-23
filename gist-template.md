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

Anchors do not assist in matching characters, but rather help to limit how in which a regex matches a string by telling the engine where matches can begin or end starting from the beginning of the string.

Examples:

- `^` - Allows a match at the beginning of a string.
- `$` - Allows a match at the end of a string.


Examples of above:

```
/The/gm  matches all 'The' groups at the beginning of each line in the string.
/go$/g  matches one 'go' at the end of a string if there is one.
```

### Quantifiers

Quantifiers are used to define how many instances of character, group, or character class must exist in the string for their to be a match.

Examples:

- `+` - Allows a match one or more times
- `*` - Allows a match zero or more times
- `?` - Allows a match zero or one times

Examples of above:

```
/e+/g  matches 'e' characters where there are one or more in a row
/se*/g  matches 's' alone or 'se' and and 'e' that follows it.
/af?/g  matches all 'a' and optionally matches 'af.' whatever is before ? is optional. this regex won't match 'f' if there isn't an a before it
```

### OR Operator

### Character Classes

Character Classes help distinguish certain characters from others.

Examples:

- `.` - matches anything except something that is on a new line
- `\d` - matches any digit, i.e. [0-9]
- `\w` - matches any letter or numbers

Examples of above:

```
/.en/g  matches both 'Ben' and 'ten'
/\d/g  matches '2' in a string that has '2day'.
/\w/g  matches all numbers and letters in string
```

### Flags

Flags are characters after the forward slash in a regex that are optional parameters that changes the way the regex inside the forward slashes behaves. More than one flag can be used in a regex expression.

Examples:

- `g` - Global, allows you to have multiple matches within a string and not just the first one.
- `m` - Multiline, enable boundary characters to match the end of every single line in a string instead of only the beginning and ending of the string.
- `i` - Case-insensitive search, makes the expression case-insensitive

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
