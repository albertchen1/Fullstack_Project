class Api::LikesController < ApplicationController

    def index
       
    end


    def create
        @like = Like.new(like_params)
        # @like.post_id = @like.post_id.to_i
        @like.user_id = current_user.id
        if @like.save
            # @comments = Comment.where(post_id: @comment.post_id)
            @post = Post.find(@like.post_id)
            p @post
            p '-----------------------------'
            render '/api/posts/show'
            # render :show 
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    # def show
    #     @comments = Comment.where(post_id: params[:id])
    #     render :show
    # end


    #when you click on the post, show all the posts comment

    def destroy
        @like = Like.find(params[:id].to_i)
        # @post_id = @like.post_id
        @post = Post.find(@like.post_id)
        p @post
        if @like.destroy
            render '/api/posts/show'
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    private 
    def like_params
        params.require(:like).permit(:post_id)
    end
end
