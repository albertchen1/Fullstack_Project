class ChangeEducationToEducations < ActiveRecord::Migration[5.2]
  def change
    rename_table :education, :educations
  end
end
