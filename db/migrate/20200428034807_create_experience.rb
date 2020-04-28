class CreateExperience < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :title, null: false
      t.string :company, null: false
      t.string :location
      t.string :start_date_month, null: false
      t.integer :start_date_year, null: false
      t.string :end_date_month, null: false
      t.integer :end_date_year, null: false
    end
  end
end
