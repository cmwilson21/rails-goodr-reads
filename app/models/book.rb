class Book < ApplicationRecord
  has_many :reviews, depend: :destroy
  has_many :users, through: :reviews
end
