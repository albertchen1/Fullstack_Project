class UpdateUserExperience < ActiveRecord::Migration[5.2]
  def change
    add_column :experiences, :user_id, :integer, null:false
    add_column :education, :user_id, :integer, null:false
  end
end
