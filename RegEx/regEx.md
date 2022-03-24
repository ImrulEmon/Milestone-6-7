
Note	Description
MDN: Regular Expressions	MDN documentation for JavaScript regular expressions
/pat/	a RegExp object
const pet = /dog/	save regexp in a variable for reuse, clarity, etc
/pat/.test(s)	Check if given pattern is present anywhere in input string
returns true or false
i	flag to ignore case when matching alphabets
g	flag to match all occurrences
new RegExp('pat', 'i')	construct RegExp from a string
second argument specifies flags
use backtick strings with ${} for interpolation
source	property to convert RegExp object to string
helps to insert a RegExp inside another RegExp
flags	property to get flags of a RegExp object
s.replace(/pat/, 'repl')	method for search and replace
s.search(/pat/)	gives starting location of the match or -1
s.split(/pat/)	split a string based on regexp
Anchors	Description
^	restricts the match to start of string
$	restricts the match to end of string
m	flag to match the start/end of line with ^ and $ anchors
\r, \n, \u2028 and \u2029 are line separators
dos-style files use \r\n, may need special attention
\b	restricts the match to start/end of words
word characters: alphabets, digits, underscore
\B	matches wherever \b doesn't match
^, $ and \ are metacharacters in the above table, as these characters have special meaning. Prefix a \ character to remove the special meaning and match such characters literally. For example, \^ will match a ^ character instead of acting as an anchor.

Feature	Description
pat1|pat2|pat3	multiple regexp combined as OR conditional
each alternative can have independent anchors
(pat)	group pattern(s), also a capturing group
a(b|c)d	same as abd|acd
(?:pat)	non-capturing group
(?<name>pat)	named capture group
.	match any character except line separators
[]	Character class, matches one character among many
Greedy Quantifiers	Description
?	match 0 or 1 times
*	match 0 or more times
+	match 1 or more times
{m,n}	match m to n times
{m,}	match at least m times
{n}	match exactly n times
pat1.*pat2	any number of characters between pat1 and pat2
pat1.*pat2|pat2.*pat1	match both pat1 and pat2 in any order
Greedy here means that the above quantifiers will match as much as possible that'll also honor the overall regexp. Appending a ? to greedy quantifiers makes them non-greedy, i.e. match as minimally as possible. Quantifiers can be applied to literal characters, groups, backreferences and character classes.

Character class	Description
[ae;o]	match any of these characters once
[3-7]	range of characters from 3 to 7
[^=b2]	negated set, match other than = or b or 2
[a-z-]	- should be first/last or escaped using \ to match literally
[+^]	^ shouldn't be first character or escaped using \
[\]\\]	] and \ should be escaped using \
\w	similar to [A-Za-z0-9_] for matching word characters
\d	similar to [0-9] for matching digit characters
\s	similar to [ \t\n\r\f\v] for matching whitespace characters
use \W, \D, and \S for their opposites respectively
u	flag to enable unicode matching
\p{}	Unicode character sets
\P{}	negated unicode character sets
see MDN: Unicode property escapes for details
\u{}	specify unicode characters using codepoints
Lookarounds	Description
lookarounds	allows to create custom positive/negative assertions
zero-width like anchors and not part of matching portions
(?!pat)	negative lookahead assertion
(?<!pat)	negative lookbehind assertion
(?=pat)	positive lookahead assertion
(?<=pat)	positive lookbehind assertion
variable length lookbehind is allowed
(?!pat1)(?=pat2)	multiple assertions can be specified next to each other in any order
as they mark a matching location without consuming characters
((?!pat).)*	Negates a regexp pattern
Matched portion	Description
m = s.match(/pat/)	assuming g flag isn't used and regexp succeeds,
returns an array with matched portion and 3 properties
index property gives the starting location of the match
input property gives the input string s
groups property gives dictionary of named capture groups
m[0]	for above case, gives entire matched portion
m[N]	matched portion of Nth capture group
s.match(/pat/g)	returns only the matched portions, no properties
s.matchAll(/pat/g)	returns an iterator containing details for
each matched portion and its properties
Backreference	gives matched portion of Nth capture group
use $1, $2, $3, etc in replacement section
$& gives entire matched portion
$` gives string before the matched portion
$' gives string after the matched portion
use \1, \2, \3, etc within regexp definition
$$	insert $ literally in replacement section
$0N	same as $N, allows to separate backreference and other digits
\N\xhh	allows to separate backreference and digits in regexp definition
(?<name>pat)	named capture group
use \k<name> for backreferencing in regexp definition
use $<name> for backreferencing in replacement section