// Получить пользователей
function getUsers() {
    var users = localStorage.getItem('users');
    if (!users) return [];
    return JSON.parse(users);
}

// Сохранить пользователя
function saveUser(user) {
    var users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

// Найти пользователя
function findUser(login) {
    var users = getUsers();
    for (var i = 0; i < users.length; i++) {
        if (users[i].login === login) return users[i];
    }
    return null;
}

// Текущий пользователь
function getCurrentUser() {
    var user = sessionStorage.getItem('currentUser');
    if (!user) return null;
    return JSON.parse(user);
}

function setCurrentUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
}

function logout() {
    sessionStorage.removeItem('currentUser');
}

// Заявки
function getApplications() {
    var apps = localStorage.getItem('applications');
    if (!apps) return [];
    return JSON.parse(apps);
}

function saveApplication(app) {
    var apps = getApplications();
    apps.push(app);
    localStorage.setItem('applications', JSON.stringify(apps));
}

function getUserApplications(userId) {
    var apps = getApplications();
    var result = [];
    for (var i = 0; i < apps.length; i++) {
        if (apps[i].user_id === userId) result.push(apps[i]);
    }
    return result;
}

function updateStatus(appId, status) {
    var apps = getApplications();
    for (var i = 0; i < apps.length; i++) {
        if (apps[i].id === appId) {
            apps[i].status = status;
            break;
        }
    }
    localStorage.setItem('applications', JSON.stringify(apps));
}

// Отзывы
function getReviews() {
    var reviews = localStorage.getItem('reviews');
    if (!reviews) return [];
    return JSON.parse(reviews);
}

function saveReview(review) {
    var reviews = getReviews();
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function getReviewByApp(appId) {
    var reviews = getReviews();
    for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].application_id === appId) return reviews[i];
    }
    return null;
}

// Создать админа
var users = getUsers();
var hasAdmin = false;
for (var i = 0; i < users.length; i++) {
    if (users[i].login === 'Admin') {
        hasAdmin = true;
        break;
    }
}
if (!hasAdmin) {
    saveUser({
        id: 1,
        login: 'Admin',
        password: 'KorokNET',
        fio: 'Администратор',
        phone: '8(999)999-99-99',
        email: 'admin@korokki.ru'
    });
}
