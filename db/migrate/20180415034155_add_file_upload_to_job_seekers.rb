class AddFileUploadToJobSeekers < ActiveRecord::Migration[5.1]
  def change
    add_column :job_seekers, :file_upload, :string
  end
end
