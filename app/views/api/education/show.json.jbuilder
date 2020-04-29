@educations.each do |education|
    json.set! education.id do 
        json.extract! education, :id, :school, :degree, :field_study, :gpa, :start_year, :end_year, :description
    end
end