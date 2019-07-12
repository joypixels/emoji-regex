'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rainbow_flag = /(?:\uD83C\uDFF3)\uFE0F?\u200D?(?:\uD83C\uDF08)/;

var black_flag = /(?:\uD83D\uDC41)\uFE0F?\u200D?(?:\uD83D\uDDE8)\uFE0F?/;

var keycaps = /[#-9]\uFE0F?\u20E3/;

var flags = /(?:(?:\uD83C\uDFF4)(?:\uDB40[\uDC60-\uDCFF]){1,6})|(?:\uD83C[\uDDE0-\uDDFF]){2}/;

var gendered_roles_with_objects = /(?:(?:\uD83D[\uDC68\uDC69]))\uFE0F?(?:\uD83C[\uDFFA-\uDFFF])?\u200D?(?:[\u2695\u2696\u2708]|\uD83C[\uDF3E-\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])/;

var unicode_10 = /(?:\uD83D[\uDC68\uDC69]|\uD83E[\uDDD0-\uDDDF])(?:\uD83C[\uDFFA-\uDFFF])?\u200D?[\u2640\u2642\u2695\u2696\u2708]?\uFE0F?/;

var unicode_11 = ''; //;

//var families = /(?:[\u{2764}\u{1F466}-\u{1F469}\u{1F48B}][\u{200D}\u{FE0F}]{0,2}){1,3}[\u{2764}\u{1F466}-\u{1F469}\u{1F48B}]|(?:[\u{2764}\u{1F466}-\u{1F469}\u{1F48B}]\u{FE0F}?){2,4}/u;
var families = /(?:(?:\u2764|\uD83D[\uDC66-\uDC69\uDC8B])[\u200D\uFE0F]{0,2})|(?:\u2764|\uD83D[\uDC66-\uDC69\uDC8B])|(?:(?:\u2764|\uD83D[\uDC66-\uDC69\uDC8B])\uFE0F?)/;

var modifier_sequence = /(?:(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85-\uDFCC]|\uD83D[\uDC42-\uDCAA\uDD74-\uDD96\uDE45-\uDE4F\uDEA3-\uDECC]|\uD83E[\uDD18-\uDD3E])\uFE0F?(?:\uD83C[\uDFFA-\uDFFF]))/;

var gendered_gestures = /(?:(?:\uD83D[\uDC68\uDC69\uDC6E\uDC71-\uDC87\uDD75\uDE45-\uDE4E]|\uD83E[\uDD26\uDD37])|(?:\u26F9|\uD83C[\uDFC3-\uDFCC]|\uD83D[\uDC60-\uDC82\uDC86\uDC87\uDEA3-\uDEB6]|\uD83E[\uDD38-\uDD3E])|(?:\uD83D\uDC6F))\uFE0F?(?:\uD83C[\uDFFA-\uDFFF])?\u200D?[\u2640\u2642]?\uFE0F?/;

var other = /(?:[\u2194-\u2199\u21A9\u21AA]\uFE0F?|[#-\*]|[\u3030\u303D]\uFE0F?|(?:(?:\uD83C[\uDD70\uDD71])|(?:\uD83C[\uDD7E\uDD7F])|(?:\uD83C\uDD8E)|(?:\uD83C[\uDD91-\uDD9A])|(?:\uD83C[\uDDE6-\uDDFF]))\uFE0F?|\u24C2\uFE0F?|[\u3297\u3299]\uFE0F?|(?:(?:\uD83C[\uDE01\uDE02])|(?:\uD83C\uDE1A)|(?:\uD83C\uDE2F)|(?:\uD83C[\uDE32-\uDE3A])|(?:\uD83C[\uDE50\uDE51]))\uFE0F?|[\u203C\u2049]\uFE0F?|[\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE]\uFE0F?|[\xA9\xAE]\uFE0F?|[\u2122\u2139]\uFE0F?|(?:\uD83C\uDC04)\uFE0F?|[\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55]\uFE0F?|[\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA]\uFE0F?|(?:\uD83C\uDCCF)|[\u2934\u2935]\uFE0F?)/;

var digits = /[0-9]\uFE0F/;
var dingbats = /[\u2700-\u27BF]\uFE0F?/;
var emoticons = /(?:\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDEFF]|\uD83E[\uDD00-\uDDFF])\uFE0F?/;
var symbols = /[\u2600-\u26FF]\uFE0F?/;

var regex = exports.regex = rainbow_flag.source + '|' + black_flag.source + '|' + keycaps.source + '|' + flags.source + '|' + gendered_roles_with_objects.source + '|' + unicode_10.source + '|' + families.source + '|' + gendered_gestures.source + '|' + modifier_sequence.source + '|' + other.source + '|' + dingbats.source + '|' + emoticons.source + '|' + symbols.source + '|' + digits.source;
