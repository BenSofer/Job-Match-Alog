class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :occupation
      t.string :experience
      t.string :work_value
      t.text :job_awesomeness
      t.string :file_upload
      t.string :status
      t.integer :business_id

      t.timestamps
    end
  end
end
