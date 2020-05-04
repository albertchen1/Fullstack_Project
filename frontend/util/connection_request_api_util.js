export const createRequest = (connection_request) => (
    $.ajax({
        method: "POST",
        url: "/api/connection_requests",
        data: {
            connection_request
        }
    })
)

export const fetchAllRequests = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/connection_requests/${id}`,
    })
)


// export const fetchComments = (id) => (
//     $.ajax({
//         method: "GET",
//         url: `/api/posts/${id}`,
//     })
// )

export const removeRequest = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/connection_requests/${id}`,
    })
)