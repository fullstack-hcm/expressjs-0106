const infoUser = {
    username: 'abc',
    password: 'abc_password',
    password1: 'abc_password',
    password2: 'abc_password',
    id: 112
}

let usernameUser = infoUser['username'];
let usernameUser2 = infoUser['password'];
let usernameUser3 = infoUser['password1'];
let usernameUser4 = infoUser['password2'];

const { username, password, id: userID } = infoUser;
console.log({ username, password, userID})

const str1 = '1+1';
console.log(str1)
console.log(eval(str1))