class Api::ConnectionsController < ApplicationController

    def show
        @connections = Connection.where(user_id: params[:id]).or(Connection.where(recipient_id: params[:id]))
        @user_id = params[:id].to_i
        puts @user_id
        puts (@connections[0].user_id)
        puts (@user_id == @connections[0].user_id)
        if @connections
            render '/api/connections/show'
        else
            render json: @connections.errors.full_messages, status: 422
        end
    end

    # First scenario: Make two Connections, A to B and B to A

    # Second scenario I can make one connection instead of two
    # It doesn't matter if A is the user_id or B is the user_id
    # because when I search like in 
    # @connections = Connection.where(user_id: @connection.recipient_id).or(Connection.where(recipient_id: @connection.recipient_id))
    # i use an OR statement. So if I'm looking for user A's connections, it looks through 
    # all the user_id's for an A and also all the recipients for an A
    # Does that make sense

    # So now I have the problem of @connections either has user_id of A or recipient_id of A
    # I don't know where it is
    # How do I filter this for the frontend
    # I'm using @user_id here, but it doesn't seem optimal

    def create
        @connection = Connection.new(connection_params)
        @user_id = @connection.recipient_id
        if @connection.save
            @connections = Connection.where(user_id: @connection.recipient_id).or(Connection.where(recipient_id: @connection.recipient_id))
            render '/api/connections/show'
        else
            render json: @connections.errors.full_messages, status: 422
        end
    end

    # def destroy
    #     @connection = Connection.find(params[:id])
    #     if @connection.destroy

    #     else

    #     end
    # end
end
