class Api::ConnectionRequestsController < ApplicationController

    def show
        @connection_requests = ConnectionRequest.where(recipient_id: params[:id])
        if @connection_requests
            render '/api/connection_requests/show'
        else
            render json: @connection_request.errors.full_messages, status: 422
        end

    end

    def create
        @connection_request = ConnectionRequest.new(connection_request_params)
        if @connection_request.save
            @connection_requests = ConnectionRequest.where(recipient_id: @connection_request.user_id)
            render '/api/connection_request/show'
        else
            render json: @connection_request.errors.full_messages, status: 422
        end
    end

    def destroy
        @connection_request = ConnectionRequest.find(params[:id])
        if @connection_request.destroy
            @connection_requests = ConnectionRequest.where(recipient_id: @connection_request.recipient_id)
            render '/api/connection_requests/show'
        else
            render json: @connection_request.errors.full_messages, status: 422
        end
    end

    private 

    def connection_request_params
        params.require(:connection_request).permit(:user_id, :recipient_id)
    end
end
