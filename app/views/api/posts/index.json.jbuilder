@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :body, :user_id
        json.author do 
            json.partial! '/api/users/user', user:  post.user
        end
        json.comments do
            post.comments.each do |comment|
                json.set! comment.id do 
                    json.extract! comment, :id, :body, :user_id, :post_id
                    json.author do 
                        json.partial! '/api/users/user', user:  comment.user
                    end
                end
            end
        end
    end
end