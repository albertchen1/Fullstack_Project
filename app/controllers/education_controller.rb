def indndexs
        
        @educations = Education.all
        render :index        
    end

    def show
        @educations = Education.where(user_id: params[:id])
        render '/api/education/show'
    end

    def create
        @education = Education.new(education_params)
        if @education.save
            render '/api/education/show'
        else
            render json: [@education.errors.full_messages], status: 422
        end
    end

    def update
        @education = Education.find(params[:id])
        if @education.update_attributes(education_params)
            render '/api/education/show'
        else
            render json: @education.errors.full_messages, status: 422
        end
    end

    def destroy
        @education = Education.find(params[:id])
        if @education.destroy
            render '/api/education/show'
        else
            render json: @education.errors.full_messages, status: 422
        end

    end

    private 

    def education_params
        params.require(:education).permit(:school, :degree, :field_study, :gpa, :start_year, :end_year, :description)
    end
 