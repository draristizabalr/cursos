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

getUserByIdArrow = ( id, callback ) => {
  const user = users.find((user) => {
    return user.id === id;
  });

  console.log(callback);

  if (!user) {
    return callback(`User not found with id ${id}`, null);
  }

  return callback(null, user);
}

module.exports = {
  getUserByIdArrow
}