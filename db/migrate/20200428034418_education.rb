class Education < ActiveRecord::Migration[5.2]
  def change
      create_table :education do |t|
        t.string :school, null: false
        t.string :degree
        t.string :field_study
        t.float :gpa
        t.integer :start_year
        t.integer :end_year
        t.text :description
      end
  end
end
