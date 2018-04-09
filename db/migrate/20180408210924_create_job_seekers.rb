class CreateJobSeekers < ActiveRecord::Migration[5.1]
  def change
    create_table :job_seekers do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :zip
      t.string :status
      t.string :occupation
      t.string :experience
      t.string :work_value
      t.text :self_awesomeness

      t.timestamps
    end
  end
end
