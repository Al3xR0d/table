import { useEffect, useState } from 'react';
import './App.css';

interface User {
  id: string;
  name: string;
  surname: string;
  birthday: Date;
  isAdmin?: boolean;
  salary?: number;
  hobbies: string[];
}

interface SortState {
  type: Sort;
  header: keyof User;
}

enum Sort {
  ASC,
  DESC,
}

type Column = {
  key: keyof User;
  label: string;
};

const mockGetUsersList = (): Promise<User[]> => {
  return new Promise((res) => {
    setTimeout(
      () =>
        res([
          {
            id: '1',
            name: 'Ivan',
            surname: 'Pankratov',
            birthday: new Date('1996-09-24'),
            isAdmin: true,
            salary: 100500,
            hobbies: ['Guitar', 'Travel', 'Boardgames'],
          },
          {
            id: '2',
            name: 'Kostya',
            surname: 'Arkhipov',
            birthday: new Date('1996-06-24'),
            isAdmin: true,
            salary: 100499,
            hobbies: ['Snus', 'Walking with a dog'],
          },
          {
            id: '3',
            name: 'Liza',
            surname: 'Dunaeva',
            birthday: new Date('1996-07-03'),
            hobbies: ['K-Pop', 'Cats'],
          },
          {
            id: '4',
            name: 'Viktor',
            surname: 'Barzh',
            birthday: new Date('2001-12-08'),
            salary: 100000,
            hobbies: ['Crypto', 'Ping-pong', 'Music'],
          },
          {
            id: '5',
            name: 'Alex',
            surname: 'Rodionov',
            birthday: new Date('1993-03-09'),
            hobbies: ['Boardgames', 'Metall music'],
          },
          {
            id: '6',
            name: 'Alexandra',
            surname: 'Nikorovskaya',
            birthday: new Date('1991-05-22'),
            hobbies: ['Piano', 'Singing', 'Sea'],
          },
        ]),
      Math.random()
    );
  });
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    mockGetUsersList().then(setUsers);
  }, []);

  const [sort, setSort] = useState<SortState | null>(null);

  const getArrow = () => {
    return sort?.type === Sort.ASC ? <>↑</> : <>↓</>;
  };

  const columns = users.length > 0 ? (Object.keys(users[0]) as (keyof User)[]) : [];

  const header = columns.map((col) => {
    return (
      <th
        key={col}
        className="cell"
        onClick={() => {
          setSort((prev) => {
            let newType: Sort;
            if (!prev || col !== prev.header) {
              newType = Sort.ASC;
            } else if (prev.type === Sort.ASC) {
              newType = Sort.DESC;
            } else if (prev.type === Sort.DESC) {
              return null;
            } else {
              return prev;
            }
            return {
              type: newType,
              header: col,
            };
          });
        }}
      >
        {defaultColumnNames[col]} {sort && col === sort.header && getArrow()}
      </th>
    );
  });

  function renderCell(item: User[keyof User], el: keyof User) {
    if (item instanceof Date) {
      return item.toLocaleDateString();
    } else if (item instanceof Array) {
      return item.join(', ');
    } else if (el === 'isAdmin') {
      return <input type="checkbox" checked={!!item} disabled />;
    } else {
      return item;
    }
  }

  const data = useSorted(users, sort);

  const personalInfo = data.map((user) => (
    <tr key={user.id} className={user.salary ? undefined : 'withoutSalary'}>
      {columns.map((col: keyof User) => (
        <td key={col} className="cell">
          {renderCell(user[col], col)}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody>{personalInfo}</tbody>
      </table>
    </div>
  );
}

function useSorted(users: User[], sort: SortState | null): User[] {
  return [...users].sort((a, b) => {
    if (sort) {
      const aValue: User[keyof User] = a[sort.header];
      const bValue: User[keyof User] = b[sort.header];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sort.type === Sort.ASC ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sort.type === Sort.ASC ? aValue - bValue : bValue - aValue;
      } else if (aValue instanceof Date && bValue instanceof Date) {
        return sort.type === Sort.ASC ? aValue.getTime() - bValue.getTime() : bValue.getTime() - aValue.getTime();
      } else if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        if (aValue === bValue) return 0;
        return sort.type === Sort.ASC ? (aValue ? 1 : -1) : aValue ? -1 : 1;
      } else if (Array.isArray(aValue) && Array.isArray(bValue)) {
        const aStr = aValue.join(', ');
        const bStr = bValue.join(', ');
        return sort.type === Sort.ASC ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
      } else if (aValue === null || aValue === undefined) {
        return 1;
      } else if (bValue === null || bValue === undefined) {
        return -1;
      } else {
        return 0;
      }
    }

    if (a.salary && !b.salary) {
      return -1;
    } else if (!a.salary && b.salary) {
      return 1;
    } else if (a.salary && b.salary) {
      return 0;
    } else return 1;
  });
}

const defaultColumnNames: Record<string, string> = {
  id: 'Порядковый номер',
  name: 'Имя',
  surname: 'Фамилия',
  birthday: 'Дата рождения',
  isAdmin: 'Админ',
  salary: 'Зарплата',
  hobbies: 'Хобби',
};

// const columns: Column[] = [
//   { key: 'id', label: 'порядковый номер' },
//   { key: 'name', label: 'имя' },
//   { key: 'surname', label: 'фамилия' },
//   { key: 'birthday', label: 'дата рождения' },
//   { key: 'isAdmin', label: 'админ' },
//   { key: 'salary', label: 'зарплата' },
//   { key: 'hobbies', label: 'хобби' },
// ];
