
class UpdateUserAbout < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :summary, :text
    add_column :users, :headline, :text, null:false
  end
end
