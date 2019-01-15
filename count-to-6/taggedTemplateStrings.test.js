var taggedTemplateStrings = require('./taggedTemplateStrings')

var toEqualArray = [
    ['Should return value after conversions',
     [['<b>','says</b>: "','"'],'JOHN','<script>alert(\'pwned!\')</script>'],
     '<b>JOHNsays</b>: \"&lt;script&gt;alert(&apos;pwned!&apos;)&lt;/script&gt;\"']
]
var notToEqualArray = [
    ['Should not return nested conversions for "&"',
     [['<b>','says</b>: "','"'],'JOHN','<script>alert(\'pwned!\')</script>'],
     '<b>JOHNsays</b>: \"&amp;lt;script&amp;gt;alert(&apos;pwned!&apos;)&lt;/script&gt;\"']
];

describe('Tagged Template String',()=>{
    toEqualArray.forEach((i)=>{
        it(i[0],()=>{
            expect(taggedTemplateStrings(...i[1])).toEqual(i[2]);
        })
    })
    notToEqualArray.forEach((i)=>{
        it(i[0],()=>{
            expect(taggedTemplateStrings(...i[1])).not.toEqual(i[2]);
        })
    })
})