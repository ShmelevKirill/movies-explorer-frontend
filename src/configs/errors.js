export const errors = {
  404: "404 Страница по указанному маршруту не найдена.",
  500: "500 На сервере произошла ошибка",
}

export const errorsRegister = {
  400: "При регистрации пользователя произошла ошибка.",
  409: "Пользователь с таким email уже существует.",
}

export const errorsLogin = {
  400: "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
  401: "Вы ввели неправильный логин или пароль.",
  403: "При авторизации произошла ошибка. Переданный токен некорректен.",
}

export const errorsUpdate = {
  400: "При обновлении профиля произошла ошибка.",
  409: "Пользователь с таким email уже существует.",
}