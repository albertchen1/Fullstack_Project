# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.delete_all
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

jim_user = User.create!(username: 'demo2@demo.com' , 
                   password: '123456', 
                   first_name: 'Jim', 
                   last_name:'Halpert', 
                   location: 'Greater New York City Area', 
                   headline: 'Top Salesman',
                   summary: "We didn't play many video games in Scranton. Instead we'd do stuff like.. uh, Pam and I would sometimes hum the same high pitched note and try to get Dwight to make an appointment with an ear doctor. And, uh, Pam called it... Pretendinitis."
)
michael_user = User.create!(username: 'demo3@demo.com' , 
                   password: '123456', 
                   first_name: 'Michael', 
                   last_name:'Scott', 
                   location: 'Scranton, PA', 
                   headline: 'Regional Manager at Dunder Mifflin',
                   summary: "I love inside jokes. I'd love to be a part of one someday."
)
dwight_user = User.create!(username: 'demo4@demo.com' , 
                   password: '123456', 
                   first_name: 'Dwight', 
                   last_name:'Schrute', 
                   location: 'Scranton, PA', 
                   headline: 'Assistant to the Regional Manager',
                   summary: "I'm somewhere between a snake and a mongoose."
)
pam_user = User.create!(username: 'demo5@demo.com' , 
                   password: '123456', 
                   first_name: 'Pam', 
                   last_name:'Beesly', 
                   location: 'Scranton, PA', 
                   headline: 'Receptionist',
                   summary: "I'm gonna start telling people what I want, directly."
)
kevin_user = User.create!(username: 'demo6@demo.com' , 
                   password: '123456', 
                   first_name: 'Kevin', 
                   last_name:'Malone', 
                   location: 'Scranton, PA', 
                   headline: 'Accountant',
                   summary: "Me think, why waste time say lot word, when few word do trick."
)
oscar_user = User.create!(username: 'demo7@demo.com' , 
                   password: '123456', 
                   first_name: 'Oscar', 
                   last_name:'Martinez', 
                   location: 'Scranton, PA', 
                   headline: 'Accountant',
                   summary: "Actually..."
)

angela_user = User.create!(username: 'demo8@demo.com' , 
                   password: '123456', 
                   first_name: 'Angela', 
                   last_name:'Martin', 
                   location: 'Scranton, PA', 
                   headline: 'Head of Accounting',
                   summary: "If you pray enough you can change yourself into a cat person."
)

stanley_user = User.create!(username: 'demo9@demo.com' , 
                   password: '123456', 
                   first_name: 'Stanley', 
                   last_name:'Hudson', 
                   location: 'Scranton, PA', 
                   headline: 'Sales Representative at Dunder Mifflin',
                   summary: "Did I stutter?!"
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
    field_study: 'Accountancy, minor in Statistics & Informatics',
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

connection2 = Connection.create!({
    user_id: User.find_by(username: 'demo@demo.com').id,
    recipient_id: User.find_by(username: 'demo7@demo.com').id
})

connection3 = Connection.create!({
    user_id: User.find_by(username: 'demo@demo.com').id,
    recipient_id: User.find_by(username: 'demo6@demo.com').id
})


connection4 = Connection.create!({
    user_id: User.find_by(username: 'demo@demo.com').id,
    recipient_id: User.find_by(username: 'demo8@demo.com').id
})

request1 = ConnectionRequest.create!({
    user_id: User.find_by(username: 'demo3@demo.com').id,
    recipient_id: User.find_by(username: 'demo@demo.com').id
})

request2 = ConnectionRequest.create!({
    user_id: User.find_by(username: 'demo4@demo.com').id,
    recipient_id: User.find_by(username: 'demo@demo.com').id
})

uiucpost = Post.create!({
    user_id: User.find_by(username: 'uiuc@demo.com').id,
    body: 'For the ninth time in the past 10 years, Illinois has been named among the U.S. colleges and universities that produce the most Fulbright U.S. Student Awards.'
})

shaqpost = Post.create!({
    user_id: User.find_by(username: 'shaq@demo.com').id,
    body: "I can't lie - if companies are doing video interviews via Zoom, I'm not sure I'll be able to find a job until this pandemic ends. \n \n My wife gave me a haircut last night, and I currently look like one of the players in Wii Tennis"
})

oscarpost = Post.create!({
    user_id: User.find_by(username: 'demo7@demo.com').id,
    body: "I consider myself a good person, but I'm going to make him cry."
})

jimpost = Post.create!({
    user_id: User.find_by(username: 'demo2@demo.com').id,
    body: "Stanley just drank OJ out of my mug and didn’t seem to realize that it wasn’t his hot coffee. So the question has to be asked, is there no limit to what he won’t notice?"
})

kevin = Post.create!({
    user_id: User.find_by(username: 'demo6@demo.com').id,
    body: "The only problem is whenever I try to make a taco, I get too excited and crush it."
})

pampost = Post.create!({
    user_id: User.find_by(username: 'demo5@demo.com').id,
    body: "I suggested we flip a coin, but Angela said she doesn't like to gamble."
})

stanleypost = Post.create!({
    user_id: User.find_by(username: 'demo9@demo.com').id,
    body: "It's like I used to tell my wife. I do not apologize unless I think I'm wrong, and if you don't like it, you can leave. And I say the same thing to my current wife, and I'll say it to my next one, too."
})

angelapost = Post.create!({
    user_id: User.find_by(username: 'demo8@demo.com').id,
    body: "I don't have a headache. I'm just preparing."
})

michaelpost = Post.create!({
    user_id: User.find_by(username: 'demo3@demo.com').id,
    body: "I am Beyonce always"
})

likemichaelpost = Like.create!({
    user_id: User.find_by(username: 'demo8@demo.com').id,
    post_id: Post.find_by(body: 'I am Beyonce always').id
})

pamcommentangelapost = Comment.create!({
    user_id: User.find_by(username: 'demo5@demo.com').id,
    post_id: Post.find_by(body: "I don't have a headache. I'm just preparing.").id,
    body: "Preparing with what?"
})

jimcommentkevinpost = Comment.create!({
    user_id: User.find_by(username: 'demo2@demo.com').id,
    post_id: Post.find_by(body: "The only problem is whenever I try to make a taco, I get too excited and crush it.").id,
    body: "Have you tried soft tacos?"
})

kevincommentkevinpost = Comment.create!({
    user_id: User.find_by(username: 'demo6@demo.com').id,
    post_id: Post.find_by(body: "The only problem is whenever I try to make a taco, I get too excited and crush it.").id,
    body: "You underestimate the strength of my hands."
})



michaelcommentoscarpost = Comment.create!({
    user_id: User.find_by(username: 'demo3@demo.com').id,
    post_id: Post.find_by(body: "I consider myself a good person, but I'm going to make him cry.").id,
    body: "Love is hard. Jan broke my heart."
})


