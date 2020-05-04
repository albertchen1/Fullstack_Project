@connection_requests.each do |request|
    json.set! request.id do
        json.extract! request, :id, :user_id, :recipient_id
        json.sender do
            json.extract! request.user, :id, :first_name, :last_name, :location, :summary, :headline
        end
    end
end