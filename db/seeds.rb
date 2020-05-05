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



demo = User.create!(username: 'demo@demo.com' , 
                   password: '123456', 
                   first_name: 'Albert', 
                   last_name:'Chen', 
                   location: 'San Francisco Bay Area', 
                   headline: 'Software Engineer | React | Redux | Ruby on Rails | JavaScript | Node.js | SQL | Python | Java',
                   summary: "I'm a software engineer with a passion for building products. I have experience with React, Redux, Ruby, Ruby on Rails, SQL, JavaScript, HTML5, CSS3, Node.js, Express.js, Python, and Java. My main projects right now are a MERN stack project creating custom memes and a React/Redux/Rails project rebuilding LinkedIn's site. Other frameworks and technologies I have experience with include Git, AJAX, RESTful API, JBuilder, jQuery, Heroku, AWS, and Ruby ERB."
)

shaq = User.create!(username: 'shaq@demo.com' , 
                   password: '123456', 
                   first_name: 'Shaquille', 
                   last_name: "O'Neal", 
                   location: 'United States', 
                   headline: 'Business mogul, Former athlete, Purveyor of fun',
                   summary: "I love chicken."
)

uiuc = User.create!(username: 'uiuc@demo.com' , 
                   password: '123456', 
                   first_name: 'University', 
                   last_name: "of Illinois at Urbana-Champaign", 
                   location: 'Champaign, IL', 
                   headline: '411,797 followers',
                   summary: "Learning is great."
)

demo2 = User.create!(username: 'demo2@demo.com' , 
                   password: '123456', 
                   first_name: 'Jim', 
                   last_name:'Halpert', 
                   location: 'Greater New York City Area', 
                   headline: 'Top Salesman',
                   summary: "We didn't play many video games in Scranton. Instead we'd do stuff like.. uh, Pam and I would sometimes hum the same high pitched note and try to get Dwight to make an appointment with an ear doctor. And, uh, Pam called it... Pretendinitis."
)
demo3 = User.create!(username: 'demo3@demo.com' , 
                   password: '123456', 
                   first_name: 'Michael', 
                   last_name:'Scott', 
                   location: 'Scranton, PA', 
                   headline: 'I am Beyonce always',
                   summary: "I love inside jokes. I'd love to be a part of one someday."
)
demo4 = User.create!(username: 'demo4@demo.com' , 
                   password: '123456', 
                   first_name: 'Dwight', 
                   last_name:'Schrute', 
                   location: 'Scranton, PA', 
                   headline: 'Assistant to the Regional Manager',
                   summary: "I'm somewhere between a snake and a mongoose."
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
education3 = Education.create!(
    school: "University of Illinois at Urbana-Champaign",
    degree: 'Bachelor of Science',
    field_study: 'Accountancy',
    start_year: 2013,
    end_year: 2016,
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

request2 = ConnectionRequest.create!({
    user_id: User.find_by(username: 'demo4@demo.com').id,
    recipient_id: User.find_by(username: 'demo@demo.com').id
})

shaqpost = Post.create!({
    user_id: User.find_by(username: 'shaq@demo.com').id,
    body: 'TESTING'
})

uiucpost = Post.create!({
    user_id: User.find_by(username: 'uiuc@demo.com').id,
    body: 'UIUC TESTING'
})



# about1 = About.create!({
#     summary: "I love coding"
# })
