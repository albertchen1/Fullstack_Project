class Post < ApplicationRecord
    validates :body, presence: true

    belongs_to :user

    has_many :comments
    has_many :likes
end
