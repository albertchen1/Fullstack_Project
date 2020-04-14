class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            @posts = Post.all
            render :index 
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.all
        render :index
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        @posts = Post.all
        render :index
    end

    private
    def post_params
        params.require(:post).permit(:body)
    end
end
