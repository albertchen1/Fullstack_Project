class UdpateUsers < ActiveRecord::Migration[5.2]
  def change
      remove_column :users, :email
      remove_column :users, :headline
  end
end
