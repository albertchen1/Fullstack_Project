export const createLike = (like) => (
    $.ajax({
        method: "POST",
        url: "/api/likes",
        data: {
            like
        }
    })
)

// export const fetchAllComments = (id) => (
//     $.ajax({
//         method: "GET",
//         url: `/api/comments/${id}`,
//     })
// )


// export const fetchComments = (id) => (
//     $.ajax({
//         method: "GET",
//         url: `/api/posts/${id}`,
//     })
// )

export const removeComment = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/likes/${id}`,

    })
)