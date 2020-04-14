export const createComment = (comment) => (
    $.ajax({
        method: "POST",
        url: "/api/comments",
        data: {
            comment
        }
    })
)

export const fetchAllComments = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/comments/${id}`,
    })
)


// export const fetchComments = (id) => (
//     $.ajax({
//         method: "GET",
//         url: `/api/posts/${id}`,
//     })
// )

export const removeComment = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/posts/${id}`,

    })
)