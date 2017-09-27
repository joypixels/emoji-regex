var rainbow_flag = /\u{1F3F3}\u{FE0F}?\u{200D}?\u{1F308}/u;

var black_flag = /\u{1F441}\u{FE0F}?\u{200D}?\u{1F5E8}\u{FE0F}?/u;

var keycaps = /[\u{0023}-\u{0039}]\u{FE0F}?\u{20e3}/u;

var flags = /(?:\u{1F3F4}[\u{E0060}-\u{E00FF}]{1,6})|[\u{1F1E0}-\u{1F1FF}]{2}/u;

var gendered_roles_with_objects = /(?:[\u{1F468}\u{1F469}])\u{FE0F}?[\u{1F3FA}-\u{1F3FF}]?\u{200D}?[\u{2695}\u{2696}\u{2708}\u{1F4BB}\u{1F4BC}\u{1F527}\u{1F52C}\u{1F680}\u{1F692}\u{1F33E}-\u{1F3ED}]/u;

var unicode_10 = /[\u{1F468}-\u{1F469}\u{1F9D0}-\u{1F9DF}][\u{1F3FA}-\u{1F3FF}]?\u{200D}?[\u2640\u2642\u2695\u2696\u2708]?\u{FE0F}?/u;

var families = /(?:[\u{2764}\u{1F466}-\u{1F469}\u{1F48B}][\u{200D}\u{FE0F}]{0,2}){1,3}[\u{2764}\u{1F466}-\u{1F469}\u{1F48B}]|(?:[\u{2764}\u{1F466}-\u{1F469}\u{1F48B}]\u{FE0F}?){2,4}/u;

var modifier_sequence = /(?:[\u{26F9}\u{261D}\u{270A}-\u{270D}\u{1F385}-\u{1F3CC}\u{1F442}-\u{1F4AA}\u{1F574}-\u{1F596}\u{1F645}-\u{1F64F}\u{1F6A3}-\u{1F6CC}\u{1F918}-\u{1F93E}]\u{FE0F}?[\u{1F3FA}-\u{1F3FF}])/u;

var gendered_gestures = /(?:[\u{1f46e}\u{1F468}\u{1F469}\u{1f575}\u{1f471}-\u{1f487}\u{1F645}-\u{1F64E}\u{1F926}\u{1F937}]|[\u{1F460}-\u{1F482}\u{1F3C3}-\u{1F3CC}\u{26F9}\u{1F486}\u{1F487}\u{1F6A3}-\u{1F6B6}\u{1F938}-\u{1F93E}]|\u{1F46F})\u{FE0F}?[\u{1F3FA}-\u{1F3FF}]?\u{200D}?[\u{2640}\u{2642}]?\u{FE0F}?/u;

var other = /(?:[\u{2194}-\u{2199}\u{21a9}-\u{21aa}]\u{FE0F}?|[\u{0023}-\u{002a}]|[\u{3030}\u{303d}]\u{FE0F}?|(?:[\u{1F170}-\u{1F171}]|[\u{1F17E}-\u{1F17F}]|\u{1F18E}|[\u{1F191}-\u{1F19A}]|[\u{1F1E6}-\u{1F1FF}])\u{FE0F}?|\u{24c2}\u{FE0F}?|[\u{3297}\u{3299}]\u{FE0F}?|(?:[\u{1F201}-\u{1F202}]|\u{1F21A}|\u{1F22F}|[\u{1F232}-\u{1F23A}]|[\u{1F250}-\u{1F251}])\u{FE0F}?|[\u{203c}\u{2049}]\u{FE0F}?|[\u{25aa}-\u{25ab}\u{25b6}\u{25c0}\u{25fb}-\u{25fe}]\u{FE0F}?|[\u{00a9}\u{00ae}]\u{FE0F}?|[\u{2122}\u{2139}]\u{FE0F}?|\u{1F004}\u{FE0F}?|[\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{2b50}\u{2b55}]\u{FE0F}?|[\u{231a}-\u{231b}\u{2328}\u{23cf}\u{23e9}-\u{23f3}\u{23f8}-\u{23fa}]\u{FE0F}?|\u{1F0CF}|[\u{2934}\u{2935}]\u{FE0F}?)/u;

var digits = /[\u{0030}-\u{0039}]\u{FE0F}/u;
var dingbats = /[\u{2700}-\u{27bf}]\u{FE0F}?/u;
var emoticons = /[\u{1F000}-\u{1F6FF}\u{1F900}-\u{1F9FF}]\u{FE0F}?/u;
var symbols = /[\u{2600}-\u{26ff}]\u{FE0F}?/u;

export const regex = rainbow_flag.source + '|' + black_flag.source + '|' + keycaps.source + '|' + flags.source + '|' + gendered_roles_with_objects.source + '|' + unicode_10.source + '|' + families.source + '|' + gendered_gestures.source + '|' + modifier_sequence.source + '|' + other.source + '|' + dingbats.source + '|' + emoticons.source + '|' + symbols.source + '|' + digits.source;


