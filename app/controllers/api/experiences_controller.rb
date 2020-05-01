class Api::ExperiencesController < ApplicationController



    def create
    @experience = Experience.new(experience_params)
    if @experience.save
        render '/api/experiences/show'
    else
        render json: @experience.errors.full_messages, status: 422
    end
    end

    def index
        @experiences = Experience.all
        render :index
    end

    def show
        @experiences = Experience.where(user_id: params[:id])
        if @experiences
            render '/api/experiences/show'
        else
            render json: @experiences.errors.full_messages, status: 422
        end

    end

    def update
        @experience = Experience.find(params[:id])
        if @experience.update_attributes(experience_params)
            @experiences = Experience.where(user_id: @experience.user_id)
            render '/api/experiences/show'
        else
            render json: @experience.errors.full_messages, status: 422
        end

    end


    def destroy
        @experience = Experience.find(params[:id])
        if @experience.destroy
            render "api/experiences/show"
        else
            render json: ['No experience to delete'], status: 404
        end
    end 

  private

  def experience_params
    params.require(:experience).permit(:title, :company, :location, :start_date_month, :start_date_year, :end_date_month, :end_date_year, :description)
  end

end
