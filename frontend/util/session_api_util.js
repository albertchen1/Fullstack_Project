export const signup = (formUser) => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: {
            user: formUser
        }
    })
)

export const fetchAllUsers = () => (
    $.ajax({
        method: "GET",
        url: "/api/users"
    })
)

export const fetchUser = (userId) => {
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
}

export const login = (formUser) => (
    $.ajax({
        method: "POST",
        url: "/api/session",
        data: {
            user: formUser
        }
    })
)

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
)