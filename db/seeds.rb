# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Experience.delete_all
Comment.delete_all
Post.delete_all
Education.delete_all
User.delete_all

#User

demo = User.create!(username: 'demo@demo.com' , 
                   password: '123456', 
                   first_name: 'Albert', 
                   last_name:'Chen', 
                   location: 'San Francisco Bay Area', 
                   headline: 'Software Engineer',
                   summary: "I'm a software engineer with a passion for building products. I have experience with React, Redux, Ruby, Ruby on Rails, SQL, JavaScript, HTML5, CSS3, Node.js, Express.js, Python, and Java. My main projects right now are a MERN stack project creating custom memes and a React/Redux/Rails project rebuilding LinkedIn's site. Other frameworks and technologies I have experience with include Git, AJAX, RESTful API, JBuilder, jQuery, Heroku, AWS, and Ruby ERB."


)

education1 = Education.create!(
    school: "App Academy",
    degree: 'Certificate',
    field_study: 'Software Engineering',
    gpa: 4.0,
    start_year: 2019,
    end_year: 2020,
    description: 'Cool',
    user_id: User.find_by(username: 'demo@demo.com').id
)

experience1 = Experience.create!({
    title: "Teacher",
    company: "aA",
    location: 'San Francisco',
    start_date_month: 'Jan',
    start_date_year: 2000, 
    end_date_month: 'Dec', 
    end_date_year: 2010,
    user_id: User.find_by(username: 'demo@demo.com').id
})
