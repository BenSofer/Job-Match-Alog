class Business < ApplicationRecord
  has_many :jobs
  has_many :hr_reps
end
