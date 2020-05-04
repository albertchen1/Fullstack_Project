# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Connection.delete_all
ConnectionRequest.delete_all
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
                   headline: 'Software Engineer | React | Redux | Ruby on Rails | JavaScript | Node.js | SQL | Python | Java',
                   summary: "I'm a software engineer with a passion for building products. I have experience with React, Redux, Ruby, Ruby on Rails, SQL, JavaScript, HTML5, CSS3, Node.js, Express.js, Python, and Java. My main projects right now are a MERN stack project creating custom memes and a React/Redux/Rails project rebuilding LinkedIn's site. Other frameworks and technologies I have experience with include Git, AJAX, RESTful API, JBuilder, jQuery, Heroku, AWS, and Ruby ERB."


)
demo2 = User.create!(username: 'demo2@demo.com' , 
                   password: '123456', 
                   first_name: 'Albert2', 
                   last_name:'Chen', 
                   location: 'San Francisco Bay Area2', 
                   headline: 'Software Engineer | React | Redux | Ruby on Rails | JavaScript | Node.js | SQL | Python | Java',
                   summary: "I'm a software engineer with a passion for building products. I have experience with React, Redux, Ruby, Ruby on Rails, SQL, JavaScript, HTML5, CSS3, Node.js, Express.js, Python, and Java. My main projects right now are a MERN stack project creating custom memes and a React/Redux/Rails project rebuilding LinkedIn's site. Other frameworks and technologies I have experience with include Git, AJAX, RESTful API, JBuilder, jQuery, Heroku, AWS, and Ruby ERB."


)
demo3 = User.create!(username: 'demo3@demo.com' , 
                   password: '123456', 
                   first_name: 'Steve', 
                   last_name:'Carell', 
                   location: 'San Francisco Bay Area2', 
                   headline: 'Software Engineer | React | Redux | Ruby on Rails | JavaScript | Node.js | SQL | Python | Java',
                   summary: "I'm a software engineer with a passion for building products. I have experience with React, Redux, Ruby, Ruby on Rails, SQL, JavaScript, HTML5, CSS3, Node.js, Express.js, Python, and Java. My main projects right now are a MERN stack project creating custom memes and a React/Redux/Rails project rebuilding LinkedIn's site. Other frameworks and technologies I have experience with include Git, AJAX, RESTful API, JBuilder, jQuery, Heroku, AWS, and Ruby ERB."


)

education1 = Education.create!(
    school: "App Academy",
    degree: 'Certificate',
    field_study: 'Software Engineering',
    gpa: 4.0,
    start_year: 2019,
    end_year: 2020,
    description: 'Most selective coding bootcamp, <3% acceptance rate, intensive 1000 hours full-stack development',
    user_id: User.find_by(username: 'demo@demo.com').id
)

education2 = Education.create!(
    school: "University of Illinois at Urbana-Champaign",
    degree: 'Master of Science',
    field_study: 'Accountancy',
    start_year: 2017,
    end_year: 2018,
    user_id: User.find_by(username: 'demo@demo.com').id
)

experience1 = Experience.create!({
    title: "Business Intelligence Analyst - Tax Technology & Transformation",
    company: "Ernst & Young",
    location: 'San Francisco Bay Area',
    start_date_month: 'Sep',
    start_date_year: 2018, 
    end_date_month: 'Oct', 
    end_date_year: 2019,
    description: '',
    user_id: User.find_by(username: 'demo@demo.com').id
})

connection1 = Connection.create!({
    user_id: User.find_by(username: 'demo@demo.com').id,
    recipient_id: User.find_by(username: 'demo2@demo.com').id
})
request1 = ConnectionRequest.create!({
    user_id: User.find_by(username: 'demo3@demo.com').id,
    recipient_id: User.find_by(username: 'demo@demo.com').id
})

# about1 = About.create!({
#     summary: "I love coding"
# })
