# merge

Реализуйте функцию `merge`, которая будет принимать неограниченное количество объектов в качестве аргументов 
и возвращать новый объект, который должен содержать все поля со всех объектов. 
Если ключи в объектах повторяются, то каждый последующий объект при совпадении ключей должен иметь бОльший приоритет над предыдущим. 
Порядок полей в результирующем объекте не важен.

### Пример:

```javascript
const result = merge(
    {
        name: "John",
        age: 22,
    },
    {
        surname: "Klein",
        age: 20,
        profession: "student",
    },
    {
        profession: "frontend developer",
        country: "USA",
    }
)

console.log(result); /*
{
  name: 'John',
  surname: 'Klein',
  age: 20,
  profession: 'frontend developer',
  country: 'USA',
}
*/
```
