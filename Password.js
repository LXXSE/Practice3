let password = 'VBXBV-';

if (password.includes('-' || '_') && password.length > 3) {
    console.log('Пароль надёжный как швейцарские часы')
} else {
    console.log('Пароль недостаточно надёжный')
}