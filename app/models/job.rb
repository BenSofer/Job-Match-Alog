class Job < ApplicationRecord
  belongs_to :business
  has_many :matches
end
