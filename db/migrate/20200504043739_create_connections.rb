class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.integer :user_id, null: false
      t.integer :recipient_id, null:false
      t.timestamps
    end
  end
end
