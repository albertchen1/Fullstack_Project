class Connection < ApplicationRecord

    validates :user_id, :recipient_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :recipient,
    foreign_key: :recipient_id,
    class_name: :User
end
