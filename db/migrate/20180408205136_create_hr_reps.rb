class CreateHrReps < ActiveRecord::Migration[5.1]
  def change
    create_table :hr_reps do |t|
      t.string :title
      t.string :name
      t.string :phone_1
      t.string :phone_2
      t.string :email
      t.integer :business_id

      t.timestamps
    end
  end
end
