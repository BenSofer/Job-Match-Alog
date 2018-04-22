class ChangesJobsIdMatches < ActiveRecord::Migration[5.1]
  def change
    rename_column :matches, :jobs_id, :job_id
  end
end
