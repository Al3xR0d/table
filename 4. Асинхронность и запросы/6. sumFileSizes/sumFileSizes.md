# sumFileSizes

Реализуйте функцию `sumFileSizes`, которая принимает имена двух файлов и вызывает функцию, переданную третьим параметром, передавая ей сумму размеров файлов в качестве аргумента.

Для получения размера файла необходимо использовать асинхронную функцию `getFileSize(filename, cb)`.

### Пример:

```javascript
const fileSizes = {
    testFile1: 100,
    testFile2: 200,
};

function getFileSize(filename, cb) {
    setTimeout(
        () => cb(fileSizes[filename]), 
        Math.random() * 500
    );
}

sumFileSizes('testFile1', 'testFile2', console.log); // 300
```