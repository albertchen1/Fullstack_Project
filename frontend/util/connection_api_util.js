export const createConnection = (connection) => (
    $.ajax({
        method: "POST",
        url: "/api/connections",
        data: {
            connection
        }
    })
)

export const fetchAllConnections = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/connections/${id}`,
    })
)


// export const fetchComments = (id) => (
//     $.ajax({
//         method: "GET",
//         url: `/api/posts/${id}`,
//     })
// )

// export const removeRequest = (id) => (
//     $.ajax({
//         method: "DELETE",
//         url: `/api/connection_requests/${id}`,
//     })
// )