<?php

$regex = [];

$regex['special'] = '(?:' .
# 1F3F3 FE0F 200D 1F308 ; rainbow flag
    '\x{1F3F3}' . '\x{FE0F}?' . '\x{200D}?' . '\x{1F308}' . '|' .
# 1F441 FE0F 200D 1F5E8 FE0F ; eye in speech bubble
    '\x{1F441}' . '\x{FE0F}?' . '\x{200D}?' . '\x{1F5E8}' . '\x{FE0F}?' . # Black Flag
    ')';

$regex['flags'] = '(?:\x{1F3F4}[\x{E0060}-\x{E00FF}]{1,6})' . '|' . '[' . '\x{1F1E0}' . '-' . '\x{1F1FF}' . ']' . '{2}';

$regex['keycaps'] = '[\x{0023}-\x{0039}]' . '\x{FE0F}?' . '\x{20e3}';

$regex['gendered_roles_with_objects'] = '(?:' .
    '[' . '\x{1F468}\x{1F469}' . ']' .
    ')' .
    '\x{FE0F}?' .
    // skin tone modifiers
    '[' . '\x{1F3FA}-\x{1F3FF}' . ']' . '?' .
    '\x{200D}?' .
    '(?:' .
    '[' .
    '\x{2695}' .
    '\x{2696}' .
    '\x{2708}' .
    '\x{1F4BB}' .
    '\x{1F4BC}' .
    '\x{1F527}' .
    '\x{1F52C}' .
    '\x{1F680}' .
    '\x{1F692}' .
    '\x{1F33E}-\x{1F3ED}' .
    ']' .
    ')';

$regex['unicode_10'] = '[\x{1F468}-\x{1F469}\x{1F9D0}-\x{1F9DF}][\x{1F3FA}-\x{1F3FF}]?\x{200D}?[\x{2640}\x{2642}\x{2695}\x{2696}\x{2708}]?\x{FE0F}?';

$regex['families'] = '(?:' .
    '[\x{2764}\x{1F466}-\x{1F469}\x{1F48B}]' .
    '[\x{200D}\x{FE0F}]{0,2}' .
    ')' .
    '{1,3}' .
    '[\x{2764}\x{1F466}-\x{1F469}\x{1F48B}]' .
    '|' .
    '(?:' .
    '[\x{2764}\x{1F466}-\x{1F469}\x{1F48B}]' .
    '\x{FE0F}?' .
    '){2,4}';

$regex['gendered_gestures'] = '(?:' .
    '[\x{1f46e}\x{1F468}\x{1F469}\x{1f575}\x{1f471}-\x{1f487}\x{1F645}-\x{1F64E}\x{1F926}\x{1F937}]' . '|' .
    '[\x{1F460}-\x{1F482}\x{1F3C3}-\x{1F3CC}\x{26F9}\x{1F486}\x{1F487}\x{1F6A3}-\x{1F6B6}\x{1F938}-\x{1F93E}]' . '|' .
    '\x{1F46F}' .
    ')' .
    '\x{FE0F}?' .
    '[\x{1F3FA}-\x{1F3FF}]?' .
    '\x{200D}?' .
    '[\x{2640}\x{2642}]?' .
    '\x{FE0F}?';

$regex['modifier_sequence'] = '(?:' .
    '[' .
    '\x{26F9}' . '\x{261D}' .
    '\x{270A}-\x{270D}' .
    '\x{1F385}-\x{1F3CC}' .
    '\x{1F442}-\x{1F4AA}' .
    '\x{1F574}-\x{1F596}' .
    '\x{1F645}-\x{1F64F}' .
    '\x{1F6A3}-\x{1F6CC}' .
    '\x{1F918}-\x{1F93E}' .
    ']' .
    '\x{FE0F}?' .
    // skin tone modifiers
    '[\x{1F3FA}-\x{1F3FF}]' .
    ')';

