function showUser(id) {
    if (id < 0) {
        throw new Error("ID must not be negative: " + id);
    }

    const user = {
        id: id,
        name: "Ім'я користувача",

    };

    return user;
}

function showUsers(ids) {
    const users = [];

    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];

        try {
            const user = showUser(id);
            users.push(user);
        } catch (error) {
            console.error(error.message);
        }
    }

    return users;
}