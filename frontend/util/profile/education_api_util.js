export const createEducation = (education) => (
    $.ajax({
        method: "POST",
        url: "/api/educations",
        data: {
            education
        }
    })
)

export const fetchEducation = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/educations/${userId}`,
    })
)


// export const fetchAllEducations = () => (
//     $.ajax({
//         method: "GET",
//         url: `/api/education/`,
//     })
// )
export const updateEducation = (education) => (
    $.ajax({
        method: "PATCH",
        url: `/api/educations/${education.id}`,
        data: {
            education
        }
    })
)
export const deleteEducation = (educationId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/educations/${educationId}`,
    })
)