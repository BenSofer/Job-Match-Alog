class CreateMatches < ActiveRecord::Migration[5.1]
  def change
    create_table :matches do |t|
      t.integer :jobs_id
      t.integer :job_seeker_id

      t.timestamps
    end
  end
end
