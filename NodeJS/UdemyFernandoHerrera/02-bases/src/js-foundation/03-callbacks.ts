const users = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
];

export function getUserById( id: number, callback: Function ) {
  const user = users.find(function(user) {
    return user.id === id;
  });

  if (!user) {
    return setTimeout(() => {
      callback(`User not found with id ${id}`, null);
    }, 1000);
  }

  return callback(null, user);
}