class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const resp = await fetch(url);

  if (resp.status == 200) {
    const respJson = await resp.json();
    return respJson;
  }

  throw new HttpError(resp);
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//   let name = prompt('Введите логин?', 'iliakan');

//   while (HttpError) {
//     const userName = await loadJson(`https://api.github.com/users/${name}`);

//     if (userName != HttpError) {
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     }

//     alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
//     name = prompt('Введите логин?', 'iliakan');
//   }

// }

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('Введите логин?', 'iliakan');

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // ошибок не было, выходим из цикла
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // после alert начнётся новая итерация цикла
        alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
      } else {
        // неизвестная ошибка, пробрасываем её
        throw err;
      }
    }
  }

  alert(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();
