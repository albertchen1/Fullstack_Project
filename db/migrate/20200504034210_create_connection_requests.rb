class CreateConnectionRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :connection_requests do |t|
      t.integer :user_id, null: false
      t.integer :recipient_id, null:false
      t.timestamps
    end
  end
end
