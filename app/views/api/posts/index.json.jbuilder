@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :body, :user_id
        json.author do 
            json.partial! '/api/users/user', user:  post.user
        end
    end
end