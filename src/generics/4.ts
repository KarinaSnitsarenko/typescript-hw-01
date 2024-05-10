type User2 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User2>) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user2@gmail.com",
  password: "password2",
});
