class AddDescription < ActiveRecord::Migration[5.2]
  def change
    add_column :experiences, :description, :text
  end
end
