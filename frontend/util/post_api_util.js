export const createPost = (post) => (
    $.ajax({
        method: "POST",
        url: "/api/posts",
        data: {
            post
        }
    })
)

export const fetchAllPosts = () => (
    $.ajax({
        method: "GET",
        url: "/api/posts",
    })
)


export const fetchPost = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/posts/${id}`,
    })
)

export const removePost = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/posts/${id}`,

    })
)