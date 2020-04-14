@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :user_id, :post_id
        json.author do 
            json.partial! '/api/users/user', user:  comment.user
        end
    end
end