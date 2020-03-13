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

//just added but doesn't work?
export const fetchPost = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/posts/${id}`,
    })
)
