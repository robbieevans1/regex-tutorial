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
Acts similarly to a boolean OR operator, gives optionality between potential matches.

Examples:

- `|` - Acts similarly to a boolean OR operator and matches the expression before or after the '|' sign.
- `[]` - Matches anything within the brackets.


Examples of above:

```
/R(e|a)/g would match the 'Re' in 'Real' and 'Ra' in 'Race'  
/[ea]/g  would match the 'ee' in 'See', 'ea' in 'peal' and 'aa' in 'Paak'
```


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
This is a way of capturing more than one character as a set.

Examples:

- `()` - parentheses are used as capturing groups of characters so the characters aren't matched in isolation

Examples of above:

```
/(dog)/g  matches all 'dog' sequence of letters in string but not 'do', 'og', or 'dg'.

```

### Bracket Expressions
Bracket expressions are used similiarly to parenthese, but different in the respect that they allow you to group the characters contained in the brackets without regard to their order.

Examples:

- `[]` - parentheses are used as capturing groups of characters so the characters aren't matched in isolation

Examples of above:

```
/[re]/g  would match 'e' in 'the' 're' in 'Share' and 'er' in 'thinner'

```

### Greedy and Lazy Match
a greedy match is one where we attempt to match the longest possible string that corresponds to our regex and a quantified character is repeated as much as possible. a lazy match in contrast looks for sthe smallest match possible in a string and attempts to repeat itself as little as possible

Examples:

```
/".+"/g  would be a greedy match and could possibly return the follow as a match "The" ocean is "beautiful"
/".+?"/g  would be a lazy match and would return and "The", and "beautiful" in the string "The" ocean is "beautiful" it appears to be more accurate in what the regex was trying to calculate in this instance.

```

### Boundaries
Boundaries are similiar to anchor in that they attempt to match a position and not character. They can word or not-word boundaries and are zero-length.

Examples:

- `\b` - this is an anchor that matches the position of where a word starts and ends.

- `\B` - this will match any position that is not a word boundary

Examples of above:

```
/\bdog\b/g this would match 'dog' in the string 'The dog looked dogged in his demeanor' and not dog in 'dogged'

/\B-\B/g the '-' would match in the string 'Fed - Ex delivers everyday'
```

### Back-references
Back references are used to match the same characters that were matched before by a capturing group and makes the regex reusable.


### Look-ahead and Look-behind
Look-ahead and Look-behind also called Look-around are used to capture values before a certain specified text

Examples:
```
/(?<=His name is).*/gm 'Robbie' would be matched in the string 'His name is Robbie'

/.*(?=is his name)/gm 'Adam would be matched in the string 'Adam is his name'

```


## Author

Robert Evans is a Fullstack Web Dev student currently enrolled in a coding bootcamp.

GH Profile:
https://github.com/Robcabobb
