# wrapInParagraph

Реализуйте функцию `wrapInParagraph`, которая принимает на вход текст, разделенный переносами строк 
и возвращает новый текст, в котором каждая строка обернута в тег `<p>`.

### Примеры использования:

```javascript
const text = `Some
simple multiline
text`;

wrapInParagraph(text); /* 
    <p>Some</p>
    <p>simple multiline</p>
    <p>text</p> 
*/

const text2 = 'some\ntext';

wrapInParagraph(text2); /* 
    <p>some</p>
    <p>text</p>
*/