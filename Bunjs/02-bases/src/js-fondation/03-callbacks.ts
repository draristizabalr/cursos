const users: {id: number, name: string }[] = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
];

function getUserById( id: number, callback: Function ): Function {
  const user = users.find(function(user) {
    return user.id === id;
  });

  if (!user) {
    return callback(`User not found with id ${id}`, null);
  }

  return callback(null, user);
}

module.exports = {
  getUserById
}