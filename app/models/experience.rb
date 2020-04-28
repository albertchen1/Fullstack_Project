class Experience < ApplicationRecord
    validates :title, :company, :start_date_month, :start_date_year, :end_date_month, :end_date_year, presence: true


    belongs_to :user

end
