@connections.each do |connection|
    json.set! connection.id do
        if @user_id == connection.user_id
            json.extract! connection, :id, :user_id, :recipient_id
            json.recipient do
                json.extract! connection.recipient, :id, :first_name, :last_name, :location, :summary, :headline
            end
        else
            json.extract! connection, :id, :user_id, :recipient_id
            json.recipient do 
                json.extract! connection.user, :id, :first_name, :last_name, :location, :summary, :headline
            end
        end
    end
end