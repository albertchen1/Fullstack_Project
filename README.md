# Production README

LinkedList is a clone of professional networking site LinkedIn. Users can edit their profile, view other profiles, and add connections. In their news feed, they can create posts as well as interact with other posts by liking or leaving comments on posts. 

Link to live Heroku app: [Live Link](https://linkedlist-connect.herokuapp.com/)

![splash](https://i.imgur.com/puakGsf.png)

## Technologies
### Front end
* React and Redux for rendering and state management
### Back end
* Ruby on Rails framework
* PostgreSQL for database
* Amazon Web Services S3 for user-uploaded images
### Others
* Heroku for hosting

## Features
#### Login/Signup
* User can create an account to sign up or login with existing accounts using backend validations. A demo login option is also available. 

```
// User Authentication Back End
def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)    
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
```
``` 
// User Authentication Front End Form Submission
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
```

#### Profile editing
![profile](https://imgur.com/a/LKs5Xzc)

* User can click the edit icon for a modal to pop up and show text boxes containing current data for user to revise and submit.

```
// AJAX calls are used to communicate between the frontend and backend
export const createExperience = (experience) => (
    $.ajax({
        method: "POST",
        url: "/api/experiences",
        data: {
            experience
        }
    })
)

export const fetchExperience = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/experiences/${userId}`,
    })
)

export const updateExperience = (experience) => (
    $.ajax({
        method: "PATCH",
        url: `/api/experiences/${experience.id}`,
        data: {
            experience
        }
    })
)
```

#### Adding Connections
![connections](https://i.imgur.com/rnluMy6.png)

* User can add connections and view the personal list of connections

```
// Actions are used to send data from the application to the store
export const receiveAllConnections = (connections) => ({
    type: RECEIVE_ALL_CONNECTIONS,
    connections
});

export const fetchAllConnections = (id) => dispatch => (
    APIUtil.fetchAllConnections(id)
        .then(connections => dispatch(receiveAllConnections(connections)))
)

export const createConnection = (connection) => dispatch => (
    APIUtil.createConnection(connection)
        .then(connections => dispatch(receiveAllConnections(connections)))
)
```

#### News Feed
![feed](https://i.imgur.com/C6zIrtd.png)

```
// Clicking "Comment" or "x Likes x Comments" toggles visibility of comment form
        <div className="post-likes-comments" onClick={this.openCreateComment}>
            <div className="post-likes">{this.props.likes.length} Likes </div> 
            <div className="post-comments">{this.props.comments.length} Comments</div>
        </div>
```
```
        <div className="comment" onClick={this.openCreateComment}><i className="far fa-comment-alt"></i> Comment </div>
```

### Features in Progress
* Likes button
* Adding connections that aren't preloaded into requests
* Jobs page
* Messaging functionality
