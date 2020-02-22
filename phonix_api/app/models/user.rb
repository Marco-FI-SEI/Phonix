class User < ApplicationRecord
  has_many :reviews
  has_many :headphones, through: :reviews
end
