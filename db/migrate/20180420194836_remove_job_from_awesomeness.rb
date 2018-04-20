class RemoveJobFromAwesomeness < ActiveRecord::Migration[5.1]
  def change
    rename_column :jobs, :job_awesomeness, :awesomeness
    rename_column :job_seekers, :self_awesomeness, :awesomeness

  end
end