$regex['other'] = '(?:' .
    # Arrows (8 codepoints considered emoji),
    '[' . '\x{2194}-\x{2199}' . '\x{21a9}-\x{21aa}' . ']' . '\x{FE0F}?' . '|' .
    # Basic Latin (12)
    '[\x{0023}-\x{002a}]' . '|' .
    # CJK Symbols and Punctuation (2)
    '[\x{3030}\x{303d}]' . '\x{FE0F}?' . '|' .
    # Enclosed Alphanumeric Supplement (41)
    '(?:' .
    '[\x{1F170}-\x{1F171}]' . '|' .
    '[\x{1F17E}-\x{1F17F}]' . '|' .
    '\x{1F18E}' . '|' .
    '[\x{1F191}-\x{1F19A}]' . '|' .
    '[\x{1F1E6}-\x{1F1FF}]' .
    ')' . '\x{FE0F}?' . '|' .
    # Enclosed Alphanumerics (1),
    '\x{24c2}' . '\x{FE0F}?' . '|' .
    # Enclosed CJK Letters and Months (2)
    '[\x{3297}\x{3299}]' . '\x{FE0F}?' . '|' .
    # Enclosed Ideographic Supplement (15)
    '(?:' .
    '[\x{1F201}-\x{1F202}]' . '|' .
    '\x{1F21A}' . '|' .
    '\x{1F22F}' . '|' .
    '[\x{1F232}-\x{1F23A}]' . '|' .
    '[\x{1F250}-\x{1F251}]' .
    ')' . '\x{FE0F}?' . '|' .
    # General Punctuation (2)
    '[\x{203c}\x{2049}]' . '\x{FE0F}?' . '|' .
    # Geometric Shapes (8)
    '[' . '\x{25aa}-\x{25ab}' . '\x{25b6}\x{25c0}' . '\x{25fb}-\x{25fe}' . ']' .
    '\x{FE0F}?' . '|' .
    # Latin-1 Supplement (2)
    '[\x{00a9}\x{00ae}]' . '\x{FE0F}?' . '|' .
    # Letterlike Symbols (2)
    '[\x{2122}\x{2139}]' . '\x{FE0F}?' . '|' .
    # Mahjong Tiles (1)
    '\x{1F004}' . '\x{FE0F}?' . '|' .
    # Miscellaneous Symbols and Arrows (7)
    '[' . '\x{2b05}-\x{2b07}' . '\x{2b1b}-\x{2b1c}' . '\x{2b50}' . '\x{2b55}' . ']' .
    '\x{FE0F}?' . '|' .
    # Miscellaneous Technical (18)
    '[' .
    '\x{231a}-\x{231b}' .
    '\x{2328}' .
    '\x{23cf}' .
    '\x{23e9}-\x{23f3}' .
    '\x{23f8}-\x{23fa}' . ']' . '\x{FE0F}?' . '|' .
    # Playing Cards (1)
    '\x{1F0CF}' . '|' .
    # and Supplemental Arrows-B (2)
    '[\x{2934}\x{2935}]' . '\x{FE0F}?' .
    ')';

$regex['digits'] = '[\x{0030}-\x{0039}]\x{FE0F}';
$regex['dingbats'] = '[\x{2700}-\x{27bf}]' . '\x{FE0F}?';
$regex['emoticons'] = '[\x{1F000}-\x{1F6FF}\x{1F900}-\x{1F9FF}]' . '\x{FE0F}?';
$regex['symbols'] = '[\x{2600}-\x{26ff}]' . '\x{FE0F}?';


foreach ($regex AS $key => $val) {
    print '# ' . $key . "\n" . $val . "\n\n\n";
}

$regex = $regex['special'] . '|' .
    $regex['keycaps'] . '|' .
    $regex['flags'] . '|' .
    $regex['gendered_roles_with_objects'] . '|' .
    $regex['unicode_10'] . '|' .
    $regex['families'] . '|' .
    $regex['gendered_gestures'] . '|' .
    $regex['modifier_sequence'] . '|' .
    $regex['other'] . '|' .
    $regex['dingbats'] . '|' .
    $regex['emoticons'] . '|' .
    $regex['symbols'] . '|' .
    $regex['digits'];

print $regex;